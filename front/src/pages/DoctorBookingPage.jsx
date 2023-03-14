import React from "react";
import Navbar from "../components/Navbar/Navbar";
import DoctorBookingForm from "../components/DoctorBookingForm";
const DoctorBookingPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[120px]">
        <DoctorBookingForm />
      </div>
    </>
  );
};

export default DoctorBookingPage;
