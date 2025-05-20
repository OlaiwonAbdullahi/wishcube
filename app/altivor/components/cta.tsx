import React from "react";

const Cta = () => {
  return (
    <div className=" bg-[#459446] h-[276px] md:w-[80%] w-11/12 mx-auto mt-5 gap-4 rounded-lg text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl text-center">
        Not Sure What You Need? Let &apos;s Talk.
      </h2>
      <button className=" bg-white text-[#459446] rounded-xl h-[50px] w-[300px]">
        Book a Discovery Call
      </button>
    </div>
  );
};

export default Cta;
