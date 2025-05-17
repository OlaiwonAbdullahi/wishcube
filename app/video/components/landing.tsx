"use client";
import React, { useState } from "react";
import {
  CiCalendar,
  CiKeyboard,
  CiLink,
  CiSquarePlus,
  CiVideoOff,
  CiVideoOn,
} from "react-icons/ci";

const Landing = () => {
  const [openCallMenu, setOpenCallMenu] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4 md:px-8">
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Celebrate With Friends Across the Globe
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our secure video conferencing platform enables seamless communication
          for your business needs, no matter where your team is located.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <button
            onClick={() => setOpenCallMenu(!openCallMenu)}
            className="flex-1 flex justify-center items-center gap-2 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition duration-200"
          >
            {openCallMenu ? (
              <CiVideoOff className="text-xl" />
            ) : (
              <CiVideoOn className="text-xl" />
            )}
            {openCallMenu ? <span>Cancel Call</span> : <span>New Call</span>}
          </button>
          <div className="flex-1 flex rounded-lg overflow-hidden border border-gray-300">
            <div className="flex gap-2 items-center px-3 py-2 bg-white flex-1">
              <CiKeyboard className="text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Enter call code"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium transition duration-200">
              Join
            </button>
          </div>
        </div>

        {openCallMenu && (
          <div className="bg-white border border-gray-200 rounded-lg mt-2 shadow-sm">
            <ul className="divide-y divide-gray-100">
              <li className="p-3 hover:bg-gray-50 cursor-pointer transition duration-150">
                <button className="w-full flex items-center text-left gap-3 text-gray-700">
                  <CiSquarePlus className="text-xl text-gray-600" />
                  <div>
                    <p className="font-medium">Start an Instant Call</p>
                    <p className="text-sm text-gray-500">
                      Begin a call right now
                    </p>
                  </div>
                </button>
              </li>
              <li className="p-3 hover:bg-gray-50 cursor-pointer transition duration-150">
                <button className="w-full flex items-center text-left gap-3 text-gray-700">
                  <CiLink className="text-xl text-gray-600" />
                  <div>
                    <p className="font-medium">Create a Call Link</p>
                    <p className="text-sm text-gray-500">
                      Share for participants to join later
                    </p>
                  </div>
                </button>
              </li>
              <li className="p-3 hover:bg-gray-50 cursor-pointer transition duration-150">
                <button className="w-full flex items-center text-left gap-3 text-gray-700">
                  <CiCalendar className="text-xl text-gray-600" />
                  <div>
                    <p className="font-medium">Schedule in Calendar</p>
                    <p className="text-sm text-gray-500">
                      Plan ahead with Google Calendar
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Need help?{" "}
          <a href="#" className="text-gray-600 hover:underline">
            Contact Support
          </a>{" "}
          or view our{" "}
          <a href="#" className="text-gray-600 hover:underline">
            Quick Start Guide
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
