import React from "react";

interface CardProps {
  name: string;
  description: string;
  createdAt: string;
  avatar: string;
}

const Card: React.FC<CardProps> = ({ name, description, avatar }) => {
  return (
    <div className="bg-black w-60 p-3 rounded-xl shadow-lg flex flex-col gap-3">
      {/* Image container with proper aspect ratio */}
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src={avatar}
          alt={`${name} preview`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/240x150/222/444?text=No+Image";
          }}
        />
      </div>

      {/* Content section with improved typography */}
      <div className="text-white flex-grow">
        <h2 className="text-xl font-semibold tracking-tight mb-1 line-clamp-1">
          {name}
        </h2>
        <p className="text-sm text-gray-300 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>
      </div>

      {/* Button section */}
      <div className="mt-1">
        <button
          className="text-[#85A663] py-2 px-4 bg-transparent border border-[#85A663] w-full rounded-lg font-medium transition-all duration-200 hover:bg-[#85A663]/10 focus:outline-none focus:ring-2 focus:ring-[#85A663]/50"
          aria-label={`Access ${name}`}
        >
          Access
        </button>
      </div>
    </div>
  );
};

export default Card;
