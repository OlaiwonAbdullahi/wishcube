"use client";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [id, setId] = useState("");
  return (
    <div className="h-screen bg-black text-white flex flex-row gap-4 items-center">
      <div className="w-3/7 p-8 space-y-2">
        <div className="">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="h-10 w-20"
          />
        </div>
        <div className=" space-y-2">
          <h2 className=" text-3xl font-medium">Login to Blacksolvent</h2>
          <span>
            Don&apos;t have an Account?{" "}
            <span className=" text-[#85A663]">Create an Account</span>
          </span>
        </div>
        <div className=" w-9/12 space-y-2">
          <div className=" flex flex-col">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
            />
          </div>
          <div className=" flex flex-row justify-between">
            <span className=" flex flex-row gap-2">
              <div className=" ">
                <input
                  type="checkbox"
                  name="rememberId"
                  id="rememberId"
                  className=" accent-black"
                />{" "}
              </div>
              Remember ID
            </span>
            <span className=" text-[#85A663]">Forget Password?</span>
          </div>
          <div className="">
            <button className=" flex flex-row justify-between bg-[#85A663] w-full items-center p-2 rounded-md">
              <span>Log In</span>
              <span>
                <FiArrowRight />
              </span>
            </button>
          </div>
          <div className=" flex w-full items-center gap-1.5">
            <hr className=" border-t border-t-gray-400 w-1/2" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className=" border-t border-t-gray-400 w-1/2" />
          </div>
          <div className="text-gray-300 flex justify-between bg-white/15 p-2 rounded-md">
            <span>Sign up with Google</span>
            <span>
              <FcGoogle className=" size-6" />
            </span>
          </div>
        </div>
      </div>
      <div className=" w-4/7">
        {" "}
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="h-screen w-full"
        />
      </div>
    </div>
  );
};

export default Login;
