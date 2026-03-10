"use client";

import Heading from "@/components/uis/heading";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col md:gap-15 gap-8 py-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          title="Our Story"
          description="How a simple idea about human connection became a platform that makes every celebration unforgettable."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#191A23] text-white rounded-3xl p-8 md:p-12 min-h-[200px] w-full flex items-center justify-center"
      >
        <p className="text-center text-base md:text-lg leading-relaxed w-full md:w-[65%]">
          WishCube was born from a simple idea: digital celebrations should feel
          as warm and meaningful as physical ones. We&apos;ve built a platform
          where technology strengthens connection—not replaces it.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
