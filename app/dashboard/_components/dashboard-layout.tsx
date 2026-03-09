"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./sidebar";
import { DashboardHeader } from "./header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider className="bg-sidebar">
      <DashboardSidebar />
      <div className="h-svh overflow-hidden lg:p-4 w-full bg-white z-20">
        <div className="lg:border lg:border-border/60 lg:rounded-lg overflow-hidden flex flex-col h-full w-full bg-background/95 shadow-xs">
          <DashboardHeader />
          <main className="w-full flex-1 overflow-auto bg-gradient-to-br from-background via-background to-muted/30">
            <div className="px-4 sm:px-6 py-8 space-y-8">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
