import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkFieldsExist, validateEmail } from "../../utils/validate";
import { createUser, loginUser } from "../../utils/apiCalls";
import { useAuth } from "../../Providers/AuthProvider";
import { parseJwt } from "../../utils/converter";
const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuthUser, setAuth } = useAuth();

  const [errAlert, setErrAlert] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [requireErr, setRequireErr] = useState({
    email: false,
    password: false,
  });

  const [emailErr, setEmailErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkFields = checkFieldsExist(data);

    if (!checkFields.result) {
      const errors = {
        email: false,
        password: false,
      };

      checkFields.errorFields.map((field) => {
        errors[field] = true;
      });
      setRequireErr({ ...errors });
      return;
    }

    if (!validateEmail(data.email)) {
      setEmailErr(true);
      return;
    }

    (async () => {
      const result = await loginUser(data.email, data.password);
      if (result.token) {
        setAuth(true);
        setAuthUser(parseJwt(result.token));
        localStorage.setItem("may-may-site-token", result.token);
        setData({
          email: "",
          password: "",
        });
        navigate("/posts");
      } else {
        setErrAlert(true);
      }
    })();
  };

  return (
    <form
      className="lg:p-10 lg:px-36 md:p-6 p-2 flex justify-center items-center md:h-[100vh] h-[60vh]"
      onSubmit={handleSubmit}
    >
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
      <div className="bg-white p-10 rounded">
        <h2 className="text-4xl mb-8">Login</h2>
        <div className="mb-6">
          <label htmlFor="email" className="text-lg block mb-2">
            EMAIL
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="input input-bordered border-primary outline-primary input-secondary w-full lg:max-w-xs lg:min-w-[250px] text-primary"
            onChange={(e) =>
              setData((data) => ({ ...data, email: e.target.value }))
            }
          />
          {requireErr.email && (
            <>
              <br />
              <span className="text-red-500 inline-block pl-2">
                Email is required
              </span>
            </>
          )}
          {emailErr && (
            <>
              <br />
              <span className="text-red-500 inline-block pl-2">
                Please provide a valid email format.
              </span>
            </>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-lg block mb-2">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered border-primary outline-primary input-secondary w-full lg:max-w-xs lg:min-w-[250px] text-primary"
            onChange={(e) =>
              setData((data) => ({ ...data, password: e.target.value }))
            }
          />
          {requireErr.password && (
            <>
              <br />
              <span className="text-red-500 inline-block pl-2">
                Password is required
              </span>
            </>
          )}
        </div>
        <div className="">
          <button className="rounded-md py-3 px-6 text-white bg-primary mr-3">
            Login
          </button>
          <Link
            className="rounded-md py-3 px-6 text-white bg-primary"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
