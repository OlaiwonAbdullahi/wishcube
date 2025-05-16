import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className=" flex items-center">
      <div className=" w-1/2">
        <Image
          src={"/dp.jpg"}
          width={100}
          height={100}
          alt="about"
          className=" h-100 w-80"
        />
      </div>
      <div className=" w-1/2 flex flex-col gap-2">
        <h2 className=" text-3xl font-medium">About Us</h2>
        <p className=" leading-8">
          Altivor is a consultancy specializing in contract risk advisory, AI
          governance, and legal operations optimization. We help individuals and
          businesses mitigate contractual risks, navigate AI regulations, and
          streamline legal operations through expert guidance (including tools
          and resources), advising on AI-driven solutions, and providing
          strategic insights. Our approach blends risk management, compliance,
          and operational efficiency, empowering businesses to stay ahead in an
          evolving regulatory and technological landscape.
        </p>
        <div className=" border border-green-800 text-green-800 w-fit p-2 hover:bg-green-800 hover:text-white">
          <button className=" flex items-center gap-1.5">
            Learn More <BsArrowRight className=" size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
