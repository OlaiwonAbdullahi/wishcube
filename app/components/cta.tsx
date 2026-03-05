"use client";

import React from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-24 px-6"
    >
      {/* Background Effects */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10"
      />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="flex flex-col items-center gap-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Ready to Create{" "}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Magic?
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Join thousands of users creating unforgettable celebrations. Start
            free, no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/30 border border-primary/30 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:scale-105 transition-transform hover:shadow-primary/50"
            >
              Start Creating Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-bold border-white/20 bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-transform"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-semibold">No Credit Card</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-semibold">Free Forever Plan</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-semibold">Setup in 2 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

