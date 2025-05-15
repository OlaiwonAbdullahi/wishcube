import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiNextdotjs, SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import Marquee from "react-fast-marquee";

const HowCanIHelp = () => {
  return (
    <div className="bg-[#1C1C1C] bg-[url('/doodle.webp')] bg-cover bg-center bg-blend-overlay mx-auto h-[50vh] mt-3.5   overflow-hidden backdrop-blur-sm p-6 space-y-6">
      <div className=" p-4  h-full w-full flex flex-col space-y-5 justify-center items-center">
        <h2 className="text-3xl font-bold text-white">How Can I Help?</h2>
        <p className="text-gray-100 text-center">
          Let&apos;s work together to create something amazing.
        </p>
        <Marquee pauseOnHover={true} speed={50}>
          <ul className="flex flex-row gap-3.5">
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md">
              <FaReact className=" size-6" />
              ReactJS
            </li>
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md">
              <SiNextdotjs className=" size-6" />
              NextJS
            </li>
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md">
              <SiJavascript className=" size-6" />
              JavaScript
            </li>
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md ">
              <SiRedux className=" size-6" />
              Redux
            </li>
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md">
              <SiFirebase className=" size-6" />
              Firebase
            </li>
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md">
              <SiTailwindcss className=" size-6" />
              TailwindCSS
            </li>
            <li className="flex flex-row items-center gap-2 bg-white/70 p-2 rounded-md">
              <AiOutlineHtml5 className=" size-6" />
              HTML
            </li>
          </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default HowCanIHelp;
