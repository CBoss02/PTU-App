import { data } from 'react-router'
import type { Route } from './+types/home'
import { ThemeProvider } from '@/components/theme-provider'
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

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
              <div className={"flex flex-row w-full h-full"}>
                  {/*Header Row*/}
                  <SidebarTrigger size={"lg"} className={"my-4 mx-2"}/>
                  
                  {/*Body Row - Right Margin is for the Sign In/Icon Button */}
                  <div id="body-content" className={"flex flex-col w-full p-4 h-full mr-9"}>
                      <div id={"message-window"} className={"flex w-3/4 h-auto content-center p-4 self-center"}>
                          This is where the messages could go
                      </div>
                      <Textarea placeholder={"Ask Anything"} 
                                className={"flex w-3/4 h-auto content-center p-4 self-center"} >
                          
                      </Textarea>
                  </div>
              </div>
          </SidebarProvider>
      </ThemeProvider>
  )
}
