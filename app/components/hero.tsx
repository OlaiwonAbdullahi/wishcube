import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { CiLogin } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <div className="">
        <span></span>
        <h2 className=" text-4xl md:text-5xl font-bold text-center mt-10 mb-5 leading- text-[#1C1C1C]">
          A Universe of Greetings, Gifts & Virtual Celebrations
        </h2>
        <p className="text-center text-lg md:text-xl mb-5 p-1 sm:w-10/12 flex mx-auto">
          Create personalized greeting cards and websites, send e-gifts, and
          host unforgettable virtual parties with your loved ones—all in one
          place.
        </p>
        <div className=" gap-2.5 flex justify-center items-center mt-5 mb-10">
          <button className="flex gap-2 items-center text-[#1C1C1C] border bg-[#F8F8FF] py-2 px-3 rounded-lg hover:bg-[#cfcfcf] transition duration-300 ease-in-out">
            Get Started <CiLogin className="size-5" />
          </button>
          <button className="flex gap-2 items-center bg-[#1C1C1C] text-[#F8F8FF] py-2 px-3 rounded-lg hover:bg-[#2C2C2C] transition duration-300 ease-in-out">
            Learn More
            <GoArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Hero;
