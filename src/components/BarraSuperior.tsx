import { FormEvent, KeyboardEvent, useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Bell,
  Search,
  ChevronDown,
  UserCircle2,
  Settings,
  LogOut,
  ClipboardList,
  Package,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

export function BarraSuperior() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  function executarBusca() {
    const termo = busca.trim();

    if (!termo) {
      toast("Digite algo para buscar", {
        description: "Busque por OS, cliente ou aparelho.",
      });
      return;
    }

    navigate("/ordens", { state: { buscaInicial: termo } });
    toast("Busca iniciada", {
      description: `Resultados preparados para "${termo}".`,
    });
  }

  function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    executarBusca();
  }

  function handleKeyDown(evento: KeyboardEvent<HTMLInputElement>) {
    if (evento.key === "Enter") {
      evento.preventDefault();
      executarBusca();
    }
  }

  function abrirNotificacoes() {
    toast("Central de notificações", {
      description: "Abertura preparada para listar alertas e avisos do sistema.",
    });
  }

  function sairDoSistema() {
    toast("Sessão encerrada", {
      description: "Fluxo de logout preparado para integração com autenticação.",
    });
  }

  return (
    <header className="h-[56px] flex items-center gap-4 border-b border-border/60 bg-card/80 backdrop-blur-sm px-5 shrink-0 sticky top-0 z-30">
      <SidebarTrigger className="h-9 w-9 rounded-lg border border-border/70 bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground hover:bg-muted/60" />

      <div className="flex-1 max-w-md">
        <form onSubmit={handleSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
          <Input
            placeholder="Buscar OS, cliente, aparelho..."
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-9 h-9 bg-muted/50 border-0 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-muted/80 transition-colors rounded-lg"
          />
        </form>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground relative h-9 w-9"
          onClick={abrirNotificacoes}
          aria-label="Abrir notificações"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="ml-2 h-auto gap-2.5 rounded-lg px-2.5 py-1.5 hover:bg-muted/50"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xs font-bold shadow-sm">
                AD
              </div>
              <div className="hidden text-left md:block">
                <p className="text-xs font-semibold text-foreground leading-none">Admin</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Loja Centro</p>
              </div>
              <ChevronDown className="hidden h-3 w-3 text-muted-foreground md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>
              <div>
                <p className="text-sm font-semibold text-foreground">Admin</p>
                <p className="text-xs font-normal text-muted-foreground">admin@techassist.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/usuarios")}>
              <UserCircle2 className="mr-2 h-4 w-4" />
              Meu perfil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/usuarios")}>
              <Settings className="mr-2 h-4 w-4" />
              Configurações da loja
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/ordens")}>
              <ClipboardList className="mr-2 h-4 w-4" />
              Minhas ordens
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/estoque")}>
              <Package className="mr-2 h-4 w-4" />
              Estoque da loja
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={sairDoSistema} className="text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
