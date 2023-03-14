import React, { useState } from "react";
import {
  AiFillLike as LikeIcon,
  AiOutlineLike as UnlikeIcon,
  AiFillMessage as CommentIcon,
  AiOutlineUser as UserIcon,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { likePost } from "../../utils/apiCalls";
import { useAuth } from "../../Providers/AuthProvider";

const PostComment = ({ comment }) => {
  const { authUser } = useAuth();
  const [like, setLike] = useState(comment.likes.includes(authUser._id));
  const [likesLength, setLikesLength] = useState(comment.likes.length);
  const [commentsLength, setCommentsLength] = useState(comment.comments.length);

  const date = new Date(comment.created);
  return (
    <div className="mb-8 shadow max-w-[1200px] p-4 transition-all hover:-translate-y-2 mx-auto flex gap-5">
      <div>
        <div className="w-[150px] flex justify-center items-center h-[100%] flex-col">
          <UserIcon className="text-4xl" />
          <p>
            {comment.owner_user[0].firstName} {comment.owner_user[0].lastName}
          </p>
          <p>
            {date.getDate()} - {date.getMonth() + 1} - {date.getFullYear()}
          </p>
        </div>
      </div>
      <div className="grow">
        <h3 className="text-2xl mb-2">{comment.title}</h3>
        <p>{comment.body}</p>
        <div className="flex gap-7 text-2xl justify-end pr-6 mb-2 mt-4">
          {/* <div
            onClick={() => {
              likePost(comment._id);
              setLike((like) => !like);
              if (like) setLikesLength((like) => like - 1);
              else setLikesLength((like) => like + 1);
            }}
            className="flex items-end gap-2"
          >
            {like ? (
              <LikeIcon className="cursor-pointer" />
            ) : (
              <UnlikeIcon className="cursor-pointer" />
            )}
            <span className="text-base">{likesLength}</span>
          </div> */}
          <Link to={`/posts/${comment._id}`} className="flex items-end gap-2">
            <CommentIcon className="cursor-pointer" />
            <span className="text-base">{commentsLength}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
