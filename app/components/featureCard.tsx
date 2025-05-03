import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSparklesOutline } from "react-icons/io5";

const FeatureCard = () => {
  return (
    <div>
      <div className=" gap-2.5 border border-black/30 mx-2.5 p-2.5 flex flex-col justify-start rounded-2xl items-start mt-5 mb-10">
        <span className=" text-purple-800 bg-purple-200 p-2.5 rounded-xl flex justify-center items-center mb-1">
          <IoSparklesOutline className=" size-7 " />
        </span>
        <h2 className=" text-2xl font-medium ">Create AI-Powered Greeting</h2>
        <p className="text-gray-600 mb-1">
          Let AI help you say the right words. Generate personalized, heartfelt
          messages and themed cards in seconds — including voice messages and
          background music.
        </p>
        <button className="flex gap-1 items-center text-[#1C1C1C]  bg-[#F8F8FF] py-1  cursor-pointer rounded-lg hover:bg-[#cfcfcf] transition duration-300 ease-in-out">
          Learn More <IoIosArrowRoundForward className="size-5 mt-1" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
