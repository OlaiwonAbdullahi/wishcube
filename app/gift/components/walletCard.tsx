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
          {/* Balance */}
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

          {/* Gifting Point Balance */}
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

        {/* CTA Buttons (Grid Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {/* Fund Wallet */}
          <div className="bg-gray-200 rounded-lg px-4 py-2.5 flex flex-col items-center">
            <Link href="/fundWallet">
              <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-500 transition duration-200">
                <SlWallet className="size-4" />
              </span>
            </Link>
            <span className="text-sm mt-2">Fund Wallet</span>
          </div>

          {/* Buy Gift */}
          <div className="bg-gray-200 rounded-lg px-4 py-2.5 flex flex-col items-center">
            <Link href="/buy">
              <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-500 transition duration-200">
                <GoArrowSwitch className="size-4" />
              </span>
            </Link>
            <span className="text-sm mt-2">Buy Gift</span>
          </div>

          {/* Receive Gift */}
          <div className="bg-gray-200 rounded-lg px-4 py-2.5 flex flex-col items-center">
            <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-500 transition duration-200">
              <GoArrowDownLeft className="size-4" />
            </span>
            <span className="text-sm mt-2">Receive Gift</span>
          </div>

          {/* Give Gift */}
          <div className="bg-gray-200 rounded-lg px-4 py-2.5 flex flex-col items-center">
            <span className="font-medium text-gray-700 bg-gray-400 p-1 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer hover:bg-gray-500 transition duration-200">
              <GoArrowDownRight className="size-4" />
            </span>
            <span className="text-sm mt-2">Give Gift</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
