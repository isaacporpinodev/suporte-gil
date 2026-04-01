import { ReactNode } from "react";
import { BarraSuperior } from "./BarraSuperior";
import { BarraLateral } from "./BarraLateral";
import { SidebarProvider } from "@/components/ui/sidebar";

interface LayoutPrincipalProps {
  children: ReactNode;
}

export function LayoutPrincipal({ children }: LayoutPrincipalProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <BarraLateral />
        <div className="flex-1 flex flex-col min-w-0">
          <BarraSuperior />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
