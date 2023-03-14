import React, { useState, useEffect } from "react";
import {
  AiFillLike as LikeIcon,
  AiOutlineLike as UnlikeIcon,
  AiFillMessage as CommentIcon,
  AiOutlineUser as UserIcon,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { likePost } from "../../utils/apiCalls";

const PostItem = ({ post, likeLength, setLikeLength, commentsLength }) => {
  const { authUser } = useAuth();

  const [like, setLike] = useState(post.likes.includes(authUser._id));

  console.log(post);
  const date = new Date(post.created);
  return (
    <div className="mb-8 shadow max-w-[1200px] p-4 transition-all hover:-translate-y-2 mx-auto flex gap-5">
      <div>
        <div className="w-[150px] flex justify-center items-center h-[100%] flex-col">
          <UserIcon className="text-4xl" />
          <p>
            {post.owner_user[0].firstName} {post.owner_user[0].lastName}
          </p>
          <p>
            {date.getDate()} - {date.getMonth() + 1} - {date.getFullYear()}
          </p>
        </div>
      </div>
      <div className="grow">
        <h3 className="text-2xl mb-2 font-bold">{post.title}</h3>
        <p>{post.body}</p>
        <div className="flex gap-7 text-2xl justify-end pr-6 mb-2 mt-4">
          {/* <div
            onClick={() => {
              likePost(post._id);

              setLike((like) => !like);
              // if (like) setLikeLength((count) => count - 1);
              // else setLikeLength((count) => count + 1);
            }}
            className="flex items-end gap-2"
          >
            {like ? (
              <LikeIcon className="cursor-pointer" />
            ) : (
              <UnlikeIcon className="cursor-pointer" />
            )}
            <span className="text-base">{likeLength}</span> *
          </div> */}
          <Link to={`/posts/${post._id}`} className="flex items-end gap-2">
            <CommentIcon className="cursor-pointer" />
            <span className="text-base">{commentsLength}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
