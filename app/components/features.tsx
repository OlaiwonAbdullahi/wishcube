"use client";

import React, { memo } from "react";
import { Sparkles, Wand2, Gift, Video, Calendar, Share2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Wand2 className="w-6 h-6" strokeWidth={1} />,
      title: "Greeting Cards & Website Generation",
      description:
        "Create personalized, heartfelt messages without the writer's block. Our AI helps you craft authentic greetings tailored to the recipient and occasion, complete with voice message narration and curated background music.",
      highlights: [
        "personalized messages",
        "Voice message ",
        "Curated background music",
        "Tailored to recipient & occasion",
      ],
      gradient: "from-zinc-900/30 via-zinc-800/20 to-black/30",
      iconColor: "text-white",
      borderColor: "border-white/10",
    },
    {
      id: 2,
      icon: <Sparkles className="w-6 h-6" strokeWidth={1} />,
      title: "Stunning & Animated Cards and Website",
      description:
        "Move beyond static digital cards. Send interactive, animated greeting websites featuring smooth transitions, pop-up surprises, confetti celebrations, and immersive visual effects that make your greeting impossible to forget.",
      highlights: [
        "Smooth transitions ",
        "Pop-up surprises",
        "Confetti celebrations",
        "Immersive visual effects",
      ],
      gradient: "from-zinc-800/30 via-zinc-700/20 to-zinc-900/30",
      iconColor: "text-zinc-200",
      borderColor: "border-white/10",
    },
    {
      id: 3,
      icon: <Gift className="w-6 h-6" strokeWidth={1} />,
      title: "Integrated Digital Gifts & Vouchers",
      description:
        "Turn wishes into action. Attach gift cards, cryptocurrency tips, or shopping vouchers directly to your greeting card. Recipients receive both sentiment and value in a single, seamless experience.",
      highlights: [
        "Gift cards & vouchers",
        "Cryptocurrency tips",
        "Shopping vouchers",
        "Seamless integration",
      ],
      gradient: "from-black/30 via-zinc-900/20 to-zinc-800/30",
      iconColor: "text-zinc-300",
      borderColor: "border-white/10",
    },
    {
      id: 4,
      icon: <Video className="w-6 h-6" strokeWidth={1} />,
      title: "Virtual Party Rooms",
      description:
        "Host real-time celebrations without requiring anyone to download anything. Gather friends and family in themed party spaces with live video calls, interactive games, group chat, shared music, and contextual decorations—all accessible through a simple link.",
      highlights: [
        "Live video calls",
        "Interactive games",
        "Group chat",
        "Shared music & decorations",
        "No downloads required",
      ],
      gradient: "from-zinc-900/20 to-black/20",
      iconColor: "text-white",
      borderColor: "border-zinc-600/30",
    },
    {
      id: 5,
      icon: <Calendar className="w-6 h-6" strokeWidth={1} />,
      title: "Smart Event Invitations with RSVP & Reminders",
      description:
        "Plan group celebrations with built-in coordination. Send beautiful digital invitations, automatically track guest responses, and trigger intelligent reminders. Integration with Google Calendar and similar platforms keeps everyone in sync.",
      highlights: [
        "Digital invitations",
        "Automatic RSVP tracking",
        "Smart reminders",
        "Google Calendar integration",
      ],
      gradient: "from-zinc-800/20 to-zinc-900/20",
      iconColor: "text-zinc-200",
      borderColor: "border-zinc-700/30",
    },
    {
      id: 6,
      icon: <Share2 className="w-6 h-6" strokeWidth={1} />,
      title: "Multi-Channel Sharing",
      description:
        "Maximize reach and convenience. Share your greeting directly on Instagram, WhatsApp, or email—or keep it private with a personal link. One creation, multiple distribution options.",
      highlights: [
        "Instagram sharing",
        "WhatsApp integration",
        "Email distribution",
        "Private links",
      ],
      gradient: "from-black/20 to-zinc-800/20",
      iconColor: "text-zinc-300",
      borderColor: "border-zinc-600/30",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden py-24 px-6"
    >
      {/* Background Effects - Enhanced Glassmorphism */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-black/30 rounded-full blur-[150px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-zinc-900/30 rounded-full blur-[150px] opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[200px] opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-y-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 animate-fade-in flex flex-col justify-center space-y-3 relative"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-white/90 font-bold tracking-[0.25em] uppercase text-sm backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              Core Features
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Celebrate
            </span>
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  feature: {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    highlights: string[];
    gradient: string;
    iconColor: string;
    borderColor: string;
  };
  index: number;
};

const FeatureCard = memo(({ feature, index }: FeatureCardProps) => {
  return (
    <div
      className={`group flex flex-col justify-between relative p-8 rounded-[32px] backdrop-blur-xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} hover:border-white/20 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:shadow-white/5 animate-fade-in overflow-hidden`}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {/* Glassmorphism Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 rounded-[32px] pointer-events-none" />

      {/* Subtle Inner Glow */}
      <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <div className="flex flex-col gap-3">
          <div
            className={`w-14 h-14 rounded-full backdrop-blur-md bg-white/[0.08] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.12] group-hover:border-white/20 group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-500 ${feature.iconColor} group-hover:scale-110`}
          >
            {feature.icon}
          </div>

          <h4 className="text-2xl font-bold text-white mb-4 leading-tight tracking-tight">
            {feature.title}
          </h4>
        </div>

        <div className="">
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="relative z-10 space-y-3 flex flex-wrap gap-2 mt-auto">
        {feature.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-zinc-200 backdrop-blur-md text-xs leading-relaxed bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-full font-medium hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
              {highlight}
            </span>
          </div>
        ))}
      </div>

      {/* Hover Effect Glow - Outer */}
      <div
        className={`absolute -inset-1 rounded-[33px] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-20 blur-2xl`}
      />

      {/* Reflective Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default Features;
