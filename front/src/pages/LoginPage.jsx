import React from "react";
import LoginForm from "../components/Authentication/LoginForm";
import Navbar from "../components/Navbar/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-[100vw] min-h-[100vh] flex-wrap-reverse bg-primary">
        <div className="w-[100vw] md:w-[40vw] flex justify-center md:justify-end items-center">
          <img src="/Login.svg" alt="" />
        </div>
        <div className="w-[100vw] md:w-[60vw]">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
