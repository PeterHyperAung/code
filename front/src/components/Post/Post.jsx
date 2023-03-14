import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostComment from "./PostComment";
import CommentInput from "./CommentInput";

const Post = ({
  post,
  setPost,
  id,
  toggleLikeHandler,
  likeLength,
  setLikeLength,
  commentLength,
  setCommentLength,
}) => {
  // const [comments, setComments] = useState();

  return (
    <div>
      <PostItem
        post={post}
        commentsLength={commentLength}
        toggleLikeHandler={toggleLikeHandler}
        likeLength={likeLength}
        setLikeLength={setLikeLength}
      />
      <CommentInput
        post={post}
        setPost={setPost}
        id={id}
        setCommentLength={setCommentLength}
        // setComments={setComments}
      />
      <div>
        {post.post_comments.map((comment) => (
          <PostComment comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};

export default Post;
