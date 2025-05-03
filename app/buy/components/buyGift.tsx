"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const BuyGift = ({ gift, walletBalance, userId, onPurchase }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: "", error: "" });

  const handleBuy = async () => {
    if (walletBalance < gift.price) {
      setStatus({ success: "", error: "Insufficient wallet balance." });
      return;
    }

    try {
      setLoading(true);
      setStatus({ success: "", error: "" });

      const res = await axios.post("/api/buy-gift", {
        userId,
        giftId: gift.id,
        amount: gift.price,
      });

      if (res.data.success) {
        setStatus({ success: "Gift purchased successfully!", error: "" });
        onPurchase(gift.price, res.data.newBalance);
      } else {
        setStatus({
          success: "",
          error: res.data.message || "Purchase failed.",
        });
      }
    } catch (err) {
      setStatus({ success: "", error: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm border p-4 rounded shadow">
      <Image
        src={gift.image}
        alt={gift.name}
        width={300}
        height={160}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{gift.name}</h3>
      <p>Price: ${gift.price}</p>
      <p>Your Wallet: ${walletBalance}</p>

      {status.error && <p className="text-red-500 mt-2">{status.error}</p>}
      {status.success && (
        <p className="text-green-500 mt-2">{status.success}</p>
      )}

      <button
        onClick={handleBuy}
        disabled={loading}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Buy Gift"}
      </button>
    </div>
  );
};

export default BuyGift;
