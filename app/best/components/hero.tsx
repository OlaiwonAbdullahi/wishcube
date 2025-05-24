import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-white">
      <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          <span className="text-[#F34DBD]">About</span> Us
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
          Best Wishes is designed to help you celebrate life’s special moments
          effortlessly. From personalized cards to thoughtful gifts, we make
          sending love simple, fast, and unforgettable. Whether your message is
          going across the street or across the globe, it always arrives on
          time. Our beautifully crafted virtual cards, paired with innovative
          features, make it easy to share joy, celebrate milestones, and
          surprise your loved ones with heartfelt moments.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/about.svg"
          alt="Illustration of celebration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
