"use client";
import React from "react";
import { BiCopy } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const accountName = "John Doe";
  const accountNumber = "1234567890";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("copied to clipboard!", {
      position: "top-right",
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h2 className="text-2xl font-medium">Fund Wallet</h2>
        <p>Fund your wallet with crypto or fiat.</p>
      </div>

      <div className="flex flex-col gap-4 items-center w-full md:w-3/4 mx-auto">
        <div className="w-1/2 flex items-center gap-2 rounded-lg border bg-gray-200 p-4 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer">
          <IoRocketOutline className="size-6" />
          Fund using Card
        </div>

        <div className="w-1/2 border-t border-black/25" />

        <div className="w-1/2 flex items-center gap-2 rounded-lg border bg-gray-200 p-4 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer">
          <CiCreditCard1 className="size-6" />
          Fund using Bank Transfer
        </div>

        <div className="w-1/2 border-t border-black/25" />

        <div className="w-1/2">
          <span className="font-medium">Pay With Transfer</span>
          <p className="text-sm text-gray-500 mb-2">
            You can fund your wallet using bank transfer. Please use the
            following details:
          </p>

          <div className="flex flex-col gap-3 rounded-lg border bg-gray-200 p-4 shadow-sm transition-all duration-200 hover:shadow-md">
            {/* Account Name */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-medium">Account Name:</span>
                <p className="text-sm text-gray-500">{accountName}</p>
              </div>
              <BiCopy
                onClick={() => handleCopy(accountName)}
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
              />
            </div>

            {/* Account Number */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="font-medium">Account No:</span>
                <p className="text-sm text-gray-500">{accountNumber}</p>
              </div>
              <BiCopy
                onClick={() => handleCopy(accountNumber)}
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
              />
            </div>

            {/* Bank Name */}
            <div className="flex gap-2 items-center">
              <span className="font-medium">Bank Name:</span>
              <p className="text-sm text-gray-500">First Bank</p>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-center px-2">
          By using this service, you agree to our{" "}
          <span className="text-blue-500 cursor-pointer underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue-500 cursor-pointer underline">
            Privacy Policy
          </span>
          .
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Page;
