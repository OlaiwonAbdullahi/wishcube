import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "WishCube",
      description:
        "A web Application for generating Greetings Cards,Greeting Website and Gifting Celebrant built with NextJS, TailwindCSS.",
      link: "https://wishcube.vercel.app/",
      image: "/dp.jpg",
    },
    {
      id: 2,
      name: "AccomX",
      description:
        "AI-powered hostel management software connecting agents and landlords.",
      link: "https://accomx.vercel.app/",
      image: "/dp.jpg",
    },
    {
      id: 3,
      name: "SmartPay VTU",
      description:
        "VTU bill payment app using React.js Where user can buy Data,Airtime and other internet bill Payment",
      link: "https://trysmartpay.vercel.app",
      image: "/dp.jpg",
    },

    {
      id: 5,
      name: "Exclusive Ecommerce Store",
      description:
        "Ecommerce app using React, Firebase, Redux Toolkit. It Features includes Shopping, adding to Cart,Checkout...",
      link: "https://exclusive-ecommerce-store-abdul.vercel.app/",
      image: "/dp.jpg",
    },

    {
      id: 12,
      name: "Vidocean",
      description: "YouTube clone using Firebase and YouTube API.",
      link: "https://vidocean.vercel.app/",
      image: "/dp.jpg",
    },

    {
      id: 14,
      name: "LinkedIn Clone",
      description: "A LinkedIn-style app using React and Firebase.",
      link: "https://abdullahiolaiwon.netlify.app/",
      image: "/dp.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:pb-11 pb-4">
      <div className=" ">
        <h2 className=" text-center text-3xl font-bold">
          Here&apos;s What I&apos;ve been up to
        </h2>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className=" cursor-pointer bg-neutral-700  w-fit justify-center flex items-center p-3  text-white rounded-md">
          View All
        </button>
      </div>
    </div>
  );
};

export default Projects;
