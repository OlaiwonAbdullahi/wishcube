import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

const CustomContract = () => {
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
        <div className=" flex flex-col gap-4 p-3.5">
          <div className="">
            <p className="text-lg w-3/4 py-4">
              If your agreement or transaction does not fit one of our standard
              offerings — or if you&apos;d prefer a tailored consultation before
              proceeding — this option is for you.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h2 className=" text-3xl font-semibold italic">
              Examples may include
            </h2>
            <p className=" text-lg leading-8">
              Strategic partnership or joint venture contracts
              <br />
              Multi-party transactions or international agreements
              <br />
              Hybrid services (e.g.review + redrafting)
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h2 className=" text-3xl font-semibold italic">How It Works</h2>
            <p className=" text-lg leading-8">
              Book a Free Discovery Call to explore your needs. We’ll advise you
              on the appropriate next steps and custom pricing
            </p>
          </div>
        </div>
        <div className=" flex justify-center w-full md:w-2/3 mt-4">
          <button className=" text-[#459446] border justify-center h-[50px] border-[#459446] flex gap-3 items-center w-[300px]">
            Submit Your Contract <IoIosArrowRoundForward className=" size-6" />
          </button>
        </div>
      </div>
      <div className=" md:w-1/3 w-1/2 mx-auto flex flex-col gap-4 justify-center h-fit md:pr-8">
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
            Review & Risk Report <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomContract;
