import React, { useEffect, useState } from "react";
import PostList from "../components/Post/PostList";
import { useAuth } from "../Providers/AuthProvider";
import { getPosts } from "../utils/apiCalls";
import abort from "../utils/abort";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const PostListPage = () => {
  const [posts, setPosts] = useState([]);

  let [tokenInvalid, setTokenInvalid] = useState();

  useEffect(() => {
    (async function () {
      setTokenInvalid(await abort());
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const data = await getPosts();
      setPosts(data.filter((i) => i.type === "post"));
    })();
  }, []);

  const { auth } = useAuth();
  if (!auth || tokenInvalid) return <NotFound />;

  return (
    <>
      <Navbar />
      <div className="pt-[120px]">
        <PostList posts={posts} />
      </div>
      <Link to="/posts/add">
        <button className="rounded-full w-[60px] h-[60px] text-white bg-primary fixed bottom-11 right-11 text-4xl">
          +
        </button>
      </Link>
    </>
  );
};

export default PostListPage;
