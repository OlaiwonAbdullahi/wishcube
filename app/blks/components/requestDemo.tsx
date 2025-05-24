"use client";
import React, { useState } from "react";

const RequestDemo = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <div className="flex flex-col gap-4 p-5 bg-white/10 rounded-md backdrop-blur-3xl border border-[#85A663]/20">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-white text-center">
          Request A Demo
        </h2>
        <p className="text-sm text-white/50 text-center">
          Our sales team will reach out to connect with you at your earliest
          convenience
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="First Name*"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <input
          type="text"
          placeholder="Last Name*"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <input
          type="email"
          placeholder="Work Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" focus:outline-none text-gray-300      bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <input
          type="tel"
          placeholder="Phone Number*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <input
          type="text"
          placeholder="Company*"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <input
          type="text"
          placeholder="No of Employees*"
          value={employees}
          onChange={(e) => setEmployees(e.target.value)}
          className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className=" focus:outline-none text-gray-300 bg-white/15 placeholder:text-gray-300 rounded-md p-2 border-none backdrop-blur-2xl"
        />
        <button
          type="submit"
          className=" text-white bg-[#85A663] rounded-md p-2 w-fit mx-auto px-3.5"
        >
          Get Free Access
        </button>
        <span className="text-sm text-white/50 text-center">
          By filling out this form, you agree to the terms and conditions of our
          website.
        </span>
      </form>
    </div>
  );
};

export default RequestDemo;
