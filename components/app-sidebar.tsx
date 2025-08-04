"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Home,
  Settings2,
  SquareTerminal,
  Sparkles,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { User } from "@supabase/supabase-js"
import { PricingDialog } from "./pricing-dialog"
import { ThemeSwitcher } from "./ui/theme-switcher"

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

export function AppSidebar({
  user,
  isPremium,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: User | null; isPremium: boolean }) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-2 pt-4 items-center">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="text-md group-data-[collapsible=icon]:hidden">
            Asme Inc.
          </span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-2">
          {!isPremium && (
            <PricingDialog>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Sparkles className="size-4" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Upgrade to Pro
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </PricingDialog>
          )}
          <div className="border rounded-lg">
            <ThemeSwitcher />
          </div>
          <NavUser
            user={{
              name: user?.user_metadata?.full_name || user?.email || "User",
              email: user?.email || "",
              avatar: user?.user_metadata?.avatar_url,
            }}
            isPremium={isPremium}
          />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
