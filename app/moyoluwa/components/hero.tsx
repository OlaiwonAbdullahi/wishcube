import React from "react";
import { BsDot } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <div className=" bg-[#3B82F6] border border-[#1E3A8A]/30   w-fit rounded-full px-4  text-white">
        <div className=" flex items-center gap-2">
          <span>Good</span>
          <BsDot className=" text-3xl" />
          <span>Good</span>
          <BsDot className=" text-3xl" />
          <span>Good</span>
        </div>
      </div>
      <div className="">
        <h2 className=" text-2xl font-bold">Lorem ipsum dolor sit.</h2>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
};

export default Hero;
