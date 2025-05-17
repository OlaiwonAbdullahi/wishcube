import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-[#85A663] flex flex-col gap-3.5 p-5 text-white bottom-0 sticky">
      <div className="flex flex-wrap justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold tracking-wide">BLACKSOLVENT</h1>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="uppercase font-medium mb-3 text-sm tracking-wider">
            Departments
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="hover:text-white/80">
                Production
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Sales & Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Purchasing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Human Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Distribution
              </a>
            </li>
          </ul>
        </div>

        {/* General links */}
        <div className="mb-4 md:mb-0">
          <h2 className="uppercase font-medium mb-3 text-sm tracking-wider">
            Navigation
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="hover:text-white/80">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Social media links */}
        <div className="flex flex-col self-start">
          <h2 className="uppercase font-medium mb-3 text-sm tracking-wider">
            Socials
          </h2>
          <ul className="flex space-x-2.5">
            <li className="bg-white/30 p-1.5 rounded-md hover:bg-white/40 transition-colors">
              <a href="#" aria-label="Instagram">
                <BsInstagram className="size-5" />
              </a>
            </li>
            <li className="bg-white/30 p-1.5 rounded-md hover:bg-white/40 transition-colors">
              <a href="#" aria-label="Facebook">
                <BsFacebook className="size-5" />
              </a>
            </li>
            <li className="bg-white/30 p-1.5 rounded-md hover:bg-white/40 transition-colors">
              <a href="#" aria-label="LinkedIn">
                <LiaLinkedin className="size-5" />
              </a>
            </li>
            <li className="bg-white/30 p-1.5 rounded-md hover:bg-white/40 transition-colors">
              <a href="#" aria-label="Twitter">
                <BsTwitterX className="size-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-t-white/50 my-1" />

      <div className="flex  flex-row space-x-3 items-center text-white/60 font-extralight text-sm pt-2">
        <div>
          © {new Date().getFullYear()} BlackSolvent. All rights reserved.
        </div>
        <div className="">
          <ul className="flex flex-wrap gap-3 md:space-x-3">
            <li>
              <a href="#" className="hover:text-white/80">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white/80">
                Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
