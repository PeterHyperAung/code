import React from "react";

function PregnancyCalculator() {
  return (
    <div className="App shadow-shadow1 w-[80%] mx-auto h-96">
      <div className="">
        <h1 className="font-main font-bold text-2xl px-10">
          Learn what's to come during your pregnancy with a personalized guide.
        </h1>
        <p className="font-main pt-5 text-lg p-10 text-justify font-normal">
          Plan for each stage of your journey with advice from experts and
          parents who have been there. Each week and month, you will learn
          everything from key tasks for prenatal health to shopping tips.
        </p>
      </div>

      <div className="">
        <label className="flex pl-10 font-main text-lg justify-self-start">
          First, what is your baby's due date?
        </label>
        <input
          type={"date"}
          className="w-1/2 mt-5 py-1 px-3 font-main rounded-2xl border border-2 border-secondary flex justify-self-start ml-10"
        ></input>
        <a
          href="#"
          className="font-main text-sm flex justify-self-start pl-10 text-primary pt-5"
        >
          I don’t know my due date.
        </a>
        <button className="flex justify-self-start ml-10 bg-primary text-white px-10 py-2 rounded-2xl mt-5">
          <a href="" className="font-main">
            Next
          </a>
        </button>
      </div>
    </div>
  );
}

export default PregnancyCalculator;
