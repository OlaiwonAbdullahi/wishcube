import React, { useState } from "react";
import { BsSend } from "react-icons/bs";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-4">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button
            onClick={handleSubmit}
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <BsSend className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
