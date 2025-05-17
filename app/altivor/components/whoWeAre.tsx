"use client";
import React, { useState } from "react";
import Expertise from "./expertise";

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabInfos = [
    {
      heading: "Who we are",
      content:
        "Altivor was founded with a vision to bridge the gap between regulation, technology, and business, offering practical, forward-thinking solutions to today's most pressing challenges. We specialize in risk management in contracts, AI governance compliance frameworks, and legal operational strategy, helping individuals and businesses adapt to evolving regulations and industry shifts with confidence.",
    },
    {
      heading: "Our Expertise",
      content: <Expertise />,
    },
    {
      heading: "Why Choose Us?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 flex justify-between ">
      <div className="flex flex-col gap-4 mb-8 w-1/4">
        {tabInfos.map((info, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-2 self-start py-2 text-lg font-medium transition-all duration-200 ${
              activeTab === index
                ? "text-green-800 "
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {info.heading}
          </button>
        ))}
      </div>

      <div className="w-3/4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-medium text-gray-800">
            {tabInfos[activeTab].heading}
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            {tabInfos[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
