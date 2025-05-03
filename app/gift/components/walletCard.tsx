"use client";
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
    <div>
      <div className="bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm  shadow-xl p-6 rounded-2xl md:w-1/2 w-full space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">Wallet Card</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Balance</span>
            <div className="flex items-center gap-3.5">
              <span className="text-lg font-bold text-gray-900">
                {showBalance ? "$100.00" : "****"}
              </span>
              <div
                onClick={() => setShowBalance(!showBalance)}
                className="cursor-pointer"
              >
                {showBalance ? (
                  <VscEye className="size-5" />
                ) : (
                  <VscEyeClosed className="size-5" />
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
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
                {showGiftingBalance ? (
                  <VscEye className="size-5" />
                ) : (
                  <VscEyeClosed className="size-5" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center  gap-5 mx-auto justify-center p-4 ">
          <div className=" bg-gray-100 rounded-lg p-4 flex flex-col items-center  w-1/5">
            <span className=" font-medium text-gray-700 bg-gray-300 p-2 rounded-full flex items-center justify-center h-12 gap-2.5 cursor-pointer hover:bg-gray-400 transition duration-200 w-12">
              <SlWallet className=" size-6" />
            </span>
            <span>Fund Wallet</span>
          </div>
          <div className=" bg-gray-100 rounded-lg p-4 flex flex-col items-center  w-1/5">
            <span className=" font-medium text-gray-700 bg-gray-300 p-2 rounded-full flex items-center justify-center h-12 gap-2.5 cursor-pointer hover:bg-gray-400 transition duration-200 w-12">
              <GoArrowSwitch className=" size-6" />
            </span>
            <span>Convert</span>
          </div>
          <div className=" bg-gray-100 rounded-lg p-4 flex flex-col items-center  w-1/5">
            <span className=" font-medium text-gray-700 bg-gray-300 p-2 rounded-full flex items-center justify-center h-12 gap-2.5 cursor-pointer hover:bg-gray-400 transition duration-200 w-12">
              <GoArrowDownLeft className=" size-6" />
            </span>
            <span>Receive Gift</span>
          </div>
          <div className=" bg-gray-100 rounded-lg p-4 flex flex-col items-center  w-1/5">
            <span className=" font-medium text-gray-700 bg-gray-300 p-2 rounded-full flex items-center justify-center h-12 gap-2.5 cursor-pointer hover:bg-gray-400 transition duration-200 w-12">
              <GoArrowDownRight className=" size-6" />
            </span>
            <span>Give Gift</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
