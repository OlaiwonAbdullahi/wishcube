"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "home",
      label: "Curated List of Legal Tech Tools for Cost Management",
      content: <Tab1 />,
    },
    {
      id: "profile",
      label: "Legal Budget Template",
      content: <Tab2 />,
    },
    {
      id: "settings",
      label: "Cost-Effective Legal Spend Guide",
      content: <Tab3 />,
    },
    {
      id: "legal",
      label: "1:1 Legal Spend Optimization Support",
      content: <Tab4 />,
    },
  ];

  return (
    <div className="w-full mx-auto mt-10">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-center py-2 px-4 font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-[#459446] text-[#459446]"
                : "text-black hover:text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-[#F1EFEF] border-t-0 rounded-b-md">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-black">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;

// Tab 1
const Tab1 = () => {
  return (
    <div className="flex flex-col md:flex-row p-7 items-center justify-between space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex flex-col space-y-5 md:w-1/2 w-full text-lg text-black">
        <p>
          We’ve compiled a list of top legal technology tools designed to help
          businesses track and manage legal costs efficiently. This includes
          tools for:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Automated legal spend tracking and reporting.</li>
          <li>Invoice review and cost verification.</li>
          <li>
            Alternative fee arrangements and budget-friendly legal solutions.
          </li>
        </ol>

        <button className="border w-fit items-center flex border-[#459446] text-[#459446] bg-transparent transition-all duration-300 px-4 py-2">
          Access the Legal Spend Tech Solutions for Free
          <IoIosArrowRoundForward className="size-6 ml-2" />
        </button>
      </div>
      <div className="w-[420px] h-[311px]">
        <img
          src="https://placehold.co/600x400"
          alt="Legal Tech Tools"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

// Tab 2
const Tab2 = () => {
  return (
    <div className="flex flex-col md:flex-row p-7 items-center justify-between space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex flex-col space-y-5 md:w-1/2 w-full text-lg text-black">
        <p>A structured financial model to help you:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Estimate and plan legal expenses based on business needs.</li>
          <li>
            Forecast legal costs for different scenarios (e.g., routine legal
            matters vs. high-risk cases).
          </li>
          <li>
            Gain insights into cost drivers and optimize legal budget
            allocation.
          </li>
        </ol>

        <button className="border w-fit items-center flex border-[#459446] text-[#459446] bg-transparent transition-all duration-300 px-4 py-2">
          Get the Legal Budgeting Model
          <IoIosArrowRoundForward className="size-6 ml-2" />
        </button>
      </div>
      <div className="w-[420px] h-[311px]">
        <img
          src="https://placehold.co/600x400"
          alt="Budget Template"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

// Tab 3
const Tab3 = () => {
  return (
    <div className="flex flex-col md:flex-row p-7 items-center justify-between space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex flex-col space-y-5 md:w-1/2 w-full text-lg text-black">
        <p>
          A practical guide outlining cost-saving strategies for businesses,
          including:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>How to structure your legal function to minimize costs.</li>
          <li>When to hire in-house counsel vs. outsourcing legal work.</li>
          <li>
            Strategies to avoid excessive legal fees while ensuring compliance.
          </li>
        </ol>

        <button className="border w-fit items-center flex border-[#459446] text-[#459446] bg-transparent transition-all duration-300 px-4 py-2">
          Read the Cost-Effective Guide
          <IoIosArrowRoundForward className="size-6 ml-2" />
        </button>
      </div>
      <div className="w-[420px] h-[311px]">
        <img
          src="https://placehold.co/600x400"
          alt="Cost-Effective Guide"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
const Tab4 = () => {
  return (
    <div className="flex flex-col md:flex-row p-7 items-center justify-between space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex flex-col space-y-5 md:w-1/2 w-full text-lg text-black">
        <p> This Includes</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {" "}
            Reviewing your current legal expenses and identifying cost-saving
            Opportunities{" "}
          </li>
          <li>
            Advising on alternative legal service providers to optimize costs.
          </li>
          <li>
            Helping you set up an efficient legal budget and spend management
            strategy.
          </li>
        </ol>

        <button className="border w-fit items-center flex border-[#459446] text-[#459446] bg-transparent transition-all duration-300 px-4 py-2">
          Get Personalized Legal Spend Optimization Support
          <IoIosArrowRoundForward className="size-6 ml-2" />
        </button>
      </div>
      <div className="w-[420px] h-[311px]">
        <img
          src="https://placehold.co/600x400"
          alt="Cost-Effective Guide"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
