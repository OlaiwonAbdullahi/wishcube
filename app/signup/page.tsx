"use client";

import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Handle signup logic here
    console.log("Signing up with:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4 w-full">
      <div className="bg-gray-200 border p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center text-gray-900">
            Sign Up
          </h1>
          <span className="text-sm font-bold text-center text-gray-900">
            Create a new account
          </span>
        </div>
        <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 border border-black/25 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 border border-black/25 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="p-3 border border-black/25 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-[#1C1C1C] text-white p-3 rounded hover:bg-gray-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-gray-900 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
