"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheckBigIcon } from "lucide-react";
import { toast } from "sonner";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as const;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [successData, setSuccessData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        toast.success("Successfully joined the waitlist!");
        setSuccessData(result.data.waitlist);
        setName("");
        setEmail("");
      } else {
        toast.error(
          "An error occurred Prolly Internet. Please check your internet connection and try again.",
        );
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.log("Error joining waitlist:", error);
      toast.error(
        "An error occurred Prolly Internet. Please check your internet connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSuccessData(null);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col md:flex-row justify-between items-center min-h-[70vh] md:min-h-[90vh] gap-8 md:gap-12 mx-auto px-4 sm:px-8 md:px-12 lg:px-[100px] pt-8 md:pt-12"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 text-center md:text-left items-center md:items-start">
        <motion.h1
          variants={itemVariants}
          className="font-medium text-[40px] sm:text-[50px] md:text-[60px] leading-tight"
        >
          Create Magical <br />
          Moments <br className="hidden sm:block" /> That Last Forever
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="w-full sm:w-[80%] text-gray-600 leading-relaxed text-sm md:text-base"
        >
          AI-powered greeting cards, websites, virtual party rooms, and seamless
          gifting all in one platform. Make every celebration unforgettable.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 md:gap-4 flex-wrap justify-center md:justify-start"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Dialog open={open} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-[#191A23] cursor-pointer ">
                  Join Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] font-space">
                <DialogHeader>
                  <DialogTitle
                    className={`text-2xl font-bold ${
                      successData ? "text-center" : "text-start"
                    }`}
                  >
                    {successData ? "Success!" : "Join Waitlist"}
                  </DialogTitle>
                  <DialogDescription
                    className={`${successData ? "text-center" : "text-start"} `}
                  >
                    {successData
                      ? "You've successfully joined the waitlist."
                      : "Join our waitlist to get exclusive access to new features and updates."}
                  </DialogDescription>
                </DialogHeader>

                {successData ? (
                  <div className="flex flex-col items-center gap-6 py-6 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CircleCheckBigIcon className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        Welcome, {successData.name}!
                      </h3>
                      <p className="text-gray-500">
                        You&apos;ve successfully joined the waitlist with{" "}
                        <span className="font-medium text-black">
                          {successData.email}
                        </span>
                        . We&apos;ll keep you updated on our progress!
                      </p>
                    </div>
                    <Button
                      onClick={() => handleOpenChange(false)}
                      className="w-full bg-[#191A23] cursor-pointer"
                    >
                      Got it!
                    </Button>
                  </div>
                ) : (
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                      <div className="flex gap-3 items-center w-full">
                        <div className=" w-1/2 flex-col flex gap-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Abdullahi"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div className=" w-1/2 flex-col flex gap-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abdul@wishcube.com"
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full cursor-pointer bg-[#191A23]"
                        disabled={loading}
                      >
                        {loading ? "Joining..." : "Join"}
                      </Button>
                    </div>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="cursor-pointer rounded-md px-4 w-fit bg-transparent border border-black text-black hover:text-white"
              data-cal-namespace="demo"
              data-cal-link="usewishcube/demo"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
            >
              Request Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className="flex md:w-1/2 justify-end items-center"
      >
        <Image
          src={"/hero.svg"}
          alt="Wishcube Hero Image"
          height={200}
          width={200}
          className="w-full max-w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
