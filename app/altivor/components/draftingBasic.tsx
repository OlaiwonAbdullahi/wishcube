import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

const DraftingBasic = () => {
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
              Draft simple, structured agreements using standardized templates.
              Ensure contracts are clear, functional, and aligned with best
              practices. Customize key elements such as parties, obligations,
              and terms.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">Ideal For</h2>
            <p className=" text-lg leading-10">
              Businesses and individuals needing basic contracts for
              straightforward transactions.
            </p>
          </div>
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">How it Works</h2>
            <p className=" text-lg leading-10">
              Fill out the contract request form, pay, and receive your contract
              via email or Book a free discovery call to discuss your needs
              before proceeding with drafting.
            </p>
          </div>
          <div className=" flex flex-col gap-[9px] md:w-2/3 w-full">
            <h2 className=" text-3xl font-semibold italic">You Get</h2>
            <p className=" text-lg leading-7">
              A contract draft tailored to the client’s specifications,
              following a structured, standardized approachwithin 24 – 48 hours.
            </p>
          </div>
        </div>
        <div className=" flex justify-center w-full md:w-2/3">
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
            Custom Contract Advisory <IoIosArrowForward />
          </button>
        </div>
        <div className=" p-4 py-10 mt-5 shadow-lg ">
          <div className=" flex justify-center">
            <img
              src="https://placehold.co/600x600"
              alt=""
              srcset=""
              className=" w-20 h-20 rounded-full"
            />
          </div>
          <div className="">
            <p className=" p-2 leading-9 text-center">
              Altivor reserves the right to reassess the service fee after
              reviewing your request. If the contract is determined to be highly
              specialized due to industry-specific risks, length, or the level
              of human expertise required we will inform you before proceeding
              and offer a revised quote for approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftingBasic;
