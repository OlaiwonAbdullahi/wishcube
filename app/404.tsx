import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-lg">Page not found</p>
      <Link href="/" className="text-gray-500">
        Go back to home
      </Link>
      <div className="text-sm text-gray-500">
        Our Development Team is working on it.
      </div>
    </div>
  );
};

export default NotFound;
