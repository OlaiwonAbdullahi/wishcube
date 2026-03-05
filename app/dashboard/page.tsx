import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./_components/sidebar";
import { DashboardHeader } from "./_components/header";
import Link from "next/link";
import {
  Video,
  ArrowUpRight,
  Plus,
  LayoutDashboardIcon,
  FileTextIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type OverviewFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  href: string;
};

export default function DashboardPage() {
  return (
    <SidebarProvider className="bg-sidebar">
      <DashboardSidebar />
      <div className="h-svh overflow-hidden lg:p-2 w-full bg-white z-20">
        <div className="lg:border lg:rounded-md overflow-hidden flex flex-col h-full w-full bg-background">
          <DashboardHeader />
          <main className="w-full flex-1 overflow-auto bg-background">
            <div className="px-4 sm:px-6 py-6 space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      Overview
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Your creation hub for cards, parties, invites, and gifts
                    </span>
                  </div>
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Dashboard Overview
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Start something new or pick up from your recent activity.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button asChild className="rounded-full">
                    <Link href="#" className="gap-2">
                      <Plus className="size-4" />
                      Create
                    </Link>
                  </Button>
                </div>
              </div>

              {/* KPI Row */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <KpiCard title="Cards created" value="0" hint="Drafts + sent" />
                <KpiCard
                  title="Upcoming events"
                  value="0"
                  hint="RSVP enabled"
                />
                <KpiCard
                  title="Active party rooms"
                  value="0"
                  hint="Last 7 days"
                />
                <KpiCard
                  title="Gifts attached"
                  value="0"
                  hint="Cards with value"
                />
              </div>

              <Card className=" shadow-none">
                <CardHeader className="pb-0">
                  <CardTitle className="text-base">Quick start</CardTitle>
                  <CardDescription>
                    Jump straight into the parts of WishCube you’ll use most.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
                  <QuickAction
                    title="Generate a greeting Card"
                    description="AI-assisted message + shareable Card"
                    icon={<FileTextIcon className="size-4" />}
                    href="#"
                    accent="text-indigo-500"
                  />
                  <QuickAction
                    title="Generate an greeting Website"
                    description="AI-assisted message + shareable Website"
                    icon={<LayoutDashboardIcon className="size-4" />}
                    href="#"
                    accent="text-violet-500"
                  />
                  <QuickAction
                    title="Join a Virtual Party Room"
                    description="Live video calls, interactive games, group chat, shared music, and contextual decorations"
                    icon={<Video className="size-4" />}
                    href="#"
                    accent="text-orange-500"
                  />
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function KpiCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <Card className=" shadow-none">
      <CardHeader className="pb-0">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl">{value}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  );
}

function QuickAction({
  title,
  description,
  icon,
  href,
  accent,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-xl border bg-card px-4 py-3 transition-colors hover:bg-accent/30"
    >
      <div
        className={cn(
          "mt-0.5 flex size-8  items-center justify-center rounded-full bg-muted text-muted-foreground",
          accent,
        )}
      >
        {icon}
      </div>
      <div className="min-w-0 ">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold leading-none truncate">{title}</p>
          <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="mt-1  text-xs text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
