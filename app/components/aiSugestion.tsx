import React from "react";

const AiSugestion = () => {
  const suggestions = [
    "Wishing you joy, love, and happiness on this special day. May your celebration be as wonderful as you are!",
    "Sending warm thoughts and best wishes. May this moment bring peace, laughter, and cherished memories.",
    "Hope this day brings a smile to your face and joy to your heart. You're truly appreciated and loved.",
  ];

  return (
    <div className="bg-violet-50 rounded-2xl p-6 space-y-4 w-full">
      <h2 className="text-lg font-semibold text-gray-800">AI Suggestions</h2>

      <div className="space-y-4">
        {suggestions.map((msg, index) => (
          <div
            key={index}
            className="border bg-white border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-300"
          >
            <p className="text-gray-700 text-sm mb-2">{msg}</p>
            <button className="text-[#1C1C1C] text-sm font-medium hover:underline hover:text-violet-700 transition">
              Use this Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiSugestion;
