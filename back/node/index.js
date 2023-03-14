const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const salt = "asuperdupersecret!";
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient(
  "mongodb+srv://aviothicedu:hello@cluster0.lrdndgl.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongo.db("may");

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(400).json({ msg: "token missing" });

  let hasErr = false;
  jwt.verify(token, salt, function (err, decoded) {
    if (err) {
      hasErr = true;
      return res.status(403).json({ msg: "invalid token" });
    }
    res.locals.user = decoded;
  });

  if (hasErr) return;

  next();
};

app.use(auth);
app.post("/posts", async (req, res) => {
  try {
    const user = await db
      .collection("users")
      .findOne({ email: res.locals.user.email });

    const data = {
      ...req.body,
      likes: [],
      comments: [],
      type: "post",
      owner_user_id: user._id,
    };

    db.collection("posts").insertOne(data);
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const data = await db
      .collection("posts")
      .aggregate([
        {
          $lookup: {
            foreignField: "_id",
            localField: "owner_user_id",
            from: "users",
            as: "owner_user",
          },
        },
      ])
      .toArray();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await db
      .collection("posts")
      .aggregate([
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            localField: "comments",
            foreignField: "_id",
            from: "posts",
            as: "post_comments",
            pipeline: [
              {
                $lookup: {
                  foreignField: "_id",
                  localField: "owner_user_id",
                  from: "users",
                  as: "owner_user",
                },
              },
            ],
          },
        },
        {
          $lookup: {
            localField: "likes",
            foreignField: "_id",
            from: "users",
            as: "post_likes",
          },
        },
        {
          $lookup: {
            foreignField: "_id",
            localField: "owner_user_id",
            from: "users",
            as: "owner_user",
          },
        },
      ])
      .toArray();

    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.patch("/posts/:id/comments", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await db
      .collection("users")
      .findOne({ email: res.locals.user.email });

    const commentObj = {
      type: "comment",
      likes: [],
      comments: [],
      created: Date.now(),
      owner_user_id: user._id,
      owner_user: user,
    };

    commentObj.body = req.body.data;

    const response = await db.collection("posts").insertOne(commentObj);
    const insertId = response.insertedId;

    await db
      .collection("posts")
      .updateOne({ _id: new ObjectId(id) }, { $push: { comments: insertId } });

    res.status(200).json(commentObj);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.patch("/posts/:id/likes", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(res.locals.user);
    const { _id } = res.locals.user;
    const result = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });
    let data;
    console.log(_id);
    if (result.likes.includes(_id)) {
      data = await db
        .collection("posts")
        .findOneAndUpdate({ _id: new ObjectId(id) }, { $pull: { likes: _id } });
    } else {
      data = await db
        .collection("posts")
        .findOneAndUpdate({ _id: new ObjectId(id) }, { $push: { likes: _id } });
    }

    console.log("DATA", data.value);

    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.get("checkToken", async (req, res) => {
  const authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(400).json({ msg: false });

  let hasErr = false;
  jwt.verify(token, salt, function (err, decoded) {
    if (err) {
      hasErr = true;
      return res.status(403).json({ msg: false });
    }
    res.locals.user = decoded;
  });

  if (hasErr) return;

  res.status(200).json({ msg: true });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("API server running");
});
