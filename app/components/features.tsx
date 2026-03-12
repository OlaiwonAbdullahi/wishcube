"use client";

import CardsTitle from "@/components/uis/cards-title";
import Heading from "@/components/uis/heading";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  } as const;

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-8 md:gap-15"
      >
        <Heading
          title="Core Features"
          description="Everything you need to create, share, and celebrate; cards, virtual parties, digital gifts, and smart invitations, all in one place."
        />

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="w-full md:w-1/2 flex justify-between bg-[#F3F3F3] rounded-3xl p-8 md:p-10 border border-[#191A23] border-b-4 min-h-[220px] md:min-h-[290px]"
          >
            <div className="flex flex-col justify-between gap-6">
              <CardsTitle
                firstText="Create"
                secondText="Cards & Websites"
                bg="#9151FF"
                text="#000"
              />
              <div className="text-sm flex items-center gap-2">
                <span className="bg-[#191A23] p-1 rounded-full">
                  <ArrowUpRight color="#9151FF" />
                </span>
                Learn more
              </div>
            </div>
            <div className="hidden sm:flex items-center">
              <Image
                src={"/create.svg"}
                alt="Feature Image"
                width={200}
                height={200}
                className="w-[140px] md:w-[200px] h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="w-full md:w-1/2 flex justify-between bg-[#9151FF] rounded-3xl p-8 md:p-10 border border-[#191A23] border-b-4 min-h-[220px] md:min-h-[290px]"
          >
            <div className="flex flex-col justify-between gap-6">
              <CardsTitle
                firstText="Share"
                secondText="Gift With Loved Ones"
                bg="#fff"
                text="#191A23"
              />
              <div className="text-sm flex items-center gap-2">
                <span className="bg-[#191A23] p-1 rounded-full">
                  <ArrowUpRight color="#9151FF" />
                </span>
                Learn more
              </div>
            </div>
            <div className="hidden sm:flex items-center">
              <Image
                src={"/integrate.svg"}
                alt="Feature Image"
                width={200}
                height={200}
                className="w-[140px] md:w-[200px] h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2 — reversed on desktop */}
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="w-full md:w-1/2 flex justify-between bg-[#F3F3F3] rounded-3xl p-8 md:p-10 border border-[#191A23] border-b-4 min-h-[220px] md:min-h-[290px]"
          >
            <div className="flex flex-col justify-between gap-6">
              <CardsTitle
                firstText="Smart"
                secondText="Event Invitations"
                bg="#9151FF"
                text="#000"
              />
              <div className="text-sm flex items-center gap-2">
                <span className="bg-[#191A23] p-1 rounded-full">
                  <ArrowUpRight color="#9151FF" />
                </span>
                Learn more
              </div>
            </div>
            <div className="hidden sm:flex items-center">
              <Image
                src={"/smart.svg"}
                alt="Feature Image"
                width={200}
                height={200}
                className="w-[140px] md:w-[200px] h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="w-full md:w-1/2 flex justify-between bg-[#191A23] rounded-3xl p-8 md:p-10 border border-[#191A23] border-b-4 min-h-[220px] md:min-h-[290px]"
          >
            <div className="flex flex-col justify-between gap-6">
              <CardsTitle
                firstText="Host"
                secondText="Virtual Parties"
                bg="#fff"
                text="#191A23"
              />
              <div className="text-sm flex items-center gap-2 text-white">
                <span className="bg-[#fff] p-1 rounded-full">
                  <ArrowUpRight color="#191A23" />
                </span>
                Learn more
              </div>
            </div>
            <div className="hidden sm:flex items-center">
              <Image
                src={"/host.svg"}
                alt="Feature Image"
                width={200}
                height={200}
                className="w-[140px] md:w-[200px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
