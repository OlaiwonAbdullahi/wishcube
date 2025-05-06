import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="">
        <h2 className=" text-2xl font-medium">Fund Wallet</h2>
        <p className="">Fund your wallet with crypto or fiat.</p>
      </div>
      <div className=" flex flex-col gap-4  justify-center items-center w-full md:w-3/4 mx-auto  ">
        <div className=" w-1/2 flex items-center gap-2 rounded-lg border bg-gray-200  p-4 shadow-sm transition-all duration-200 hover:shadow-md">
          <IoRocketOutline className=" size-8" />
          Fund using Card
        </div>
        <div className=" border border-t w-1/2 border-t-black/25"></div>
        <div className=" w-1/2 flex items-center gap-2 rounded-lg border bg-gray-200  p-4 shadow-sm transition-all duration-200 hover:shadow-md">
          <CiCreditCard1 className=" size-8" />
          Fund using Bank Transfer
        </div>
        <div className=" border border-t-black/25  w-1/2"></div>
        <div className="">
          <div className="">
            <span>Pay With Transfer</span>
            <p className="text-sm text-gray-500">
              You can fund your wallet using bank transfer. Please use the
              following details to fund your wallet.
            </p>
          </div>
          <div className="">
            <div className=" flex flex-col  items-start gap-2 rounded-lg border bg-gray-200  p-4 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className=" flex items-center gap-2">
                <span>Account Name:</span>
                <p className="text-sm text-gray-500">John Doe</p>
              </div>
              <div className=" flex items-center">
                <span>Account No:</span>
                <p className="text-sm text-gray-500">1234567890</p>
              </div>
              <div className=" flex items-center gap-2">
                <span>Bank Name:</span>
                <p className="text-sm text-gray-500">First Bank</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-gray-500">
            By using this service, you agree to our{" "}
            <span className="text-blue-500 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-500 cursor-pointer">Privacy Policy</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
