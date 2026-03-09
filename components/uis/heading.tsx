import React from "react";

interface HeadingProps {
  title?: string;
  description?: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 w-full md:w-[50%]">
        <div className="py-1 px-2 w-fit rounded-md bg-[#9151FF] shrink-0">
          <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
            {title}
          </h2>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Heading;
