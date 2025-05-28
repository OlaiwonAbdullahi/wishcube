import React from "react";
import Tabs from "./components/tab";
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
  return (
    <div className="bg-white md:p-16 p-8">
      <div className=" flex flex-col  md:flex-row items-start justify-center space-y-5  mx-auto">
        <div className=" md:w-2/3 w-full h-[470px]">
          <img src="https://placehold.co/600x400" alt="" className=" h-full" />
        </div>
        <div className="flex flex-col  md:h-[424px] h-[470px] items-center justify-center text-center p-4  space-y-5 md:w-1/3 w-3/4 mx-auto bg-[#459446] text-white">
          <h2 className=" text-3xl"> Other Service</h2>
          <div className=" flex flex-col items-center justify-center text-center  space-y-4 text-[#459446]">
            <button className=" border flex items-center  cursor-pointer justify-between w-[394px] whitespace-nowrap border-[#459446] text-[#459446] bg-white hover:bg-[#459446] hover:border-white hover:text-white transition-all duration-300 px-4 py-2 ">
              Vendor & Law Firm Management <IoIosArrowForward />
            </button>
            <button className=" border w-[394px] flex cursor-pointer items-center justify-between whitespace-nowrap border-[#459446] text-[#459446] bg-white hover:bg-[#459446] hover:border-white hover:text-white transition-all duration-300 px-4 py-2 ">
              Legal Tech, Automation & Contract Management <IoIosArrowForward />
            </button>
            <button className=" border w-[394px] flex cursor-pointer  items-center justify-between whitespace-nowrap border-[#459446] text-[#459446] bg-white hover:bg-[#459446] hover:border-white hover:text-white transition-all duration-300 px-4 py-2 ">
              1:1 Legal Operations Consultation <IoIosArrowForward />
            </button>
            <button className=" border w-[394px] flex cursor-pointer  items-center justify-between whitespace-nowrap border-[#459446] text-[#459446] bg-white hover:bg-[#459446] hover:border-white hover:text-white transition-all duration-300 px-4 py-2 ">
              Compliance & Risk Management (incl. AML/KYC) <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className=" text-black text-2xl italic font-medium text-start mt-10 mb-5">
            Optimize Your Legal Spend & Reduce Costs
          </h2>
          <p className=" text-black leading-8 text-lg text-start w-10/12">
            Managing legal expenses efficiently is crucial for businesses that
            want to stay in control of their legal budget while ensuring
            compliance and quality. We provide practical tools, cost-saving
            strategies, and direct consulting support to help businesses plan,
            track, and optimize legal spend effectively.
          </p>
        </div>
      </div>
      <div className="">
        <Tabs />
      </div>
    </div>
  );
};

export default Page;
