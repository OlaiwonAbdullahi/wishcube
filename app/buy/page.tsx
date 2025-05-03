"use client";

import React, { useState } from "react";
import BuyGift from "./components/buyGift";

const Page = () => {
  const [walletBalance, setWalletBalance] = useState(100); // Start value

  const updateWalletBalance = (amount, newBalance) => {
    setWalletBalance(newBalance); // Update based on API response
  };

  return (
    <div className="p-6">
      <BuyGift
        gift={{
          id: 1,
          name: "Teddy Bear",
          price: 20,
          image: "/gifts/teddy.jpg",
        }}
        walletBalance={walletBalance}
        userId="abc123"
        onPurchase={updateWalletBalance}
      />
    </div>
  );
};

export default Page;
