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

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] px-4 py-16">
      <div className="relative w-full max-w-4xl flex flex-col lg:flex-row gap-10 items-center justify-between">
        {/* Left side: marketing copy */}
        <div className="flex flex-col gap-y-6 max-w-md text-center lg:text-left">
          <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-zinc-300" />
            <span className="text-xs font-semibold tracking-wide text-neutral-300 uppercase">
              Welcome back
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-50 tracking-tight">
            Log in:)
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Pick up where you left off, manage your celebrations, and keep every
            magical moment in sync.
          </p>
        </div>

        {/* Right side: login card */}
        <Card className="w-full max-w-sm border-white/10 bg-[#050505]/40 backdrop-blur-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-neutral-50">
              Welcome back
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Enter your details to access your account.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
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
                placeholder="Your password"
                className="bg-transparent border-white/15 text-sm placeholder:text-neutral-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-3 w-3 rounded border-white/20 bg-transparent"
                />
                <Label htmlFor="remember" className="text-xs text-neutral-300">
                  Remember me
                </Label>
              </div>
              <Link
                href="#"
                className="text-xs text-neutral-300 hover:text-neutral-100 underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              Log in
            </Button>
            <Button
              variant="link"
              size="sm"
              asChild
              className="text-xs text-neutral-400 hover:text-neutral-200"
            >
              <Link href="/signup">Don&apos;t have an account? Sign up</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
