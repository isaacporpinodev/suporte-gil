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

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <CardResumo titulo="OS Abertas" valor={8} icone={ClipboardList} variante="info" />
        <CardResumo titulo="Em Andamento" valor={12} icone={Wrench} variante="alerta" />
        <CardResumo titulo="Prontas" valor={5} icone={CheckCircle2} variante="sucesso" />
        <CardResumo titulo="Entregues Hoje" valor={3} icone={PackageCheck} variante="sucesso" />
        <CardResumo titulo="Faturamento Dia" valor="R$ 2.450" icone={DollarSign} variante="padrao" descricao="+12% vs ontem" />
        <CardResumo titulo="Saldo Atual" valor="R$ 18.320" icone={Wallet} variante="sucesso" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ordens Recentes */}
        <div className="lg:col-span-2 card-premium">
          <div className="px-5 py-4 border-b border-border/50 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-card-foreground">Ordens Recentes</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Últimas 5 ordens de serviço</p>
            </div>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground gap-1.5 h-8" onClick={() => navigate("/ordens")}>
              Ver todas <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full tabela-premium">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Cliente</th>
                  <th>Aparelho</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th className="text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                {ordensRecentes.map((os) => (
                  <tr key={os.id} className="cursor-pointer" onClick={() => navigate(`/ordens/${os.id}`)}>
                    <td className="font-semibold text-foreground">{os.id}</td>
                    <td className="font-medium text-foreground">{os.cliente}</td>
                    <td className="text-muted-foreground">{os.aparelho}</td>
                    <td><BadgeStatus status={os.status} /></td>
                    <td className="text-muted-foreground tabular-nums">{os.data}</td>
                    <td className="text-right font-semibold text-foreground tabular-nums">{os.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Estoque Baixo */}
        <div className="card-premium">
          <div className="px-5 py-4 border-b border-border/50 flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-warning/10 flex items-center justify-center">
              <AlertTriangle className="h-3.5 w-3.5 text-warning" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-card-foreground">Estoque Baixo</h2>
              <p className="text-xs text-muted-foreground">{alertasEstoque.length} itens</p>
            </div>
          </div>
          <div className="p-2">
            {alertasEstoque.map((item) => (
              <div key={item.produto} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/40 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.produto}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Mín: {item.minimo} unid.</p>
                </div>
                <div className="text-right">
                  <span className={`text-lg font-bold tabular-nums ${item.quantidade === 0 ? "text-destructive" : "text-warning"}`}>
                    {item.quantidade}
                  </span>
                  <p className="text-[10px] text-muted-foreground">em estoque</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 pb-4">
            <Button variant="outline" size="sm" className="w-full text-xs h-8 gap-1.5" onClick={() => navigate("/estoque")}>
              Gerenciar Estoque <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
