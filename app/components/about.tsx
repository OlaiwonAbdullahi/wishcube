import Heading from "@/components/uis/heading";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:gap-15 gap-8 py-15">
      <Heading
        title="Our Story"
        description="How a simple idea about human connection became a platform that makes every celebration unforgettable."
      />
      <div className="bg-[#191A23] text-white rounded-3xl p-8 md:p-12 min-h-[200px] w-full flex items-center justify-center">
        <p className="text-center text-base md:text-lg leading-relaxed w-full md:w-[65%]">
          WishCube was born from a simple idea: digital celebrations should feel
          as warm and meaningful as physical ones. We&apos;ve built a platform
          where technology strengthens connection—not replaces it.
        </p>
      </div>
    </div>
  );
};

export default About;
