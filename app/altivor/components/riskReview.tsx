import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

const RiskReview = () => {
  return (
    <div className=" flex gap-6 md:flex-row flex-col p-8">
      <div className=" md:w-2/3 w-full mx-auto gap-[50px]">
        <div className="">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="w-[742px] h-[402px]"
          />
        </div>
        <div className=" flex flex-col gap-[9px] p-8">
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">What We Do</h2>
            <p className=" text-lg leading-10">
              Analyze contract terms and highlight key clauses, obligations, and
              risks. Provide insights on areas that may require further
              negotiation or clarification. Deliver a structured risk report
              summarizing key findings.
            </p>
          </div>
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">Ideal For</h2>
            <p className=" text-lg leading-10">
              Individuals and businesses who need a clear understanding of their
              contracts before signing but do not require modifications.
            </p>
          </div>
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">How it Works</h2>
            <p className=" text-lg leading-10">
              Upload your contract, fill out the form, pay, and receive your
              report via email or Book a free discovery call to discuss your
              needs before proceeding with the review.
            </p>
          </div>
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">You Get</h2>
            <p className=" text-lg leading-7">
              A written risk report outlining key contract terms and potential
              risk areas within 24 – 48 hours.
            </p>
          </div>
        </div>
        <div className=" flex justify-center w-full md:w-2/3">
          <button className=" text-[#459446] border justify-center h-[50px] border-[#459446] flex gap-3 items-center w-[300px]">
            Submit Your Contract <IoIosArrowRoundForward className=" size-6" />
          </button>
        </div>
      </div>
      <div className=" md:w-1/3 w-1/2 mx-auto flex justify-center h-fit">
        <div className=" bg-[#459446] text-white gap-4 flex w-full p-4 py-10 flex-col items-center">
          <h2 className=" text-2xl">Other Services</h2>
          <button className=" text-[#459446] p-2.5 text-base bg-white  flex items-center gap-3 w-[250px]  justify-center whitespace-nowrap">
            Review & Mark-Up <IoIosArrowForward />
          </button>
          <button className=" text-[#459446] p-2.5 text-base bg-white  flex items-center gap-3 w-[250px]  justify-center whitespace-nowrap">
            Drafting - Basic Contract <IoIosArrowForward />
          </button>
          <button className=" text-[#459446] p-2.5 text-base bg-white  flex items-center gap-3 w-[250px]  justify-center whitespace-nowrap">
            Drafting - Advanced Contracts <IoIosArrowForward />
          </button>
          <button className="  text-[#459446] p-2.5 text-base bg-white  flex items-center gap-3 w-[250px]  justify-center whitespace-nowrap">
            Custom Contract Advisory <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiskReview;
