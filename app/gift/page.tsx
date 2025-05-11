"use client";
import React, { useState } from "react";
import Menu from "../ui/menu";
import Buy from "./components/buy";
import ReceiveGift from "./components/receiveGift";

const Page = () => {
  const [activeTab, setActiveTab] = useState("buy"); // Default to "buy" tab

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-around bg-slate-100  p-3 w-3/4 mx-auto rounded-lg m-2 ">
          <button
            className={`rounded-md px-4 py-2 transition-all ${
              activeTab === "buy"
                ? "bg-white font-medium text-gray-700  border border-gray-200 cursor-pointer"
                : "text-slate-600 hover:bg-white/70 hover:text-gray-600 cursor-pointer"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            Buy Gift
          </button>
          <button
            className={`rounded-md px-4 py-2 transition-all ${
              activeTab === "receive"
                ? "bg-white font-medium text-gray-700  border border-gray-200 cursor-pointer"
                : "text-slate-600 hover:bg-white/70 hover:text-gray-600 cursor-pointer"
            }`}
            onClick={() => setActiveTab("receive")}
          >
            Receive Gift
          </button>
        </div>
      </div>

      <div className="mt-4 bg-white  rounded-lg border border-slate-200 w-3/4 mx-auto">
        {activeTab === "buy" && <Buy />}

        {activeTab === "receive" && <ReceiveGift />}
      </div>

      <div className="mt-6">
        <Menu />
      </div>
    </div>
  );
};

export default Page;
