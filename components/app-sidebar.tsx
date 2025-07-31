"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Home,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Main",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Playground",
      url: "/dashboard/playground",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: any }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-2 pt-4 items-center">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="text-md group-data-[collapsible=icon]:hidden">
            Acme Inc.
          </span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
