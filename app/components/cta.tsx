import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="bg-[#F3F3F3] text-black rounded-3xl p-8 md:p-12 md:px-20 min-h-[260px] w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5 text-center md:text-left items-center md:items-start">
        <h2 className="text-xl md:text-2xl font-bold">
          Ready to Create Magic?
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed w-full sm:w-[80%]">
          Join thousands of people already celebrating with WishCube. Create
          your first AI-powered greeting card, send a digital gift, or host a
          virtual party — all for free, no credit card required.
        </p>
        <div>
          <button className="bg-[#191A23] text-white px-6 py-2.5 rounded-md text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 justify-end items-center">
        <Image src="/cta.svg" alt="cta" width={300} height={300} />
      </div>
    </div>
  );
};

export default Cta;
