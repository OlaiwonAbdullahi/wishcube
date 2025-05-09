"use client";
import React, { useState } from "react";

const Chatinput = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e: { target: { value: string } }) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 w-full bg-[#F8F8FF] py-4 z-50">
      <div className="flex items-center justify-between gap-3 bg-white/80 backdrop-blur-md px-4 py-3 w-11/12 md:w-4/5 mx-auto rounded-2xl border border-black/30">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
          className="flex-1 px-4 py-4 rounded-lg bg-gray-200 border border-black/20 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button
          onClick={handleSend}
          className="bg-[#1C1C1C] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#2C2C2C] transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatinput;
