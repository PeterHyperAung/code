import React from "react";
// import PostItemContainer from "./PostItemContainer";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="">
      {posts.map((post) => (
        <PostItem
          post={post}
          key={post._id}
          commentsLength={post.comments.length}
        />
      ))}
    </div>
  );
};

export default PostList;
