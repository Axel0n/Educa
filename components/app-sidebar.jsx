import { AlertCircleIcon, AppWindowIcon, BadgeAlertIcon, Calendar, Home, Inbox, Search, Settings, Trophy, UserIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "App",
    url: "/app",
    icon: AppWindowIcon,
  },
  {
    title: "Rewards",
    url: "/rewards",
    icon: Trophy,
  },
  {
    title: "Sanctions",
    url: "/sanctions",
    icon: AlertCircleIcon,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: UserIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary text-3xl fredoka font-semibol ">educa</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
