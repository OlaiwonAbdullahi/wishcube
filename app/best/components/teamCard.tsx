import React from "react";

type TeamCardProps = {
  image: string;
  name: string;
  position: string;
  description: string;
};

const TeamCard = ({ image, name, position, description }: TeamCardProps) => {
  return (
    <div className=" bg-white text-center flex flex-col justify-center item-center gap-2.5">
      <div className=" mx-auto w-5 rounded-full h-5 bg-gradient-to-b from-[#F34DBD] to-[#C2238E]"></div>
      <div className=" flex flex-col justify-center item-center mx-auto -space-y-8">
        <div className="shadow-xl rounded-lg  p-2.5 h-[213px] w-[296px] flex flex-col justify-center item-center">
          <p>{description}</p>
        </div>
        <div className="">
          <div className=" bg-white border border-dashed rounded-full w-fit p-2 border-[#F34DBD] mx-auto">
            <img
              src={image}
              alt=""
              className=" rounded-full h-[85px] w-[85px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="">
        <h2 className=" text-lg font-medium">{name}</h2>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default TeamCard;
