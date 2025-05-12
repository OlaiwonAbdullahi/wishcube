"use client";
import React, { useState } from "react";

const ReceiveGift = () => {
  const [giftCode, setGiftCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRedeem = async () => {
    if (!giftCode.trim()) {
      setError("Please enter a gift code.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      // Simulate API call (replace with actual fetch to your backend)
      const res = await fetch("/api/redeem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: giftCode }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid gift code");

      setMessage("🎉 Gift redeemed successfully! Enjoy your reward.");
      setGiftCode(""); // reset input
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-medium text-slate-800">Receive a Gift</h2>
        <p className="text-slate-600">
          Enter the gift code you received to redeem your gift and unlock
          exclusive rewards.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="giftCode" className="text-slate-600">
          Enter Your Gift Code
        </label>
        <div className="flex gap-2 w-full">
          <input
            type="text"
            name="giftCode"
            id="giftCode"
            value={giftCode}
            onChange={(e) => setGiftCode(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button
            onClick={handleRedeem}
            disabled={loading}
            className="bg-gray-500 text-white rounded-md p-2 whitespace-nowrap disabled:opacity-50"
          >
            {loading ? "Redeeming..." : "Redeem Gift"}
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ReceiveGift;
