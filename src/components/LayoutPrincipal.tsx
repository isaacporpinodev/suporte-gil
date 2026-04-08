import { ReactNode } from "react";
import { BarraSuperior } from "./BarraSuperior";
import { BarraLateral } from "./BarraLateral";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface LayoutPrincipalProps {
  children: ReactNode;
}

export function LayoutPrincipal({ children }: LayoutPrincipalProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.08),_transparent_28%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--background)))]">
        <BarraLateral />
        <SidebarInset className="min-w-0 bg-transparent">
          <BarraSuperior />
          <main className="flex-1 overflow-auto px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
