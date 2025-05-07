"use client";
import React, { useState } from "react";

const AiSugestion = () => {
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);

  const generateAiSuggestion = async () => {
    const prompt = `
You are a professional greeting card writer. 
Please write a heartfelt and personalized greeting for someone named . 
If relevant, incorporate the following message or sentiment: "Your presence brightens every space". 
The tone should be warm, sincere, and creative. 
Keep it concise but meaningful (around 3-5 sentences). 
Do not include a signature or sender name. Use emojis.
`;

    try {
      const response = await fetch("https://ai.hackclub.com/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const message = data?.choices?.[0]?.message?.content;
      setAiSuggestion(message || "No message generated.");
    } catch (error) {
      console.error("Failed to generate message:", error);
      setAiSuggestion("❌ Failed to generate message.");
    }
  };

  const handleUseMessage = (message: string) => {
    navigator.clipboard.writeText(message);
    alert("Message copied to clipboard!");
  };

  return (
    <div className="bg-violet-50 rounded-2xl p-6 space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">AI Suggestions</h2>
        <button
          onClick={generateAiSuggestion}
          className="text-sm text-white bg-gray-600 px-4 py-2 rounded-lg hover:bg-violet-700 transition"
        >
          Generate Suggestion
        </button>
      </div>

      <div className="space-y-4">
        {aiSuggestion && (
          <div className="border bg-white border-violet-300 rounded-xl p-4 hover:shadow-md transition duration-300">
            <p className="text-gray-700 text-sm mb-2">{aiSuggestion}</p>
            <button
              onClick={() => handleUseMessage(aiSuggestion)}
              className="text-[#1C1C1C] text-sm font-medium hover:underline hover:text-violet-700 transition"
            >
              Use this Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiSugestion;
