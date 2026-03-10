"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#F3F3F3] text-black rounded-3xl p-8 md:p-12 md:px-20 min-h-[260px] w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5 text-center md:text-left items-center md:items-start">
        <h2 className="text-xl md:text-2xl font-bold">
          Ready to Create Magic?
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed w-full sm:w-[80%]">
          Join thousands of people already celebrating with WishCube. Create
          your first AI-powered greeting card, send a digital gift, or host a
          virtual party — all for free, no credit card required.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="bg-[#191A23] text-white px-6 py-2.5 rounded-md text-sm font-medium">
            Get Started
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex w-1/2 justify-end items-center"
      >
        <Image src="/cta.svg" alt="cta" width={300} height={300} />
      </motion.div>
    </motion.div>
  );
};

export default Cta;
