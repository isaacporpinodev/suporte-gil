import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { CardResumo } from "@/components/CardResumo";
import { BadgeStatus, StatusOrdemServico } from "@/components/BadgeStatus";
import {
  ClipboardList,
  Wrench,
  CheckCircle2,
  PackageCheck,
  DollarSign,
  Wallet,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ordensRecentes = [
  { id: "OS-0042", cliente: "Maria Silva", aparelho: "iPhone 14 Pro", status: "em_andamento" as StatusOrdemServico, data: "01/04/2026", valor: "R$ 350,00" },
  { id: "OS-0041", cliente: "João Santos", aparelho: "Samsung S23", status: "pronta" as StatusOrdemServico, data: "01/04/2026", valor: "R$ 280,00" },
  { id: "OS-0040", cliente: "Ana Costa", aparelho: "MacBook Air M2", status: "aberta" as StatusOrdemServico, data: "31/03/2026", valor: "R$ 900,00" },
  { id: "OS-0039", cliente: "Carlos Oliveira", aparelho: "Xiaomi Redmi Note 12", status: "entregue" as StatusOrdemServico, data: "31/03/2026", valor: "R$ 150,00" },
  { id: "OS-0038", cliente: "Paula Mendes", aparelho: "Notebook Dell G15", status: "aguardando_peca" as StatusOrdemServico, data: "30/03/2026", valor: "R$ 650,00" },
];

const alertasEstoque = [
  { produto: "Tela iPhone 12", quantidade: 1, minimo: 3 },
  { produto: "Bateria Samsung S21", quantidade: 0, minimo: 2 },
  { produto: "Flex de carga USB-C", quantidade: 2, minimo: 5 },
];

export default function PaginaDashboard() {
  const navigate = useNavigate();
  const cardsResumo = [
    {
      titulo: "OS Abertas",
      valor: 8,
      icone: ClipboardList,
      variante: "info" as const,
      descricao: "Ordens aguardando triagem ou início do reparo.",
      rotuloAcao: "Abrir fila inicial",
      onClick: () => navigate("/ordens"),
    },
    {
      titulo: "Em Andamento",
      valor: 12,
      icone: Wrench,
      variante: "alerta" as const,
      descricao: "Acompanhe os reparos já em execução no laboratório.",
      rotuloAcao: "Ver ordens em execução",
      onClick: () => navigate("/ordens"),
    },
    {
      titulo: "Prontas",
      valor: 5,
      icone: CheckCircle2,
      variante: "sucesso" as const,
      descricao: "Equipamentos finalizados e liberados para entrega.",
      rotuloAcao: "Ver ordens prontas",
      onClick: () => navigate("/ordens"),
    },
    {
      titulo: "Entregues Hoje",
      valor: 3,
      icone: PackageCheck,
      variante: "sucesso" as const,
      descricao: "Saídas concluídas no dia com atendimento encerrado.",
      rotuloAcao: "Consultar entregas",
      onClick: () => navigate("/ordens"),
    },
    {
      titulo: "Faturamento do Dia",
      valor: "R$ 2.450",
      icone: DollarSign,
      variante: "padrao" as const,
      descricao: "+12% em relação ao dia anterior.",
      rotuloAcao: "Abrir financeiro",
      onClick: () => navigate("/financeiro"),
    },
    {
      titulo: "Saldo Atual",
      valor: "R$ 18.320",
      icone: Wallet,
      variante: "sucesso" as const,
      descricao: "Saldo consolidado da operação da loja.",
      rotuloAcao: "Analisar caixa",
      onClick: () => navigate("/financeiro"),
    },
  ];

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Dashboard"
        descricao="Visão geral do sistema"
        acao={
          <Button onClick={() => navigate("/ordens/nova")} className="gap-2 shadow-sm">
            <ClipboardList className="h-4 w-4" />
            Nova OS
          </Button>
        }
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {cardsResumo.map((card) => (
          <CardResumo
            key={card.titulo}
            titulo={card.titulo}
            valor={card.valor}
            icone={card.icone}
            variante={card.variante}
            descricao={card.descricao}
            rotuloAcao={card.rotuloAcao}
            onClick={card.onClick}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ordens Recentes */}
        <div className="lg:col-span-2 card-premium">
          <div className="flex flex-col gap-3 border-b border-border/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <h2 className="text-sm font-semibold text-card-foreground">Ordens Recentes</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Últimas 5 ordens de serviço</p>
            </div>
            <Button variant="ghost" size="sm" className="h-9 self-start text-xs text-muted-foreground sm:self-auto" onClick={() => navigate("/ordens")}>
              Ver todas <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full tabela-premium">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Cliente</th>
                  <th className="hidden md:table-cell">Aparelho</th>
                  <th>Status</th>
                  <th className="hidden sm:table-cell">Data</th>
                  <th className="text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                {ordensRecentes.map((os) => (
                  <tr
                    key={os.id}
                    className="cursor-pointer"
                    onClick={() => navigate(`/ordens/${os.id}`)}
                  >
                    <td className="font-semibold text-foreground">{os.id}</td>
                    <td className="font-medium text-foreground">
                      <div className="flex min-w-[180px] flex-col">
                        <span>{os.cliente}</span>
                        <span className="text-xs text-muted-foreground md:hidden">{os.aparelho}</span>
                      </div>
                    </td>
                    <td className="hidden text-muted-foreground md:table-cell">{os.aparelho}</td>
                    <td><BadgeStatus status={os.status} /></td>
                    <td className="hidden text-muted-foreground tabular-nums sm:table-cell">{os.data}</td>
                    <td className="text-right font-semibold text-foreground tabular-nums">{os.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Estoque Baixo */}
        <div className="card-premium">
          <div className="flex items-center justify-between gap-3 border-b border-border/50 px-4 py-4 sm:px-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10">
                <AlertTriangle className="h-4 w-4 text-warning" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-card-foreground">Estoque Baixo</h2>
                <p className="text-xs text-muted-foreground">{alertasEstoque.length} itens exigem reposição</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0 text-muted-foreground" onClick={() => navigate("/estoque")}>
              <Boxes className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-2">
            {alertasEstoque.map((item) => (
              <button
                key={item.produto}
                type="button"
                className="flex w-full items-center justify-between gap-3 rounded-xl p-3 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={() => navigate("/estoque")}
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{item.produto}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">Mín: {item.minimo} unid.</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className={`text-lg font-bold tabular-nums ${item.quantidade === 0 ? "text-destructive" : "text-warning"}`}>
                    {item.quantidade}
                  </span>
                  <p className="text-[10px] text-muted-foreground">em estoque</p>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 pb-4 sm:px-5">
            <Button variant="outline" size="sm" className="h-9 w-full text-xs" onClick={() => navigate("/estoque")}>
              Gerenciar Estoque <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
