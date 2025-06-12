import React, { useState } from "react";
import { CiCoinInsert } from "react-icons/ci";
import { IoRoseOutline } from "react-icons/io5";
import { CiIceCream } from "react-icons/ci";
import { GiCupcake } from "react-icons/gi";
import { FiGift, FiCheck } from "react-icons/fi";

// Define types for our component props
interface GiftItemData {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  bgColor: string;
  description?: string;
}

interface GiftItemProps extends GiftItemData {
  isSelected: boolean;
  onClick: () => void;
}

interface GiftProps {
  selectedGift?: string;
  onSelectGift?: (giftId: string | null) => void;
  gifts?: GiftItemData[];
  className?: string;
}

// Default gift items
const DEFAULT_GIFTS: GiftItemData[] = [
  {
    id: "flower",
    name: "Rose Bouquet",
    price: 500,
    icon: <IoRoseOutline className="size-6 text-pink-600" />,
    bgColor: "bg-pink-100",
    description: "Beautiful fresh roses",
  },
  {
    id: "ice-cream",
    name: "Premium Ice Cream",
    price: 300,
    icon: <CiIceCream className="size-6 text-teal-600" />,
    bgColor: "bg-teal-100",
    description: "Artisanal ice cream selection",
  },
  {
    id: "cupcake",
    name: "Gourmet Cupcake",
    price: 250,
    icon: <GiCupcake className="size-6 text-purple-600" />,
    bgColor: "bg-purple-100",
    description: "Handcrafted cupcakes",
  },
  {
    id: "surprise",
    name: "Surprise Gift",
    price: 750,
    icon: <FiGift className="size-6 text-orange-600" />,
    bgColor: "bg-orange-100",
    description: "A delightful surprise",
  },
];

const Gift: React.FC<GiftProps> = ({
  selectedGift,
  onSelectGift,
  gifts = DEFAULT_GIFTS,
  className = "",
}) => {
  // Internal state for when component is used uncontrolled
  const [internalSelectedGift, setInternalSelectedGift] = useState<
    string | null
  >(null);

  // Use either the prop or internal state based on what's available
  const currentSelected =
    selectedGift !== undefined ? selectedGift : internalSelectedGift;
  const handleSelect = onSelectGift || setInternalSelectedGift;

  const handleGiftToggle = (giftId: string) => {
    // Toggle selection - if already selected, deselect
    const newSelection = currentSelected === giftId ? null : giftId;
    handleSelect(newSelection);
  };

  const selectedGiftItem = gifts.find((g) => g.id === currentSelected);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          🎁 Add a Special Gift
        </label>
        <p className="text-sm text-gray-600">
          Make your greeting extra special with a thoughtful gift
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gifts.map((gift) => (
            <GiftItem
              key={gift.id}
              {...gift}
              isSelected={currentSelected === gift.id}
              onClick={() => handleGiftToggle(gift.id)}
            />
          ))}
        </div>

        {selectedGiftItem && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <FiCheck className="size-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    Selected Gift:
                  </span>
                </div>
                <span className="text-blue-800">{selectedGiftItem.name}</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <CiCoinInsert className="size-4" />
                <span className="font-semibold">₦{selectedGiftItem.price}</span>
              </div>
            </div>
            <p className="text-sm text-blue-700 mt-2">
              {selectedGiftItem.description}
            </p>
            <button
              onClick={() => handleSelect(null)}
              className="mt-3 px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-md transition-colors"
            >
              Remove Gift
            </button>
          </div>
        )}

        {!currentSelected && (
          <div className="mt-4 text-center text-gray-500 text-sm">
            Select a gift to add to your greeting card
          </div>
        )}
      </div>
    </div>
  );
};

const GiftItem: React.FC<GiftItemProps> = ({
  icon,
  name,
  price,
  bgColor,
  isSelected,
  onClick,
  description,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative bg-white rounded-xl border-2 transition-all duration-300 p-4 
        flex flex-col items-center cursor-pointer group
        ${
          isSelected
            ? "border-blue-500 ring-2 ring-blue-200 shadow-lg transform scale-105"
            : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:scale-102"
        }
      `}
    >
      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
          <FiCheck className="size-3" />
        </div>
      )}

      <div className="flex items-center justify-between w-full mb-3">
        <div className="flex items-center text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
          <CiCoinInsert className="size-3 mr-1" />₦{price}
        </div>
      </div>

      <div
        className={`${bgColor} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>

      <div className="text-center">
        <span className="text-sm font-semibold text-gray-800 block mb-1">
          {name}
        </span>
        {description && (
          <span className="text-xs text-gray-500 block">{description}</span>
        )}
      </div>
    </div>
  );
};

export default Gift;
