import React, { ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div>
      <div className="gap-2.5 border md:h-72 sm:h-56 h-80  border-black/30 mx-2.5 p-3.5 flex flex-col justify-start rounded-2xl items-start mt-5 mb-10">
        <span className="">{icon}</span>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-gray-600 mb-1">{description}</p>
        <button className="flex gap-1 items-center text-[#1C1C1C] bg-[#F8F8FF] py-1 cursor-pointer rounded-lg  transition duration-300 ease-in-out">
          Learn More <IoIosArrowRoundForward className="size-5 mt-1" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
