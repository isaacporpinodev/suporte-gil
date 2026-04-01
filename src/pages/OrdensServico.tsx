import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { BadgeStatus, StatusOrdemServico } from "@/components/BadgeStatus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ordensServico = [
  { id: "OS-0042", cliente: "Maria Silva", telefone: "(11) 99999-1234", aparelho: "iPhone 14 Pro", status: "em_andamento" as StatusOrdemServico, dataEntrada: "01/04/2026", valor: "R$ 350,00" },
  { id: "OS-0041", cliente: "João Santos", telefone: "(11) 98888-5678", aparelho: "Samsung S23", status: "pronta" as StatusOrdemServico, dataEntrada: "01/04/2026", valor: "R$ 280,00" },
  { id: "OS-0040", cliente: "Ana Costa", telefone: "(21) 97777-9012", aparelho: "MacBook Air M2", status: "aberta" as StatusOrdemServico, dataEntrada: "31/03/2026", valor: "R$ 900,00" },
  { id: "OS-0039", cliente: "Carlos Oliveira", telefone: "(31) 96666-3456", aparelho: "Xiaomi Redmi Note 12", status: "entregue" as StatusOrdemServico, dataEntrada: "31/03/2026", valor: "R$ 150,00" },
  { id: "OS-0038", cliente: "Paula Mendes", telefone: "(11) 95555-7890", aparelho: "Notebook Dell G15", status: "aguardando_peca" as StatusOrdemServico, dataEntrada: "30/03/2026", valor: "R$ 650,00" },
  { id: "OS-0037", cliente: "Roberto Lima", telefone: "(11) 94444-2345", aparelho: "iPhone 13", status: "cancelada" as StatusOrdemServico, dataEntrada: "29/03/2026", valor: "R$ 0,00" },
  { id: "OS-0036", cliente: "Fernanda Reis", telefone: "(21) 93333-6789", aparelho: "Samsung A54", status: "entregue" as StatusOrdemServico, dataEntrada: "28/03/2026", valor: "R$ 220,00" },
];

const filtrosStatus: { label: string; valor: StatusOrdemServico | "todas" }[] = [
  { label: "Todas", valor: "todas" },
  { label: "Abertas", valor: "aberta" },
  { label: "Em andamento", valor: "em_andamento" },
  { label: "Aguardando peça", valor: "aguardando_peca" },
  { label: "Prontas", valor: "pronta" },
  { label: "Entregues", valor: "entregue" },
  { label: "Canceladas", valor: "cancelada" },
];

export default function PaginaOrdens() {
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<StatusOrdemServico | "todas">("todas");
  const navigate = useNavigate();

  const ordensFiltradas = ordensServico.filter((os) => {
    const matchBusca =
      busca === "" ||
      os.cliente.toLowerCase().includes(busca.toLowerCase()) ||
      os.telefone.includes(busca) ||
      os.id.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = filtroStatus === "todas" || os.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Ordens de Serviço"
        descricao="Gerencie todas as ordens de serviço"
        acao={
          <Button onClick={() => navigate("/ordens/nova")} className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Ordem de Serviço
          </Button>
        }
      />

      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-4 border-b space-y-3">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, telefone ou nº OS..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-9 h-9 bg-secondary border-0"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {filtrosStatus.map((f) => (
              <button
                key={f.valor}
                onClick={() => setFiltroStatus(f.valor)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  filtroStatus === f.valor
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium text-muted-foreground">Nº OS</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Cliente</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Telefone</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Aparelho</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Entrada</th>
                <th className="text-right p-3 font-medium text-muted-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {ordensFiltradas.map((os) => (
                <tr
                  key={os.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                  onClick={() => navigate(`/ordens/${os.id}`)}
                >
                  <td className="p-3 font-medium text-foreground">{os.id}</td>
                  <td className="p-3 text-foreground">{os.cliente}</td>
                  <td className="p-3 text-muted-foreground">{os.telefone}</td>
                  <td className="p-3 text-muted-foreground">{os.aparelho}</td>
                  <td className="p-3"><BadgeStatus status={os.status} /></td>
                  <td className="p-3 text-muted-foreground">{os.dataEntrada}</td>
                  <td className="p-3 text-right font-medium text-foreground">{os.valor}</td>
                </tr>
              ))}
              {ordensFiltradas.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-muted-foreground">
                    Nenhuma ordem encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
