"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  GoArrowDownLeft,
  GoArrowDownRight,
  GoArrowSwitch,
} from "react-icons/go";
import { SlWallet } from "react-icons/sl";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const WalletCard = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [showGiftingBalance, setShowGiftingBalance] = useState(false);

  return (
    <div className="py-6">
      <div className="bg-[#1C1C1C] bg-[url('/doodle.webp')] bg-cover bg-center bg-blend-overlay md:w-1/2 w-11/12 mx-auto mt-3.5 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-200">Wallet Card</h2>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Balance</span>
            <div className="flex items-center gap-3.5">
              <span className="text-lg font-bold text-gray-900">
                {showBalance ? "$100.00" : "****"}
              </span>
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

          <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              Gifting Point Balance
            </span>
            <div className="flex items-center gap-3.5">
              <span className="text-lg font-bold text-gray-900">
                {showGiftingBalance ? "$100.00" : "****"}
              </span>
              <div
                onClick={() => setShowGiftingBalance(!showGiftingBalance)}
                className="cursor-pointer"
              >
                {!showGiftingBalance ? (
                  <VscEye className="size-5" />
                ) : (
                  <VscEyeClosed className="size-5" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-center pt-4">
          <div className="bg-gray-200 rounded-lg px-4 flex flex-col items-center w-1/6 py-2.5">
            <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-400 transition duration-200">
              <SlWallet className="size-4" />
            </span>
            <span className="text-sm mt-2 whitespace-nowrap">Fund Wallet</span>
          </div>
          <div className="bg-gray-200 rounded-lg px-2 flex flex-col items-center w-1/6 py-2.5">
            <Link href="/buy">
              <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-400 transition duration-200">
                <GoArrowSwitch className="size-4" />
              </span>
              <span className="text-sm mt-2 whitespace-nowrap">Buy Gift</span>
            </Link>
          </div>
          <div className="bg-gray-200 rounded-lg px-2 flex flex-col items-center w-1/6 py-2.5">
            <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-400 transition duration-200">
              <GoArrowDownLeft className="size-4" />
            </span>
            <span className="text-sm mt-2 whitespace-nowrap">Receive Gift</span>
          </div>

          <div className="bg-gray-200 rounded-lg px-2 flex flex-col items-center w-1/6 py-2.5">
            <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-400 transition duration-200">
              <GoArrowDownRight className="size-4" />
            </span>
            <span className="text-sm mt-2 whitespace-nowrap">Give Gift</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
