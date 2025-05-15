import React from "react";
import { CiCoinInsert } from "react-icons/ci";
import { ReactNode } from "react";

// Define types for our component props
interface GiftItemData {
  id: string;
  name: string;
  price: number;
  icon: ReactNode;
  bgColor: string;
}

interface GiftItemProps extends GiftItemData {
  isSelected: boolean;
  onClick: () => void;
}

interface GiftProps {
  selectedGift?: string;
  onSelectGift?: (giftId: string) => void;
  gifts: GiftItemData[];
}

const Gift: React.FC<GiftProps> = ({ selectedGift, onSelectGift, gifts }) => {
  // Internal state for when component is used uncontrolled
  const [internalSelectedGift, setInternalSelectedGift] = React.useState<
    string | null
  >(null);

  // Use either the prop or internal state based on what's available
  const currentSelected =
    selectedGift !== undefined ? selectedGift : internalSelectedGift;
  const handleSelect = onSelectGift || setInternalSelectedGift;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <label
        htmlFor="gift"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select a Gift
      </label>
      <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gifts.map((gift) => (
            <GiftItem
              key={gift.id}
              {...gift}
              isSelected={currentSelected === gift.id}
              onClick={() => handleSelect(gift.id)}
            />
          ))}
        </div>
      </div>

      {currentSelected && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100 text-sm text-blue-800">
          <p>
            Selected gift:{" "}
            <span className="font-medium">
              {gifts.find((g) => g.id === currentSelected)?.name}
            </span>
          </p>
        </div>
      )}
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
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg border transition-all duration-200 p-3 flex flex-col items-center cursor-pointer ${
        isSelected
          ? "border-blue-500 ring-2 ring-blue-200 shadow-md"
          : "border-gray-200 shadow-sm hover:shadow"
      }`}
    >
      <div className="flex items-center text-xs font-medium text-amber-500 self-end mb-2">
        <CiCoinInsert className="size-4 mr-1" />
        {price}
      </div>
      <div className={`${bgColor} p-3 rounded-full mb-2`}>{icon}</div>
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default Gift;
