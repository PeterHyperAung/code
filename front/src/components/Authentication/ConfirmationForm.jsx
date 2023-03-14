import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmUser, loginUser } from "../../utils/apiCalls";
import { useAuth } from "../../Providers/AuthProvider";
import { parseJwt } from "../../utils/converter";

const ConfirmationForm = ({ email, password }) => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser, setAuth } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    (async function () {
      const data = await confirmUser(code);
      if (data.message === "finished") {
        const login = await loginUser(email, password);
        if (typeof login === "string" && login.includes("Error:")) return;
        const token = parseJwt(login.token);
        setAuth(true);
        setAuthUser(token);
        localStorage.setItem("may-may-site-token", login.token);
        navigate("/posts");
      } else {
        setErr(true);
      }
    })();
  };

  return (
    <div>
      <p className="text-center mb-5">
        We've sent a confirmation code to your email.
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <input
          type="text"
          placeholder="Enter your confirmation code.."
          className="input input-bordered input-secondary w-full max-w-xs"
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="rounded-md py-3 px-6 text-white bg-primary">
          Confirm
        </button>
      </form>
      <div>
        {err && (
          <div className="alert alert-error shadow-lg">
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
              <span>Error! Confirmation failed.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationForm;
