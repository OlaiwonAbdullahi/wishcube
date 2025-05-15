import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProjectCard = ({
  name,
  description,
  link,
  image,
}: {
  name: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-100/10 backdrop-blur-2xl border border-neutral-200/50 w-full justify-center p-4 pt-2 rounded-md">
      <div className=" flex flex-row justify-between">
        <div className=" h-2 w-2 bg-neutral-200/90 rounded-full"></div>
        <div className=" h-2 w-2 bg-neutral-200/90 rounded-full"></div>
      </div>
      <div className=" bg-neutral-200 w-full justify-center p-4  rounded-md">
        <Image
          src={image}
          alt="project"
          width={200}
          height={100}
          className="w-full h-52"
        />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="">
        <Link href={link} target="_blank">
          <button className=" cursor-pointer whitespace-nowrap bg-gray-300 text-neutral-800 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-neutral-800 hover:text-white transition-all duration-300">
            View Project
            <MdOutlineKeyboardArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
