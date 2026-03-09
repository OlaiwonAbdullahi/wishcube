import React from "react";

interface CardsTitleProps {
  firstText?: string;
  secondText?: string;
  bg?: string;
  text?: string;
}

const CardsTitle = ({ firstText, secondText, bg, text }: CardsTitleProps) => {
  return (
    <div className=" flex flex-col ">
      <div
        className=" py-0.5 px-2 w-fit rounded"
        style={{ backgroundColor: bg }}
      >
        <h2
          className=" text-lg font-medium whitespace-nowrap"
          style={text ? { color: text } : undefined}
        >
          {firstText}
        </h2>
      </div>
      <div
        className=" py-0.5 px-2 w-fit rounded"
        style={{ backgroundColor: bg }}
      >
        <h2
          className=" text-lg font-medium whitespace-nowrap"
          style={text ? { color: text } : undefined}
        >
          {secondText}
        </h2>
      </div>
    </div>
  );
};

export default CardsTitle;
