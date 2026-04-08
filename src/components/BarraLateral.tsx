import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Package,
  DollarSign,
  UserCog,
  Wrench,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuPrincipal = [
  { titulo: "Dashboard", url: "/", icone: LayoutDashboard },
  { titulo: "Ordens de Serviço", url: "/ordens", icone: ClipboardList },
  { titulo: "Clientes", url: "/clientes", icone: Users },
];

const menuGestao = [
  { titulo: "Estoque", url: "/estoque", icone: Package },
  { titulo: "Financeiro", url: "/financeiro", icone: DollarSign },
  { titulo: "Usuários", url: "/usuarios", icone: UserCog },
];

export function BarraLateral() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <div
          className={
            collapsed
              ? "flex items-center justify-center px-2 py-5 transition-all duration-200"
              : "flex items-center gap-3 px-4 py-5 transition-all duration-200"
          }
        >
          <div
            className={
              collapsed
                ? "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sidebar-primary to-sidebar-primary/70 shadow-lg shadow-sidebar-primary/20 transition-all duration-200"
                : "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sidebar-primary to-sidebar-primary/70 shadow-lg shadow-sidebar-primary/20 transition-all duration-200"
            }
          >
            <Wrench
              className={collapsed ? "h-4 w-4 text-sidebar-primary-foreground" : "h-4.5 w-4.5 text-sidebar-primary-foreground"}
            />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-[13px] text-sidebar-accent-foreground tracking-tight leading-none">
                TechAssist
              </span>
              <span className="text-[10px] font-medium text-sidebar-muted tracking-widest uppercase mt-0.5">
                Pro
              </span>
            </div>
          )}
        </div>

        {/* Menu Principal */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.15em] text-sidebar-muted px-4">
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuPrincipal.map((item) => (
                <SidebarMenuItem key={item.titulo}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent/60 rounded-lg mx-1 transition-all duration-150"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm"
                    >
                      <item.icone className="h-4 w-4 mr-2.5 shrink-0 opacity-70" />
                      {!collapsed && <span className="text-[13px]">{item.titulo}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Menu Gestão */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.15em] text-sidebar-muted px-4">
            Gestão
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuGestao.map((item) => (
                <SidebarMenuItem key={item.titulo}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-sidebar-accent/60 rounded-lg mx-1 transition-all duration-150"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm"
                    >
                      <item.icone className="h-4 w-4 mr-2.5 shrink-0 opacity-70" />
                      {!collapsed && <span className="text-[13px]">{item.titulo}</span>}
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
