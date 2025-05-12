import React from "react";

const Navbar = ({
  onLogin,
  onSignup,
}: {
  onLogin: () => void;
  onSignup: () => void;
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black text-gray-600 tracking-tight">
                404 Chat
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onLogin}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
            >
              Login
            </button>
            <button
              onClick={onSignup}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 rounded-md shadow-md transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
