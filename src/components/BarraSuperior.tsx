import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BarraSuperior() {
  return (
    <header className="h-[56px] flex items-center gap-4 border-b border-border/60 bg-card/80 backdrop-blur-sm px-5 shrink-0 sticky top-0 z-30">
      <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />

      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
          <Input
            placeholder="Buscar OS, cliente, aparelho..."
            className="pl-9 h-9 bg-muted/50 border-0 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-muted/80 transition-colors rounded-lg"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative h-9 w-9">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <div className="ml-2 flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xs font-bold shadow-sm">
            AD
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold text-foreground leading-none">Admin</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Loja Centro</p>
          </div>
          <ChevronDown className="h-3 w-3 text-muted-foreground hidden md:block" />
        </div>
      </div>
    </header>
  );
}
