import React from "react";
import PregnancyCalculator from "../components/PregnancyCalculator";
import Navbar from "../components/Navbar/Navbar";

const PregCalcPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[120px]">
        <PregnancyCalculator />
      </div>
    </>
  );
};

export default PregCalcPage;
