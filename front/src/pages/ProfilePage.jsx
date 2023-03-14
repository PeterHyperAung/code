import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useAuth } from "../Providers/AuthProvider";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import NotFound from "./NotFound";

const ProfilePage = () => {
  const { authUser } = useAuth();
  if (!authUser?.firstName) return <NotFound />;

  return (
    <>
      <Navbar />
      <div className="max-vh-[100vh] min-vh-[70vh] pt-[180px]">
        <h2 className="text-center text-4xl mb-3 font-bold">
          <span className="text-primary">Your</span> info
        </h2>
        <div className="flex justify-center gap-9 items-center flex-col md:flex-row">
          <div>
            <UserIcon className="w-[200px] h-[200px]" />
          </div>
          <div className="lg:p-10 lg:px-36 p-6">
            <div className="flex gap-10 flex-wrap mb-8 flex-col">
              <div className="">
                <div htmlFor="firstname" className="text-lg block mb-2">
                  FIRST NAME
                </div>
                <div className="border border-primary rounded p-3 text-primary px-4">
                  {authUser.firstName}
                </div>
              </div>

              <div className="">
                <div htmlFor="firstname" className="text-lg block mb-2">
                  LAST NAME
                </div>
                <div className="border border-primary rounded p-3 text-primary px-4">
                  {authUser.lastName}
                </div>
              </div>

              <div className="">
                <div htmlFor="firstname" className="text-lg block mb-2">
                  EMAIL
                </div>
                <div className="border border-primary rounded p-3 text-primary px-4">
                  {authUser.email}
                </div>
              </div>

              <div className="">
                <div htmlFor="firstname" className="text-lg block mb-2">
                  DATE OF BIRTH
                </div>
                <div className="border border-primary rounded p-3 text-primary px-4">
                  {authUser.dob}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
