import React, { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import Post from "../components/Post/Post";
import { useParams } from "react-router-dom";
import { getPost } from "../utils/apiCalls";
import abort from "../utils/abort";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "./NotFound";

const PostPage = () => {
  const param = useParams();
  const [post, setPost] = useState({});
  const [likeLength, setLikeLength] = useState();
  const [commentLength, setCommentLength] = useState();
  const [loading, setLoading] = useState(true);
  const { auth, authUser } = useAuth();

  let [tokenInvalid, setTokenInvalid] = useState();

  useEffect(() => {
    (async function () {
      setTokenInvalid(await abort());
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const res = await getPost(param.id);
      console.log(res);
      setPost({ ...res[0] });
      setLikeLength(res[0].likes.length);
      setCommentLength(res[0].comments.length);
      setLoading(false);
    })();
  }, [param.id]);

  if (loading) return;
  if (!auth || !post || tokenInvalid) return <NotFound />;

  return (
    <>
      <Navbar />
      <div>
        <div className="pt-[120px]">
          <Post
            post={post}
            setPost={setPost}
            likeLength={likeLength}
            setLikeLength={setLikeLength}
            commentLength={commentLength}
            setCommentLength={setCommentLength}
            id={param.id}
          />
        </div>
      </div>
    </>
  );
};

export default PostPage;
