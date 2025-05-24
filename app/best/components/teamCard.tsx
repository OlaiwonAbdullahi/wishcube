import React from "react";

const TeamCard = () => {
  return (
    <div className=" text-center flex flex-col justify-center item-center">
      <div className=" mx-auto w-5 rounded-full h-5 bg-gradient-to-b from-[#F34DBD] to-[#C2238E]"></div>
      <div className=" flex flex-col justify-center item-center mx-auto -space-y-6">
        <div className=" border rounded-lg w-40 p-2.5 h-40 flex flex-col justify-center item-center">
          <p>
            Bestwish made sending vitual cards, gifts feel like i was there,
            even from miles away!
          </p>
        </div>
        <div className=" border border-dashed rounded-full w-fit p-2 border-[#F34DBD] mx-auto">
          <img
            src="https://placehold.co/600"
            alt=""
            className=" rounded-full h-20 w-20"
          />
        </div>
      </div>
      <div className="">
        <h2>Jennifer Ipie</h2>
        <span>CEO</span>
      </div>
    </div>
  );
};

export default TeamCard;
