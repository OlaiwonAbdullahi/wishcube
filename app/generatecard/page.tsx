"use client";
import React, { useState } from "react";
import { BsBalloon, BsBalloonHeart } from "react-icons/bs";
import { IoSparklesOutline } from "react-icons/io5";
import { PiConfettiThin } from "react-icons/pi";

const Page = () => {
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const generateMessage = async () => {
    const prompt = `
You are a professional greeting card writer. 
Please write a heartfelt and personalized ${occasion} greeting for someone named "${recipientName}". 
If relevant, incorporate the following message or sentiment: "${customMessage}". 
The tone should be warm, sincere, and creative. 
Keep it concise but meaningful (around 3-5 sentences). 
Do not include a signature or sender name. use emojies
`;
    try {
      const response = await fetch("https://ai.hackclub.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      setGeneratedMessage(
        data.choices?.[0]?.message?.content || "No message generated."
      );
    } catch (error) {
      console.error("Failed to generate message:", error);
    }
  };

  return (
    <div className=" flex flex-col p-6">
      <div className="flex flex-col w-full md:w-1/2 bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm  border border-black/25 p-6 rounded-2xl space-y-6 mx-auto m-10">
        <div className="flex flex-col self-start text-left">
          <h1 className="text-2xl font-bold text-left">Generate Your Card</h1>
          <p className="text-left text-gray-600">
            Create personalized greeting cards for any occasion.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateMessage();
          }}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="recipientName">Recipient Name</label>
            <input
              type="text"
              id="recipientName"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter Recipient Name"
              className="border p-1.5 rounded-lg text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="border p-1.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-200"
            >
              <option value="">Select an Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="wedding">Wedding</option>
              <option value="get well">Get Well</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">Custom Message (Optional)</label>
            <textarea
              id="message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              cols={20}
              rows={5}
              placeholder="Write your message here..."
              className="border p-3.5 rounded-lg text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            ></textarea>
            <div className="mt-2.5 flex items-center gap-2">
              <IoSparklesOutline className="size-4 text-gray-500" />
              <button
                type="submit"
                className="cursor-pointer text-sm text-blue-600 hover:underline"
              >
                Generate AI Message
              </button>
            </div>
            {generatedMessage && (
              <p className="text-gray-800 mt-4 bg-gray-300 p-4 rounded-xl shadow-lg text-lg font-light">
                {generatedMessage}
              </p>
            )}
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <button className="bg-[#1c1c1c] text-white w-1/2 px-4 py-2 rounded-md hover:bg-gray-600 transition">
            Generate Card
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-2xl space-y-6 mx-auto border border-gray-300 shadow-lg backdrop-blur-sm">
        <div className="">
          <IoSparklesOutline className="size-7" />
          <BsBalloonHeart className="size-7" />
          <BsBalloon className="size-7" />
          <PiConfettiThin className="size-7" />
        </div>
        <div className="text-center text-white font-bold text-3xl mb-4">
          <h2>Greeting Card</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-lg text-white">
            <span className="font-semibold">Name: </span>
            <span className="italic">{recipientName}</span>
          </div>
          <div className="text-lg text-white">
            <span className="font-semibold">Occasion: </span>
            <span className="italic">{occasion}</span>
          </div>
          <div className="text-lg text-white">
            <span className="font-semibold">Custom Message: </span>
            <p className="italic">{generatedMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
