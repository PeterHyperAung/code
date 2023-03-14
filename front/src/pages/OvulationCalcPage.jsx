import React from "react";
import OvulationCalculator from "../components/OvulationCalculator";
import Navbar from "../components/Navbar/Navbar";

const OvulationCalcPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[120px]">
        <OvulationCalculator />
      </div>
    </>
  );
};

export default OvulationCalcPage;
