"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { IoCloudUploadOutline, IoCopyOutline } from "react-icons/io5";
import AiSugestion from "./aiSugestion";
import VoiceMessage from "./voiceMessage";

const Generator = () => {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");
  const [imageName, setImageName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageName(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-4">
      {/* Form Section */}
      <div className="bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm  shadow-xl p-6 rounded-2xl md:w-1/2 w-full space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Create Your Greetings Website
        </h2>

        <form className="space-y-4">
          {/* Recipient Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Recipient&apos;s Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Recipient Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-md p-2 border border-gray-300 text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>

          {/* Occasion */}
          <div className="flex flex-col">
            <label
              htmlFor="occasion"
              className="text-sm font-medium text-gray-700"
            >
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="rounded-md p-2 border border-gray-300 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            >
              <option value="">Select an Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="wedding">Wedding</option>
              <option value="getwell">Get Well</option>
            </select>
          </div>

          {/* Custom Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Custom Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-md p-2 border border-gray-300 text-gray-800 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700"
            >
              Upload Image (Optional)
            </label>
            <div className="flex flex-col items-center text-center">
              <label
                htmlFor="image"
                className="cursor-pointer flex flex-col w-full items-center justify-center border border-dashed border-gray-300 rounded-md py-6 hover:bg-gray-50 transition"
              >
                <IoCloudUploadOutline className="text-[#1C1C1C] text-2xl mb-1" />
                <span className="text-sm text-gray-600">
                  Click to upload image
                </span>
              </label>
              {imageName && (
                <span className="text-xs text-gray-500 mt-2">{imageName}</span>
              )}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Template Selection */}
          <div className="flex flex-col">
            <label
              htmlFor="template"
              className="text-sm font-medium text-gray-700"
            >
              Select Template
            </label>
            <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide py-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedTemplate(i)}
                  className={`border rounded-md flex-shrink-0 w-36 h-auto cursor-pointer transition ${
                    selectedTemplate === i
                      ? "border-[#1C1C1C] "
                      : "border-gray-300 hover:ring-2 hover:ring-gray-300"
                  }`}
                >
                  <Image
                    src="/card.png"
                    alt={`template-${i}`}
                    width={350}
                    height={350}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="">
          <AiSugestion />
        </div>
        <div className="">
          <VoiceMessage />
        </div>
      </div>

      <div className="bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm  shadow-xl p-6 rounded-2xl md:w-1/2 w-full flex flex-col items-center h-[110vh]">
        <h2 className="text-lg font-semibold text-gray-800  self-start">
          Preview
        </h2>
        <Image
          src="/card.png"
          alt="Preview Card"
          width={500}
          height={500}
          className="rounded-md w-full max-w-[400px]"
        />
        <div className=" flex flex-col gap-4 w-2/3 mt-4">
          <button className=" whitespace-nowrap cursor-pointer flex items-center justify-center gap-2.5 bg-[#8c52ff] text-gray-100  p-2 rounded-md  w-full hover:bg-violet-700 transition duration-200">
            <IoCopyOutline className=" size-6" />
            Copy Greeting Link
          </button>
          <button className=" whitespace-nowrap  cursor-pointer flex items-center justify-center gap-2.5 border-[#8c52ff] text-[#8c52ff] bg-gray-100  border p-2 rounded-md  w-full hover:bg-violet-200 transition duration-200">
            <CiShare2 className=" size-6" />
            Share on Social Media
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generator;
