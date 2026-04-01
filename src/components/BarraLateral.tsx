import {
  LayoutDashboard,
  Users,
  Smartphone,
  ClipboardList,
  Package,
  DollarSign,
  UserCog,
  BarChart3,
  Wrench,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const itensMenu = [
  { titulo: "Dashboard", url: "/", icone: LayoutDashboard },
  { titulo: "Ordens de Serviço", url: "/ordens", icone: ClipboardList },
  { titulo: "Clientes", url: "/clientes", icone: Users },
  { titulo: "Aparelhos", url: "/aparelhos", icone: Smartphone },
  { titulo: "Estoque", url: "/estoque", icone: Package },
  { titulo: "Financeiro", url: "/financeiro", icone: DollarSign },
  { titulo: "Usuários", url: "/usuarios", icone: UserCog },
  { titulo: "Relatórios", url: "/relatorios", icone: BarChart3 },
];

export function BarraLateral() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-4 py-5 flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center shrink-0">
            <Wrench className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-bold text-sm text-sidebar-accent-foreground tracking-tight">
              TechAssist Pro
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {itensMenu.map((item) => (
                <SidebarMenuItem key={item.titulo}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icone className="h-4 w-4 mr-2 shrink-0" />
                      {!collapsed && <span>{item.titulo}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
