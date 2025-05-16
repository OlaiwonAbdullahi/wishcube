"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { MdArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className=" bg-[#85A663] text-white flex flex-row justify-between w-full p-2.5 h-[48px]">
        <div className="">BlackSolvent</div>
        <div className="">
          <ul className=" md:flex hidden  space-x-5 ">
            <li>Home</li>
            <li className=" flex items-center gap-1">
              Brand <MdKeyboardArrowDown />
            </li>
            <li className=" flex items-center gap-1">
              Reports <MdKeyboardArrowDown />
            </li>
            <li className=" flex items-center gap-1">
              Content <MdKeyboardArrowDown />
            </li>
            <li className=" flex items-center gap-1">
              Products <MdKeyboardArrowDown />
            </li>
          </ul>
        </div>
        <div className=" gap-2 md:flex hidden">
          <button className="text-white flex items-center justify-center p-2.5 rounded-lg bg-transparent border border-white w-fit">
            Sign In
          </button>
          <button className=" text-white bg-[#202020] p-2.5 w-fit flex items-center justify-center rounded-lg">
            Sign Up
          </button>
        </div>
        <button
          className=" md:hidden flex cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? (
            <VscMenu className=" size-7" />
          ) : (
            <LiaTimesSolid className=" size-7" />
          )}
        </button>
      </div>
      {openMenu && (
        <div className=" bg-[#85A663] text-white p-6 border-t border-t-white/35 ">
          <ul className=" flex flex-col md:hidden  space-x-5 ">
            <div className=" flex items-center pl-2 bg-white/10  backdrop-blur-lg rounded-md w-full  ">
              <CiSearch className=" size-5" />
              <input
                type="text"
                placeholder="Search"
                className=" bg-transparent  p-1.5 text-white placeholder:text-white placeholder:font-extralight rounded-r-md w-full"
              />
            </div>
            <li>Home</li>
            <li className=" flex items-center gap-1">
              Brand <MdArrowRight />
            </li>
            <li className=" flex items-center gap-1">
              Reports <MdArrowRight />
            </li>
            <li className=" flex items-center gap-1">
              Content <MdArrowRight />
            </li>
            <li className=" flex items-center gap-1">
              Products <MdArrowRight />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
