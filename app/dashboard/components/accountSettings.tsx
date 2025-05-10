"use client";
import {
  MdOutlinePassword,
  MdOutlineEmail,
  MdOutlineDarkMode,
  MdLogout,
} from "react-icons/md";
import React from "react";
import { useAuth } from "@/app/AuthContext";
import Image from "next/image";
export default function ProfilePage() {
  const { userProfile, signOut } = useAuth();
  console.log(userProfile);

  if (!userProfile) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="container mx-auto  ">
      <div className="bg-white rounded-lg  p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-4">
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
            <div className="flex flex-col ">
              <h1 className="text-lg font-bold whitespace-nowrap">
                {userProfile.displayName || "User"}
              </h1>
              <p className="text-gray-500 text-sm text-wrap">
                {userProfile.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start text-left">
            <span className="flex items-center gap-2 whitespace-nowrap">
              {" "}
              <MdOutlinePassword className="text-gray-500" /> Change password
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              {" "}
              <MdOutlineEmail className="text-gray-500" /> Change email
            </span>

            <span className="flex items-center gap-2 whitespace-nowrap">
              {" "}
              <MdOutlineDarkMode className="text-gray-500" /> Change Theme
            </span>
            <span
              onClick={signOut}
              className="flex items-center gap-2 whitespace-nowrap  "
            >
              {" "}
              <MdLogout className="text-gray-500" /> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
