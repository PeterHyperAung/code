import React, { useEffect, useState } from "react";
import { checkFieldsExist, validateEmail } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../utils/apiCalls";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [errAlert, setErrAlert] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    role: "",
  });

  const [requireErr, setRequireErr] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    dob: false,
    role: false,
  });

  const [emailErr, setEmailErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkFields = checkFieldsExist(data);

    if (!checkFields.result) {
      const errors = {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        dob: false,
        youare: false,
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
      const result = await createUser(data);
      if (result.message === "Signup successful") {
        navigate("/user/confirm", {
          state: { status: true, email: data.email, password: data.password },
        });
        setData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          dob: "",
          role: "",
        });
      } else {
        setErrAlert(true);
      }
    })();
  };

  return (
    <form className="lg:p-10 lg:px-36 p-6" onSubmit={handleSubmit}>
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
      <div className="grid gap-10 flex-wrap mb-8 2xl:grid-cols-2 grid-cols-1 justify-center">
        <div className="">
          <label htmlFor="firstname" className="text-lg block mb-2">
            FIRST NAME
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="Enter your first name"
            className="input input-bordered border-primary outline-primary input-secondary w-full lg:max-w-xs lg:min-w-[250px]  text-primary"
            onChange={(e) =>
              setData((data) => ({ ...data, firstName: e.target.value }))
            }
          />
          {requireErr.firstName && (
            <span className="text-red-500 inline-block pl-2">
              First Name is required
            </span>
          )}
        </div>

        <div>
          <label htmlFor="lastname" className="block mb-2 text-lg">
            LAST NAME
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Enter your last name"
            className="input input-bordered border-primary outline-primary input-secondary w-full lg:max-w-xs lg:min-w-[250px] text-primary"
            onChange={(e) =>
              setData((data) => ({ ...data, lastName: e.target.value }))
            }
          />
          {requireErr.lastName && (
            <span className="text-red-500 inline-block pl-2">
              {" "}
              Last Name is required
            </span>
          )}
        </div>

        <div>
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
            <span className="text-red-500 inline-block pl-2">
              Email is required
            </span>
          )}
          {emailErr && (
            <span className="text-red-500 inline-block pl-2">
              Please provide a valid email format.
            </span>
          )}
        </div>

        <div>
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
            <span className="text-red-500 inline-block pl-2">
              Password is required
            </span>
          )}
        </div>

        <div>
          <label htmlFor="dob" className="text-lg block mb-2">
            DATE OF BIRTH
          </label>
          <input
            id="dob"
            type="date"
            placeholder="Type here"
            className="input input-bordered border-primary outline-primary input-secondary w-full lg:max-w-xs lg:min-w-[250px] text-primary"
            onChange={(e) =>
              setData((data) => ({ ...data, dob: e.target.value }))
            }
          />
          {requireErr.dob && (
            <span className="text-red-500 inline-block pl-2">
              Date of birth is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="role" className="text-lg block mb-2">
            YOU ARE
          </label>
          <select
            id="role"
            type="text"
            placeholder="Type here"
            className="input input-bordered border-primary outline-primary input-secondary w-full lg:max-w-xs lg:min-w-[250px] text-primary"
            onChange={(e) =>
              setData((data) => {
                return { ...data, role: e.target.value };
              })
            }
          >
            <option defaultChecked disabled>
              Choose an option
            </option>
            <option value="normal">Normal</option>
            <option value="helper">Helper</option>
            <option value="after">After Pregnant</option>
            <option value="young">Young Pregnant</option>
            <option value="adult">Adult Pregnant</option>
          </select>
          {requireErr.role && (
            <span className="text-red-500 inline-block pl-2">
              Your role is required
            </span>
          )}
        </div>
      </div>
      <div className="2xl:text-right">
        <button className="rounded-md py-3 px-6 text-white bg-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
