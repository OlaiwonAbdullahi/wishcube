"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  FileTextIcon,
  LayoutDashboardIcon,
  Video,
  Gift,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    iconColor: "text-violet-500",
    href: "/dashboard",
  },
  {
    title: "Cards",
    icon: FileTextIcon,
    iconColor: "text-blue-500",
    href: "/dashboard/cards",
  },
  {
    title: "Websites",
    icon: LayoutDashboardIcon,
    iconColor: "text-amber-500",
    href: "/dashboard/websites",
  },
  {
    title: "Gifts",
    icon: Gift,
    iconColor: "text-green-500",
    href: "/dashboard/gifts",
  },
  {
    title: "Party Rooms",
    icon: Video,
    iconColor: "text-cyan-500",
    href: "/dashboard/party-rooms",
  },
  {
    title: "Settings",
    icon: Settings,
    iconColor: "text-muted-foreground",
    href: "/dashboard/settings",
  },
];

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas" className="!border-r-0" {...props}>
      <SidebarHeader className="px-3 py-4 border-b border-neutral-100">
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-sidebar-foreground truncate">
            WishCube
          </span>

          <Avatar className="size-8 border-2 border-sidebar shrink-0">
            <AvatarImage src="/ln.png" />
            <AvatarFallback>LN</AvatarFallback>
          </Avatar>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="h-9"
                    >
                      <Link href={item.href}>
                        <item.icon
                          className={cn("size-4 shrink-0", item.iconColor)}
                        />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
