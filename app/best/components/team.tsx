import React from "react";
import TeamCard from "./teamCard";

const Team = () => {
  const TeamData = [
    {
      name: "Jennifer Ipie",
      position: "CEO",
      descption:
        "Bestwish made sending vitual cards, gifts feel like i was there, even from miles away!",
      image: "https://placehold.co/600",
    },
    {
      name: "John Doe",
      position: "Co-Founder",
      descption:
        "Bestwish made sending vitual cards, gifts feel like i was there, even from miles away!",
      image: "https://placehold.co/600",
    },
    {
      name: "John Doe",
      position: "Designer",
      descption:
        "Bestwish made sending vitual cards, gifts feel like i was there, even from miles away!",
      image: "https://placehold.co/600",
    },
    {
      name: "John Doe",
      position: "Developer",
      descption:
        "Bestwish made sending vitual cards, gifts feel like i was there, even from miles away!",
      image: "https://placehold.co/600",
    },
  ];
  return (
    <div className=" bg-white max-w-7xl mx-auto px-4 py-8 flex flex-col justify-center items-center space-y-6">
      <h2 className=" text-3xl font-medium text-[#F34DBD] text-center">
        Our Company
      </h2>
      <p className=" text-center">
        Explore a variety of gifts to make whether birthdays, anniversaries and
        milestones extra special
      </p>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TeamData.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.descption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
