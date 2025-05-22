"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrow90DegDown } from "react-icons/bs";

import { SlWallet } from "react-icons/sl";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const WalletBalance = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="py-2">
      <div className="bg-[#1C1C1C] bg-[url('/doodle.webp')] bg-cover bg-center bg-blend-overlay md:w-10/12 w-11/12 mx-auto mt-3.5 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-200">Wallet Balance</h2>

        <div className="flex flex-col gap-4">
          {/* Balance */}
          <div className="flex items-center justify-between p-4 md:py-1 bg-gray-200 rounded-lg">
            <div className=" flex flex-col ">
              <span className="text-sm font-medium text-gray-700">Balance</span>
              <span className="text-lg font-bold text-gray-900">
                {showBalance ? "$100.00" : "****"}
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <div
                onClick={() => setShowBalance(!showBalance)}
                className="cursor-pointer"
              >
                {!showBalance ? (
                  <VscEye className="size-5" />
                ) : (
                  <VscEyeClosed className="size-5" />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 md:py-1 bg-gray-200 rounded-lg">
            <div className=" flex flex-col ">
              <span className="text-sm font-medium text-gray-700">
                Received Gift Point
              </span>
              <span className="text-lg font-bold text-gray-900">
                {showBalance ? "$100.00" : "****"}
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <div
                onClick={() => setShowBalance(!showBalance)}
                className="cursor-pointer"
              >
                {!showBalance ? (
                  <VscEye className="size-5" />
                ) : (
                  <VscEyeClosed className="size-5" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-around w-full ">
          <Link
            href="/fundWallet"
            className=" cursor-pointer flex items-center  justify-center p-1 px-3 w-1/3 gap-2 bg-gray-200 rounded-lg"
          >
            <div className=" flex items-center gap-2">
              <span className="font-medium text-gray-700 p-1 rounded-full flex items-center justify-center h-8  cursor-pointer  transition duration-200">
                <SlWallet className="size-4" />
              </span>
              <span className=" text-gray-700 whitespace-nowrap">
                Fund Wallet
              </span>
            </div>
          </Link>
          <div className=" cursor-pointer flex items-center justify-center  p-1 px-3 w-1/3 gap-2 bg-gray-200 rounded-lg">
            <Link
              href="/gift"
              className="flex items-center gap-2 cursor-pointer justify-center p-1 px-3 w-1/3  bg-gray-200 rounded-lg"
            >
              <span className="font-medium text-gray-700  flex items-center justify-center cursor-pointer  transition duration-200">
                <BsArrow90DegDown className="size-4" />
              </span>
              <span className=" text-gray-700 whitespace-nowrap">
                Redeem Gift
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
