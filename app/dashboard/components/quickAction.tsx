import Link from "next/link";
import React from "react";
import { BsLayoutTextWindow } from "react-icons/bs";
import { CiReceipt } from "react-icons/ci";
import { PiConfettiThin, PiGiftThin } from "react-icons/pi";

const QuickAction = () => {
  return (
    <div className="p-6 mx-auto rounded-2xl space-y-4 max-w-6xl">
      <h2 className="text-lg font-semibold">Quick Actions</h2>

      <div className="bg-violet-100 flex flex-wrap gap-4 rounded-2xl p-6 justify-center">
        <Link
          href="/generateWebsite"
          className="w-full sm:w-[45%] lg:w-[22%] p-4 space-y-2 flex flex-col items-center justify-center bg-gray-300 rounded-xl text-center"
        >
          <div className="flex flex-col items-center justify-center bg-gray-300  rounded-xl  text-center ">
            <BsLayoutTextWindow className="size-6 text-[#1C1C1C]" />
            <span className="leading-5">Create Greeting Website</span>
          </div>
        </Link>

        <Link
          href="/generatecard"
          className="w-full sm:w-[45%] lg:w-[22%] p-4 space-y-2 flex flex-col items-center justify-center bg-gray-300 rounded-xl text-center"
        >
          <div className="flex flex-col items-center justify-center bg-gray-300 p-4 rounded-xl text-center ">
            <CiReceipt className="size-8 text-[#1C1C1C]" />
            <span className="leading-5">Create Greeting Card</span>
          </div>
        </Link>

        <Link
          href="/gift"
          className="w-full sm:w-[45%] lg:w-[22%] p-4 space-y-2 flex flex-col items-center justify-center bg-gray-300 rounded-xl text-center"
        >
          <div className="flex flex-col items-center justify-center bg-gray-300 p-4 rounded-xl text-center ">
            <PiGiftThin className="size-8 text-[#1C1C1C]" />
            <span className="leading-5">Gift</span>
          </div>
        </Link>

        <Link
          href="/video"
          className="w-full sm:w-[45%] lg:w-[22%] p-4 space-y-2 flex flex-col items-center justify-center bg-gray-300 rounded-xl text-center"
        >
          <div className="flex flex-col items-center justify-center bg-gray-300 p-4 rounded-xl text-center">
            <PiConfettiThin className="size-8 text-[#1C1C1C]" />
            <span className="leading-5">Celebrate</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickAction;
