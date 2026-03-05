"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Folder } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b bg-card sticky top-0 z-10 w-full shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Folder className="size-4" />
          <span className="text-sm font-medium">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex -space-x-2">
          <Avatar className="size-7 border-2 border-card">
            <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=a" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
