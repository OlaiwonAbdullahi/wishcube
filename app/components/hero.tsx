"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

const Hero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#9151FF" },
          dark: { "cal-brand": "#9151FF" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center min-h-[70vh] md:min-h-[90vh] gap-8 md:gap-12 mx-auto px-4 sm:px-8 md:px-12 lg:px-[100px] pt-8 md:pt-12"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 text-center md:text-left items-center md:items-start">
        <h1 className="font-medium text-[40px] sm:text-[50px] md:text-[60px] leading-tight">
          Create Magical <br />
          Moments <br className="hidden sm:block" /> That Last Forever
        </h1>
        <p className="w-full sm:w-[80%] text-gray-600 leading-relaxed text-sm md:text-base">
          AI-powered greeting cards, websites, virtual party rooms, and seamless
          gifting all in one platform. Make every celebration unforgettable.
        </p>
        <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
          <Button size="lg" className="bg-[#191A23] cursor-not-allowed">
            Join Waitlist
          </Button>
          <Button
            size="lg"
            className="cursor-pointer rounded-md px-4 w-fit bg-transparent border border-black text-black hover:text-white"
            data-cal-namespace="demo"
            data-cal-link="usewishcube/demo"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
          >
            Request Demo
          </Button>
        </div>
      </div>

      <div className="flex md:w-1/2 justify-end items-center">
        <Image
          src={"/hero.svg"}
          alt="Wishcube Hero Image"
          height={200}
          width={200}
          className="w-full max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
