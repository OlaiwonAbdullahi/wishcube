import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className=" h-[70vh] flex flex-col justify-center items-center p-4 bg-[#F8F8FF]">
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
          <Link href="/signup">
            <button className="flex gap-2 items-center text-[#1C1C1C] border bg-[#F8F8FF] py-2 px-3 rounded-lg hover:bg-[#cfcfcf] transition duration-300 ease-in-out">
              Get Started <CiLogin className="size-5" />
            </button>
          </Link>
          <Link href="/login">
            <button className="flex gap-2 items-center bg-[#1C1C1C] text-[#F8F8FF] py-2 px-3 rounded-lg hover:bg-[#2C2C2C] transition duration-300 ease-in-out">
              Login
              <GoArrowUpRight className="size-5" />
            </button>
          </Link>
        </div>
      </div>
      <div className=" p-4 flex justify-center items-center mt-5 mb-10">
        <Image
          width={20}
          height={0}
          src="/gift.svg"
          alt="hero"
          className="md:w-1/3 w-full sm:w-10/12 h-auto object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
