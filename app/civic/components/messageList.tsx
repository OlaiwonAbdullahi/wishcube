import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Message } from "../../types";

interface MessageListProps {
  messages?: Message[];
  onGenerateResponse?: (message: string) => Promise<void>;
}

const MessageList: React.FC<MessageListProps> = ({ messages = [] }) => {
  if (messages.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-500">
        No messages yet. Start a conversation!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-4 overflow-y-auto h-[calc(100vh-200px)]">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-end gap-2.5 ${
            message.sender === "user" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex-shrink-0">
            <VscAccount className="text-gray-600 w-8 h-8" />
          </div>
          <div
            className={`
              max-w-[75%] p-3 rounded-lg shadow-sm
              ${
                message.sender === "user"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }
            `}
          >
            <p className="break-words">{message.text}</p>
            {message.timestamp && (
              <div className="text-xs mt-1 opacity-70">{message.timestamp}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
