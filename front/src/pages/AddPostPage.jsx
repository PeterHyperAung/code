import React, { useState, useEffect } from "react";
import PostForm from "../components/Post/PostForm";
import { useAuth } from "../Providers/AuthProvider";
import abort from "../utils/abort";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "./NotFound";

const AddPostPage = () => {
  const { auth } = useAuth();
  let [tokenInvalid, setTokenInvalid] = useState();

  useEffect(() => {
    (async function () {
      setTokenInvalid(await abort());
    })();
  }, []);

  if (!auth || tokenInvalid) return <NotFound />;

  return (
    <>
      <Navbar />
      <div className="w-[100vw] max-h-[100vh] min-h-[80vh] flex justify-center items-center pt-[100px]">
        <div>
          <h2 className="mb-16 text-4xl font-bold">Add Your Post</h2>
          <PostForm></PostForm>
        </div>
      </div>
    </>
  );
};

export default AddPostPage;
