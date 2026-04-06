import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { BadgeStatus, StatusOrdemServico } from "@/components/BadgeStatus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();

  const handleVoltar = () => {
    if (location.key !== "default") {
      navigate(-1);
      return;
    }

    navigate("/");
  };

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
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={handleVoltar} className="gap-2 text-muted-foreground h-10 px-4">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <Button onClick={() => navigate("/ordens/nova")} className="gap-2 shadow-sm h-10 px-5">
              <Plus className="h-4 w-4" />
              Nova Ordem de Serviço
            </Button>
          </div>
        }
      />

      <div className="card-premium">
        <div className="p-4 border-b border-border/50 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
            <Input
              placeholder="Buscar por nome, telefone ou nº OS..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-9 h-9 bg-muted/50 border-0 text-sm placeholder:text-muted-foreground/50 rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-1">
            {filtrosStatus.map((f) => (
              <button
                key={f.valor}
                onClick={() => setFiltroStatus(f.valor)}
                className={`filtro-pill ${filtroStatus === f.valor ? "filtro-pill-ativo" : "filtro-pill-inativo"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full tabela-premium">
            <thead>
              <tr>
                <th>Nº OS</th>
                <th>Cliente</th>
                <th>Telefone</th>
                <th>Aparelho</th>
                <th>Status</th>
                <th>Entrada</th>
                <th className="text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {ordensFiltradas.map((os) => (
                <tr
                  key={os.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/ordens/${os.id}`)}
                >
                  <td className="font-semibold text-foreground">{os.id}</td>
                  <td className="font-medium text-foreground">{os.cliente}</td>
                  <td className="text-muted-foreground tabular-nums">{os.telefone}</td>
                  <td className="text-muted-foreground">{os.aparelho}</td>
                  <td><BadgeStatus status={os.status} /></td>
                  <td className="text-muted-foreground tabular-nums">{os.dataEntrada}</td>
                  <td className="text-right font-semibold text-foreground tabular-nums">{os.valor}</td>
                </tr>
              ))}
              {ordensFiltradas.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center text-muted-foreground py-12">
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
