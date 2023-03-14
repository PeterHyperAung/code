import React, { useEffect, useState } from "react";
import { checkFieldsExist, validateEmail } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utils/apiCalls";

const PostForm = () => {
  const navigate = useNavigate();

  const [errAlert, setErrAlert] = useState(false);

  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const [requireErr, setRequireErr] = useState({
    title: false,
    body: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkFields = checkFieldsExist(data);

    if (!checkFields.result) {
      const errors = {
        title: false,
        body: false,
      };

      checkFields.errorFields.map((field) => {
        errors[field] = true;
      });
      setRequireErr({ ...errors });
      return;
    }

    (async () => {
      const result = await createPost(data.title, data.body);
      if (!result) {
        setErrAlert(true);
        return;
      }
      navigate("/posts");
    })();
  };

  return (
    <div>
      {errAlert && (
        <div className="alert alert-error shadow-lg mb-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Form Submission failed. Please try again.</span>
          </div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-8 lg:w-[50vw] md:w-[60vw] w-[90vw]">
          <label htmlFor="title" className="text-lg block mb-2">
            TITLE
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title"
            className="input input-bordered border-primary outline-primary input-secondary w-full  text-primary"
            onChange={(e) =>
              setData((data) => ({ ...data, title: e.target.value }))
            }
          />
          {requireErr.title && (
            <span className="text-red-500 inline-block pl-2">
              Title is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="body" className="text-lg block mb-2">
            Body
          </label>
          <textarea
            id="body"
            className="textarea textarea-secondary w-full h-60 text-primary"
            placeholder="Enter the body text"
            onChange={(e) => setData({ ...data, body: e.target.value })}
          ></textarea>
          {requireErr.body && (
            <span className="text-red-500 inline-block pl-2">
              Body is required
            </span>
          )}
        </div>
        <div className="text-right">
          <button className="rounded-md py-3 px-6 text-white bg-primary mt-4">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
