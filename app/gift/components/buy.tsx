"use client";

import { useState } from "react";
import { BsGem } from "react-icons/bs";
import { CiHeart, CiStar } from "react-icons/ci";

import { IoRocketOutline } from "react-icons/io5";
import { PiConfettiThin, PiCrownThin } from "react-icons/pi";
import { SlMagicWand } from "react-icons/sl";

const gifts = [
  {
    id: 1,
    name: "Sparkle Confetti",
    icon: PiConfettiThin,
    description: "Celebrate with a burst of colorful confetti.",
    price: 500,
    color: "text-pink-500",
  },
  {
    id: 2,
    name: "Golden Star",
    icon: CiStar,
    description: "Light up the moment with a radiant star effect.",
    price: 750,
    color: "text-yellow-400",
  },
  {
    id: 3,
    name: "Rocket Boost",
    icon: IoRocketOutline,
    description: "Send your message soaring with a rocket animation.",
    price: 1000,
    color: "text-blue-500",
  },
  {
    id: 4,
    name: "Heart Shower",
    icon: CiHeart,
    description: "Express love with a cascade of animated hearts.",
    price: 600,
    color: "text-red-500",
  },
  {
    id: 5,
    name: "Crystal Glow",
    icon: BsGem,
    description: "Add elegance with sparkling crystal effects.",
    price: 900,
    color: "text-teal-500",
  },
  {
    id: 6,
    name: "Royal Crown",
    icon: PiCrownThin,
    description: "Gift a majestic crown for someone special.",
    price: 1200,
    color: "text-purple-500",
  },
  {
    id: 7,
    name: "Magic Wand",
    icon: SlMagicWand,
    description: "Cast a spell with a magical wand animation.",
    price: 800,
    color: "text-indigo-500",
  },
];

const GiftShop = () => {
  const [hoveredGift, setHoveredGift] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 text-left mb-4">
          Gift Shop
        </h2>
        <p className="text-gray-600 text-left mb-12 max-w-2xl mx-auto">
          Make someone&apos;s day with a unique digital gift! Explore our
          collection to find the perfect surprise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="flex justify-center"
              onMouseEnter={() => setHoveredGift(gift.id)}
              onMouseLeave={() => setHoveredGift(null)}
            >
              <div
                className={`bg-white rounded-2xl  p-6 w-full max-w-sm transition-all duration-300 ${
                  hoveredGift === gift.id ? "scale-105 shadow-xl" : "shadow-md"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-gray-100 ${gift.color}`}>
                    <gift.icon className="w-10 h-10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-800">
                    {gift.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 min-h-[40px]">
                    {gift.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                      <BsGem className="w-5 h-5" />
                      <span>{gift.price}</span>
                    </div>
                  </div>
                  <button
                    className={` cursor-pointer mt-6 w-full py-2 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${
                      hoveredGift === gift.id ? "bg-gray-700" : "bg-gray-600"
                    } hover:bg-gray-700`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftShop;
