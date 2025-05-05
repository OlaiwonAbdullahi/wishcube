"use client";
import React, { useState } from "react";
import Chatinput from "./components/chatinput";
import MessageList from "./components/messageList";

const Page = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (text) => {
    const userMessage = { text, sender: "User" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("https://ai.hackclub.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: text }],
        }),
      });

      const data = await response.json();
      const aiText = data.choices[0].message.content;

      const aiMessage = {
        text: aiText,
        sender: "AI",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI response error:", error);
      const errorMessage = {
        text: "Sorry, something went wrong with the AI response.",
        sender: "System",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />
      <Chatinput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Page;
