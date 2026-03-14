/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Navbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/waitlist`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        toast.success("Successfully joined the waitlist!");
        setSuccessData(result.data.waitlist);
        setName("");
        setEmail("");
      } else {
        toast.error(result.message);
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      toast.error("An error occurred. Please try again.");
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
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-20 flex items-center justify-between w-full max-w-7xl mx-auto px-4"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={45} height={45} />
        <h1 className="text-xl md:text-2xl text-black tracking-tight font-bold">
          WishCube
        </h1>
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-10">
          {["About", "Features", "Pricing"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-black transition-colors hover:text-[#9151FF]"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-[#191A23] cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>

      {/* Mobile Trigger */}
      <div className="flex lg:hidden">
        <Button
          size="sm"
          className="cursor-pointer rounded-md px-3 bg-[#191A23] text-white text-xs"
          onClick={() => setOpen(true)}
        >
          Join Waitlist
        </Button>
      </div>

      {/* Shared Dialog Instance */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
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
                <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
                  <div className="w-full sm:w-1/2 flex-col flex gap-1.5">
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
                  <div className="w-full sm:w-1/2 flex-col flex gap-1.5">
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
    </motion.nav>
  );
};

export default Navbar;
