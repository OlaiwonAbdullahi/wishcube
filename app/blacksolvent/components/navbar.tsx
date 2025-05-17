"use client";
import React, { useState, useRef, useEffect } from "react";
import { CiCloud } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    { title: "Home", hasDropdown: false },
    { title: "Brand", hasDropdown: true },
    { title: "Reports", hasDropdown: true },
    { title: "Content", hasDropdown: true },
    { title: "Products", hasDropdown: true },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <div className="bg-[#85A663] text-white flex flex-row justify-between items-center w-full px-4 md:px-8 py-3 shadow-md">
        <div className="text-xl font-semibold tracking-wide">BlackSolvent</div>

        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.title}
                className="font-medium hover:text-opacity-80 transition-colors duration-200 cursor-pointer flex items-center gap-1"
              >
                {item.title}
                {item.hasDropdown && <MdKeyboardArrowDown className="mt-0.5" />}
              </li>
            ))}
          </ul>
        </div>

        <div className="gap-4 hidden md:flex">
          <button className="text-white hover:bg-white/10 flex items-center justify-center px-4 py-2 rounded-md bg-transparent border border-white/80 transition-colors duration-200 font-medium">
            Sign In
          </button>
          <button className="text-white bg-[#202020] hover:bg-[#303030] px-4 py-2 flex items-center justify-center rounded-md transition-colors duration-200 font-medium">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden flex items-center justify-center cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Toggle menu"
        >
          {!openMenu ? (
            <IoReorderThreeOutline className="size-6" />
          ) : (
            <LiaTimesSolid className="size-6" />
          )}
        </button>
      </div>

      {openMenu && (
        <div className="bg-[#85A663] text-white px-6 py-2 md:hidden absolute w-full z-50 shadow-lg">
          <div className="flex justify-between py-3 border-b border-white/25">
            <div className="text-xl font-medium">Menu</div>
            <div className="flex items-center gap-4">
              <PiDotsThreeVerticalBold className="size-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <TbMessageCircle className="size-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <CiCloud className="size-5 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center justify-between bg-white/15 p-3 my-4 rounded-md cursor-pointer hover:bg-white/20 transition-colors duration-200">
            <div className="flex items-center gap-3">
              <div className="bg-white/35 h-8 w-8 rounded-full flex items-center justify-center font-medium">
                O
              </div>
              <div className="text-white text-sm">
                olaiwonabdullahi@gmail.com
              </div>
            </div>
            <div>
              <MdKeyboardArrowRight className="opacity-80" />
            </div>
          </div>

          <ul className="flex flex-col space-y-1 mb-4">
            {menuItems.map((item) => (
              <li key={item.title} className="w-full">
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-white/10 rounded-md transition-colors duration-200"
                  onClick={() => item.hasDropdown && toggleDropdown(item.title)}
                >
                  <span>{item.title}</span>
                  {item.hasDropdown && (
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown content would go here */}
                {item.hasDropdown && activeDropdown === item.title && (
                  <div className="bg-white/10 rounded-md mt-1 mb-2 py-1 px-3 ml-4 border-l-2 border-white/30">
                    <div className="py-2 cursor-pointer hover:pl-1 transition-all duration-200">
                      Option 1
                    </div>
                    <div className="py-2 cursor-pointer hover:pl-1 transition-all duration-200">
                      Option 2
                    </div>
                    <div className="py-2 cursor-pointer hover:pl-1 transition-all duration-200">
                      Option 3
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 py-3 border-t border-white/25">
            <button className="text-white w-full hover:bg-white/10 py-2.5 rounded-md bg-transparent border border-white/50 transition-colors duration-200 font-medium">
              Sign In
            </button>
            <button className="text-white w-full bg-[#202020] hover:bg-[#303030] py-2.5 rounded-md transition-colors duration-200 font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
