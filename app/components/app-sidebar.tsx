import { SquarePen, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button.tsx";

// Menu items.
const items = [
    {
        title: "New Chat",
        url: "#new",
        icon: SquarePen,
    },
    {
        title: "Search Chats",
        url: "#search",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className={"flex flex-row size-auto align-center"}>
                    <Button className={"w-fit h-fit p-0 rounded-full m-0"} variant={"ghost"}>
                        <img src={"PokemonWarAndPeaceIcon.png"} className={"h-9 w-9"}
                             alt={"Pokemon War and Peace Logo"}/>
                    </Button>
                    <h1 className={"w-fit h-auto p-0 m-1 ml-3 font-medium text-lg"}>PTU AI</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
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
                    <SidebarGroupLabel>Chats</SidebarGroupLabel>
                    <SidebarGroupContent>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}