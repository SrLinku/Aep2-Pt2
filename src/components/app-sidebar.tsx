import * as React from "react";
import { ChevronRight } from "lucide-react";

import { VersionSwitcher } from "@/components/version-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";

const data = {
  versions: ["1.0.1"],
  user: {
    name: "SrLinku",
    email: "m@example.com",
    avatar: "img/logo.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Ínicio",
          url: "/",
          isActive: false,
        },
        {
          title: "Conta Corrente",
          url: "/",
          isActive: false,
        },
        {
          title: "Pix e Transferências",
          url: "/pix",
          isActive: false,
        },
        {
          title: "Boletos e Recargas",
          url: "/boleto",
          isActive: false,
        },
        {
          title: "Cartões",
          url: "/cartao",
          isActive: false,
        },
        {
          title: "Conta",
          url: "/",
          isActive: false,
        },
      ],
    },
    {
      title: "Investimentos e Poupança",
      url: "#",
      items: [
        {
          title: "Controle Financeiro (em breve)",
          url: "/",
          isActive: false,
        },
        {
          title: "Bolsa de Valores (em breve)",
          url: "/",
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
