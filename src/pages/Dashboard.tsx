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
} from "lucide-react";

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
  return (
    <LayoutPrincipal>
      <TituloPagina titulo="Dashboard" descricao="Visão geral do sistema" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <CardResumo titulo="OS Abertas" valor={8} icone={ClipboardList} variante="info" />
        <CardResumo titulo="Em Andamento" valor={12} icone={Wrench} variante="alerta" />
        <CardResumo titulo="Prontas" valor={5} icone={CheckCircle2} variante="sucesso" />
        <CardResumo titulo="Entregues Hoje" valor={3} icone={PackageCheck} variante="sucesso" />
        <CardResumo titulo="Faturamento Dia" valor="R$ 2.450" icone={DollarSign} variante="padrao" />
        <CardResumo titulo="Saldo Atual" valor="R$ 18.320" icone={Wallet} variante="sucesso" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-lg border bg-card shadow-sm">
          <div className="p-5 border-b">
            <h2 className="font-semibold text-card-foreground">Ordens Recentes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium text-muted-foreground">Nº</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Cliente</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Aparelho</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                  <th className="text-right p-3 font-medium text-muted-foreground">Valor</th>
                </tr>
              </thead>
              <tbody>
                {ordensRecentes.map((os) => (
                  <tr key={os.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium text-foreground">{os.id}</td>
                    <td className="p-3 text-foreground">{os.cliente}</td>
                    <td className="p-3 text-muted-foreground">{os.aparelho}</td>
                    <td className="p-3"><BadgeStatus status={os.status} /></td>
                    <td className="p-3 text-muted-foreground">{os.data}</td>
                    <td className="p-3 text-right font-medium text-foreground">{os.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card shadow-sm">
          <div className="p-5 border-b flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <h2 className="font-semibold text-card-foreground">Estoque Baixo</h2>
          </div>
          <div className="p-2">
            {alertasEstoque.map((item) => (
              <div key={item.produto} className="flex items-center justify-between p-3 rounded-md hover:bg-muted/30 transition-colors">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.produto}</p>
                  <p className="text-xs text-muted-foreground">Mínimo: {item.minimo}</p>
                </div>
                <span className={`text-sm font-bold ${item.quantidade === 0 ? "text-destructive" : "text-warning"}`}>
                  {item.quantidade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
