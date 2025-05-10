"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { useAuth } from "../AuthContext";
import AccountSettings from "../dashboard/components/accountSettings";
import Image from "next/image";

const Navbar = () => {
  const [openAccountSettings, setOpenAccountSettings] = useState(false);
  const { userProfile } = useAuth();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenAccountSettings(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-40">
      <div className="flex justify-between items-center bg-white/20 p-3 md:w-4/5 backdrop-blur-md sticky top-0 w-10/12 mx-auto rounded-2xl border border-black/40 mt-2">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="text-xl font-semibold">WishCube</div>
        </Link>

        <div className="flex items-center gap-4 relative">
          {userProfile && (
            <Link
              href="/chat"
              className="bg-[#1C1C1C]/10 cursor-pointer text-gray-800 p-2 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              <FiMessageSquare className="size-6" />
            </Link>
          )}

          {!userProfile ? (
            <Link href="/signup">
              <button className="bg-[#1C1C1C] text-[#F8F8FF] py-2 px-3 rounded-xl hover:bg-[#2C2C2C] transition duration-300 ease-in-out">
                Get Started
              </button>
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenAccountSettings((prev) => !prev)}
                className="bg-[#1C1C1C]/10 text-gray-800  mt-1 rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out"
              >
                {userProfile.photoURL ? (
                  <Image
                    src={userProfile.photoURL}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500">
                      {userProfile.displayName?.charAt(0) ||
                        userProfile.email?.charAt(0) ||
                        "U"}
                    </span>
                  </div>
                )}
              </button>

              {openAccountSettings && (
                <div className="absolute right-0 mt-2 w-64 bg-white  border border-gray-200 rounded-xl overflow-hidden animate-fadeIn">
                  <AccountSettings />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
