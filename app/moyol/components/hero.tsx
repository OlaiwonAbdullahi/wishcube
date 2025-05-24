import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white  leading-tight">
            About <span className="text-[#1E3A8A]">Us</span>
          </h1>
          <div className=" z-20 text-gray-300">Home | About</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
