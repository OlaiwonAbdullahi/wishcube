import { PartyPopper, Sparkles, ArrowRight } from "lucide-react";
import React from "react";
import { FiGift, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <main className="relative z-10 mt-4 flex flex-col items-center justify-center text-center max-w-4xl gap-6 px-6">
        <div
          className="flex flex-col items-center gap-6 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary text-zinc-300" />
            <span className="text-sm font-semibold text-zinc-300">
              AI-Powered Celebrations
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-16 tracking-tight">
            Create{" "}
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200 bg-clip-text text-transparent">
              Magical
            </span>{" "}
            Moments That{" "}
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200 bg-clip-text text-transparent">
              Last Forever
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl leading-tight">
            AI-powered greeting cards, animated websites, virtual party rooms,
            and seamless gifting all in one platform. Make every celebration
            unforgettable.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 border border-primary/30 bg-gradient-to-br from-zinc-400 to-zinc-500 text-white hover:scale-105 transition-transform hover:shadow-primary/40"
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5 text-white" />
          </Button>
          <Link href="#features">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-bold border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:scale-105 transition-transform"
            >
              Learn More
            </Button>
          </Link>
        </div>

        {/* Feature Pills */}
        <div
          className="flex gap-6 flex-wrap justify-center mt-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiStar className="w-4 h-4" />
            </div>
            <span>Greeting Cards & Websites</span>
          </div>

          <div className="flex items-center gap-2.5 text-zinc-400 text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <PartyPopper size={16} />
            </div>
            <span>Virtual Parties</span>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiGift className="w-4 h-4" />
            </div>
            <span>Digital Gifts</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
