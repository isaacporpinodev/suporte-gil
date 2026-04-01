import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BarraSuperior() {
  return (
    <header className="h-14 flex items-center gap-3 border-b bg-card px-4 shrink-0">
      <SidebarTrigger className="text-muted-foreground" />
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar OS, cliente, aparelho..."
            className="pl-9 h-9 bg-secondary border-0"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
          AD
        </div>
      </div>
    </header>
  );
}
