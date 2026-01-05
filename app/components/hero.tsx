import { PartyPopper } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGift, FiStar } from "react-icons/fi";

const Hero = () => {
  return (
    <div>
      <main className="relative z-10  mt-4 flex flex-col items-center text-center max-w-[700px] gap-8">
        <div
          className="flex flex-col items-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            A Universe Where{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Celebration
            </span>{" "}
            Feels{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Personal
            </span>
          </h2>
        </div>

        <div
          className="flex gap-8 flex-wrap justify-center mt-2 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiStar />
            </div>
            <span>Create Cards and Website</span>
          </div>

          <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <PartyPopper size={19} />
            </div>
            <span>Throw Party</span>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiGift />
            </div>
            <span>Send and Receive Gift </span>
          </div>
        </div>

        {/* Social links */}
        <div
          className="flex flex-col items-center gap-4 mt-4 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-sm text-zinc-500">Follow us on X for updates</p>
          <div className="flex gap-4">
            <Link
              href="https://x.com/wishcubeapp"
              className="flex items-center gap-2"
            >
              <div
                className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-zinc-400 text-xl transition-all duration-300 hover:bg-white/15 hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </div>
              <span className="text-zinc-400">@wishcubeapp</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
