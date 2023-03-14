import React from "react";
import ConfirmationForm from "../components/Authentication/ConfirmationForm";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

const ConfirmationPage = () => {
  const location = useLocation();
  if (!location.state) return <NotFound />;

  const { status, email, password } = location.state;

  return (
    <div className="flex justify-center">
      <div className="mt-10 w-[300px]">
        <img src="/logo.svg" alt="" />
        <div className="divider"></div>
        <ConfirmationForm email={email} password={password} />
      </div>
    </div>
  );
};

export default ConfirmationPage;
