import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-16 px-6">
      {/* Background Effects - Enhanced Glassmorphism */}
      <div
        aria-hidden
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-black/30 rounded-full blur-[100px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-[120px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content with Glassmorphism Card */}
          <div
            className="w-full lg:w-1/2 space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative  p-8 transition-all duration-700 overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <header>
                  <div className="inline-flex items-center justify-center mb-4">
                    <span className="text-white/90 font-bold tracking-[0.25em] uppercase text-sm backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg">
                      The WishCube Story
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                    Making Every{" "}
                    <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                      Wish Count
                    </span>
                  </h3>
                </header>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                  WishCube was born from a simple idea: digital celebrations
                  should feel as warm and meaningful as physical ones.
                  We&apos;ve built a platform where technology strengthens
                  connection—not replaces it.
                </p>

                <div className="space-y-6">
                  {[
                    "Modern digital experiences for traditional moments.",
                    "Safe and secure gifting environment.",
                    "Community-driven platform for global connection.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <span className="w-10 h-10 rounded-full backdrop-blur-md bg-white/[0.08] border border-white/10 flex items-center justify-center text-white group-hover:bg-white/[0.12] group-hover:border-white/20 group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-110">
                        <Sparkles size={16} />
                      </span>
                      <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Glow */}
            </div>
          </div>
          <div className="">
            <Image
              src="/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer Values with Glassmorphism */}
        <div
          className="mt-24 py-8 border-y border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-6 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            "Global Gifting",
            "Instant Delivery",
            "Secure Payments",
            "24/7 Support",
          ].map((value, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group cursor-default backdrop-blur-md bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
              <span className="text-sm font-semibold tracking-wider uppercase text-zinc-300 group-hover:text-white transition-colors">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
