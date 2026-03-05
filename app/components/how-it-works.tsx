"use client";

import React, { memo } from "react";
import { Wand2, Sparkles, Share2, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Wand2 className="w-6 h-6" strokeWidth={1} />,
      title: "Create with AI",
      description:
        "Tell our AI about the occasion and recipient. It crafts a personalized greeting card or website with the perfect message, music, and animations.",
      gradient: "from-zinc-900/30 via-zinc-800/20 to-black/30",
      iconColor: "text-white",
    },
    {
      number: "02",
      icon: <Sparkles className="w-6 h-6" strokeWidth={1} />,
      title: "Customize & Enhance",
      description:
        "Add your personal touch—attach gift cards, set up virtual party rooms, or create event invitations with RSVP tracking.",
      gradient: "from-zinc-800/30 via-zinc-700/20 to-zinc-900/30",
      iconColor: "text-zinc-200",
    },
    {
      number: "03",
      icon: <Share2 className="w-6 h-6" strokeWidth={1} />,
      title: "Share Instantly",
      description:
        "Share your creation via Instagram, WhatsApp, email, or a private link. No downloads needed—just click and celebrate.",
      gradient: "from-black/30 via-zinc-900/20 to-zinc-800/30",
      iconColor: "text-zinc-300",
    },
    {
      number: "04",
      icon: <Heart className="w-6 h-6" strokeWidth={1} />,
      title: "Celebrate Together",
      description:
        "Watch as recipients enjoy your creation, join virtual parties, receive gifts, and create lasting memories together.",
      gradient: "from-zinc-900/30 via-zinc-800/20 to-black/30",
      iconColor: "text-white",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-24 px-6"
    >
      {/* Background Effects - Enhanced Glassmorphism */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/30 rounded-full blur-[120px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-[120px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px] opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-y-10">
        {/* Section Header */}
        <div
          className="text-center  animate-fade-in flex flex-col justify-center space-y-3"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-flex items-center justify-center mb-4 mx-auto">
            <span className="text-white/90 font-bold tracking-[0.25em] uppercase text-sm backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              Simple Process
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              It Works
            </span>
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type StepCardProps = {
  step: {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    iconColor: string;
  };
  index: number;
};

const StepCard = memo(({ step, index }: StepCardProps) => {
  return (
    <div
      className={`relative group animate-fade-in`}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {/* Number Badge with Glassmorphism */}
      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-zinc-800/90 to-black/90 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-black/50 z-10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
        {step.number}
      </div>

      {/* Card with Luxurious Glassmorphism */}
      <div
        className={`relative p-8 pt-12 rounded-[32px] backdrop-blur-xl bg-gradient-to-br ${step.gradient} border border-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:shadow-white/5 h-full overflow-hidden`}
      >
        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 rounded-[32px] pointer-events-none" />

        {/* Subtle Inner Glow */}
        <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Top Border Highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-full backdrop-blur-md bg-white/[0.08] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.12] group-hover:border-white/20 group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-500 ${step.iconColor} group-hover:scale-110`}
          >
            {step.icon}
          </div>

          {/* Content */}
          <h4 className="text-xl font-bold text-white mb-4 leading-tight tracking-tight">
            {step.title}
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Hover Effect Glow - Outer */}
        <div
          className={`absolute -inset-1 rounded-[33px] bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-20 blur-2xl`}
        />

        {/* Reflective Shine Effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </div>
  );
});

StepCard.displayName = "StepCard";

export default HowItWorks;
