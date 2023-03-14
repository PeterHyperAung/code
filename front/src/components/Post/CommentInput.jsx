import React, { useRef, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { addComment } from "../../utils/apiCalls";

const CommentInput = ({ post, setPost, id, setCommentLength }) => {
  const [data, setData] = useState("");
  const input = useRef();

  const handleClick = () => {
    if (data.trim() === "") return;
    (async function () {
      const res = await addComment(data, id);
      res.owner_user = [res.owner_user];
      post.post_comments.push(res);
      console.log(post);
      setPost({ ...post });
      // setComments((com) => {
      //   return [...com, res];
      // });
      setCommentLength((count) => count + 1);
      input.current.value = "";
    })();
  };

  return (
    <div className="flex justify-center max-w-[1000px] mx-auto gap-4">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full"
        onChange={(e) => setData(e.target.value)}
        ref={input}
      />
      <button
        className="rounded py-3 px-3 bg-primary text-white"
        onClick={handleClick}
      >
        Comment
      </button>
    </div>
  );
};

export default CommentInput;
