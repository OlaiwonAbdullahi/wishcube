"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";

export default function SignUp() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] px-4 py-16">
      <div className="relative w-full max-w-4xl flex flex-col lg:flex-row gap-10 items-center justify-between">
        {/* Left side: marketing copy */}
        <div className="gap-y-6 flex flex-col max-w-md text-center lg:text-left">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary text-zinc-300" />
            <span className="text-xs font-semibold tracking-wide text-neutral-300 uppercase">
              Join the celebration
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-50 tracking-tight">
            Create your account:)
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Save your favorite cards, build magical experiences faster, and keep
            every celebration in one place.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>No credit card required</span>
            </div>
            <span>Set up in under a minute</span>
          </div>
        </div>

        {/* Right side: sign up card */}
        <Card className="w-full max-w-sm border-white/10 bg-[#050505]/40 backdrop-blur-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-neutral-50">
              Create your account
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Welcome! Please fill in the details to get started.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <Button
                size="sm"
                variant="outline"
                type="button"
                className="rounded-full border-white/15 bg-white/5 text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                size="sm"
                variant="outline"
                type="button"
                className="rounded-full border-white/15 bg-white/5 text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>

            <p className="flex items-center gap-3 text-xs text-neutral-500 before:h-px before:flex-1 before:bg-white/10 after:h-px after:flex-1 after:bg-white/10">
              or continue with email
            </p>

            <div className="space-y-2 text-left">
              <Label className="text-xs text-neutral-300">Email address</Label>
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="bg-transparent border-white/15 text-sm placeholder:text-neutral-500"
              />
            </div>

            <div className="space-y-2 text-left">
              <Label className="text-xs text-neutral-300">Password</Label>
              <Input
                type="password"
                required
                placeholder="Create a strong password"
                className="bg-transparent border-white/15 text-sm placeholder:text-neutral-500"
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              Continue
            </Button>
            <Button
              variant="link"
              size="sm"
              asChild
              className="text-xs text-neutral-400 hover:text-neutral-200"
            >
              <Link href="/login">Already have an account? Sign in</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
