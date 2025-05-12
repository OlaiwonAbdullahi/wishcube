"use client";
import React, { useState, useCallback } from "react";
import Navbar from "./components/navbar";
import MessageInput from "./components/messageInput";
import MessageList from "./components/messageList";
import { Message } from "../types";

const Page: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How are you doing today?",
      sender: "bot",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      text: "I'm doing great, thanks for asking! How about you?",
      sender: "user",
      timestamp: "10:31 AM",
    },
  ]);

  const generateResponse = async (message: string) => {
    try {
      const response = await fetch("https://ai.hackclub.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: `${messages.length + 1}`,
        text: data.response,
        sender: "other",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error generating response:", error);

      const errorMessage: Message = {
        id: `${messages.length + 1}`,
        text: "Sorry, I couldn't generate a response right now.",
        sender: "other",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleSendMessage = useCallback(
    (messageText: string) => {
      const newMessage: Message = {
        id: `${messages.length + 1}`,
        text: messageText,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Trigger AI response after a short delay
      setTimeout(() => {
        generateResponse(messageText);
      }, 500);
    },
    [messages]
  );

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        onLogin={() => console.log("Login clicked")}
        onSignup={() => console.log("Signup clicked")}
      />
      <div className="flex-grow overflow-hidden">
        <MessageList
          messages={messages}
          onGenerateResponse={generateResponse}
        />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Page;
