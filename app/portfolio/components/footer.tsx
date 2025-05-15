import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="text-center text-gray-500 text-sm py-10 border-t border-gray-300">
      Copyright &copy; {new Date().getFullYear()} Abdullahi Olaiwon
      <div className="flex flex-row justify-center items-center gap-2">
        <RiTwitterXFill className="size-5" />
        <BsInstagram className="size-5" />
        <CiLinkedin className="size-5" />
        <FiGithub className="size-5" />
      </div>
    </div>
  );
};

export default Footer;
