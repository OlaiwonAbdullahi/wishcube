"use client";
import React, { useEffect } from "react";
import { TbTicket, TbTicketOff } from "react-icons/tb";

const PricingCard = () => {
  /*
  const [price, setPrice] = React.useState(null);
  const fetchPrice = async () => {
    try {
      const response = await fetch(
        "https://api.frankfurter.dev/v1/latest?base=USD"
      );
      const data = await response.json();
      const priceRate = data.rates;
      console.log(priceRate);
      //setPrice(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPrice();
  }, []);*/
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 max-w-4xl mx-auto">
          {/*First Card*/}
          <div className="flex w-full max-w-[440px] shadow-2xl h-fit flex-col space-y-2.5 rounded-lg bg-white">
            <div className="bg-[#F34DBD] text-white rounded-t-lg p-6 space-y-3.5">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Free Trial</h2>
                <span className="flex items-center gap-2 bg-[#007AFF] p-1 px-2 rounded-full text-xs font-medium">
                  <TbTicketOff /> 2 Week Free
                </span>
              </div>
              <div className="text-sm opacity-90">
                Get Started without Commitment
              </div>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex gap-3 flex-row items-end">
                <h2 className="text-4xl font-bold">Free</h2>
                <span className="text-lg text-gray-400">
                  One virtual card per Week
                </span>
              </div>
              <div className="">
                <span className="font-medium text-gray-800">
                  Full access to these Features
                </span>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-2 text-lg">✓</span>{" "}
                    Effects
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-2 text-lg">✓</span> Fonts
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-2 text-lg">✓</span> Music
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-2 text-lg">✓</span>{" "}
                    Colors
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-2 text-lg">✓</span> Image
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <button className="bg-[#F34DBD] w-full text-white rounded-lg p-3 text-lg font-medium hover:bg-[#C2238E] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>

          {/*Second Card*/}
          <div className="flex w-full max-w-[440px] shadow-2xl h-fit flex-col space-y-2.5 rounded-lg bg-white transform lg:scale-105 relative">
            <div className="bg-[#BA68C8] text-white rounded-t-lg p-6 space-y-3.5">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Premium Access</h2>
                <span className="flex items-center gap-2 bg-[#34C759] p-1 px-2 rounded-full text-xs font-medium">
                  <TbTicket /> After 2Weeks
                </span>
              </div>
              <div className="text-sm opacity-90">
                After your Trial Period Ends
              </div>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex gap-3 flex-row items-end">
                <h2 className="text-4xl font-bold">#500</h2>
                <span className="text-lg text-gray-400">Per virtual card</span>
              </div>
              <div className="">
                <span className="font-medium text-gray-800">All Features</span>
                <ul className="space-x-8 mt-3 flex flex-wrap gap-y-2">
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span>{" "}
                    Effects
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span> Fonts
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span> Music
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span>{" "}
                    Colors
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span> Image
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span>{" "}
                    Recording
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#F34DBD] mr-1 text-lg">✓</span>{" "}
                    Stickers
                  </li>
                </ul>
              </div>
              <div className="font-medium">
                <span className="text-lg font-medium text-gray-800">
                  Currency Equivalent
                </span>
                <div className="mt-2  rounded-lg overflow-hidden">
                  <div className="p-2 flex justify-between border-b border-gray-200 items-center ">
                    <span className="font-medium">USD</span>
                    <span className="text-lg font-medium">$0.4</span>
                  </div>
                  <div className="p-2 flex justify-between border-b border-gray-200 items-center">
                    <span className="font-medium">ZAR</span>
                    <span className="text-lg font-medium">R7.2</span>
                  </div>
                  <div className="p-2 flex justify-between border-b border-gray-200 items-center ">
                    <span className="font-medium">TRY</span>
                    <span className="text-lg font-medium">T12.80</span>
                  </div>
                  <div className="p-2 flex justify-between items-center">
                    <span className="font-medium">LIRA</span>
                    <span className="text-lg font-medium">$12.50</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button className="bg-[#BA68C8] w-full text-white rounded-lg p-3 text-lg font-medium hover:bg-[#C2238E] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                  Go Premium Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
