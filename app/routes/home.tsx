import { data } from 'react-router'
import type { Route } from './+types/home'
import { ThemeProvider } from '@/components/theme-provider'
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";

export function meta(_: Route.MetaArgs) {
  return [{ title: 'PTU AI' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export const loader = async (_: Route.LoaderArgs) => {
  return data({})
}

export default function Home(_: Route.ComponentProps) {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <SidebarProvider>
              <AppSidebar/>
              <main>
                  <SidebarTrigger size={"lg"} className={"m-3"}/>
              </main>
          </SidebarProvider>
      </ThemeProvider>
  )
}
