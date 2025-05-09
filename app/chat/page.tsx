"use client";
import React, { useState } from "react";
import Chatinput from "./components/chatinput";
import MessageList from "./components/messageList";

export type Message = {
  text: string;
  sender: string;
  temp?: boolean;
};

const Page: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = { text, sender: "You" };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);
    setMessages((prev) => [
      ...prev,
      { text: "Typing...", sender: "WishCube AI", temp: true },
    ]);

    const fullMessages = [
      {
        role: "system",
        content:
          "You are WishCube AI, a cheerful and helpful assistant for digital greeting cards and event planning.",
      },
      ...messages
        .filter((msg) => !msg.temp)
        .map((msg) => ({
          role: msg.sender === "You" ? "user" : "assistant",
          content: msg.text,
        })),
      { role: "user", content: text },
    ];

    try {
      const res = await fetch("https://ai.hackclub.com/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: fullMessages }),
      });
      const data = await res.json();
      const aiText = data.choices[0].message.content as string;

      const aiMessage: Message = {
        text: `💬 ${aiText}`,
        sender: "WishCube AI",
      };

      setMessages((prev) => [...prev.filter((m) => !m.temp), aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev.filter((m) => !m.temp),
        {
          text: "❌ Oops! Something went wrong with the AI response.",
          sender: "System",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
      <MessageList messages={messages} />
      <Chatinput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Page;
