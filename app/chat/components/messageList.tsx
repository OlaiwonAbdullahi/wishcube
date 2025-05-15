"use client";
import React, { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import { Message } from "../page";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex-1 flex mb-15 flex-col p-4 overflow-y-auto w-10/12 mx-auto"
    >
      {messages.map((message, idx) => (
        <div
          key={idx}
          className={`my-2 p-3 rounded-lg max-w-[80%] break-words ${
            message.sender === "You"
              ? "bg-[#2c2c2c] text-white self-end"
              : "bg-[#dfdede] text-gray-800 self-start"
          }`}
        >
          <div className="prose prose-sm max-w-none">
            <Markdown>{message.text}</Markdown>
          </div>
          <div className="text-sm italic mt-2">— {message.sender}</div>
          <div className="text-xs text-gray-500 mt-1">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
