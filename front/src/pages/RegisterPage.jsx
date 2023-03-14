import React from "react";
import RegisterForm from "../components/Authentication/RegisterForm";
import Navbar from "../components/Navbar/Navbar";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-[100vw] min-h-[60vh] flex-wrap-reverse">
        <div className="w-[100vw] md:w-[45vw] flex justify-center items-center">
          <img src="/Register.svg" alt="" />
        </div>
        <div className="w-[100vw] md:w-[55vw] p-10 mt-36">
          <div className="flex items-center justify-evenly">
            <h2 className="text-4xl">
              <span className="text-primary">Sign</span>Up
            </h2>
            <div>
              <img src="/logo.svg" alt="" className="h-[120px]" />
            </div>
          </div>
          <div className="divider">Please fill the Sign Up form</div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
