import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg shadow-md my-8  md:w-8/12 w-10/12 mx-auto">
      <h2 className="text-2xl font-bold">Feel The Vibe?</h2>
      <span className="text-gray-600 mt-2 text-center">
        Join us and experience the best of our services. We are here to help you
        achieve your goals and make your life easier. Don&apos;t miss out on the
        opportunity to be part of our community.
      </span>
      <div className="flex justify-center mt-4 gap-5">
        <Link href={"/signup"}>
          <button className="border-[#1c1c1c] border text-[#1c1c1c] px-4 py-2 rounded-md hover:bg-[#1c1c1c] transition duration-300">
            Join our Community
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="bg-[#1c1c1c] text-white px-4 py-2 rounded-md hover:bg-[#1c1c1c] transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
