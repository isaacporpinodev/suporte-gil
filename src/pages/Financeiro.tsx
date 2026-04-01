import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { CardResumo } from "@/components/CardResumo";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const lancamentos = [
  { id: 1, descricao: "OS-0039 - Carlos Oliveira", tipo: "entrada" as const, valor: "R$ 150,00", data: "01/04/2026", forma: "Pix" },
  { id: 2, descricao: "Compra peças - Fornecedor ABC", tipo: "saida" as const, valor: "R$ 480,00", data: "01/04/2026", forma: "Transferência" },
  { id: 3, descricao: "OS-0036 - Fernanda Reis", tipo: "entrada" as const, valor: "R$ 220,00", data: "31/03/2026", forma: "Cartão" },
  { id: 4, descricao: "Aluguel da loja", tipo: "saida" as const, valor: "R$ 2.500,00", data: "30/03/2026", forma: "Boleto" },
  { id: 5, descricao: "OS-0035 - Marcos Souza", tipo: "entrada" as const, valor: "R$ 380,00", data: "30/03/2026", forma: "Dinheiro" },
  { id: 6, descricao: "OS-0034 - Lucia Alves", tipo: "entrada" as const, valor: "R$ 450,00", data: "29/03/2026", forma: "Pix" },
];

const filtrosTipo = [
  { label: "Todos", valor: "todos" },
  { label: "Entradas", valor: "entrada" },
  { label: "Saídas", valor: "saida" },
];

export default function PaginaFinanceiro() {
  const [filtroTipo, setFiltroTipo] = useState("todos");

  const lancamentosFiltrados = lancamentos.filter(
    (l) => filtroTipo === "todos" || l.tipo === filtroTipo
  );

  return (
    <LayoutPrincipal>
      <TituloPagina titulo="Financeiro" descricao="Controle financeiro gerencial" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <CardResumo titulo="Total Entradas" valor="R$ 1.200,00" icone={TrendingUp} variante="sucesso" />
        <CardResumo titulo="Total Saídas" valor="R$ 2.980,00" icone={TrendingDown} variante="alerta" />
        <CardResumo titulo="Saldo" valor="R$ 18.320,00" icone={Wallet} variante="padrao" />
      </div>

      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-4 border-b flex flex-wrap items-end gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Período</Label>
            <div className="flex gap-2">
              <Input type="date" className="h-9 bg-secondary border-0 w-36" />
              <Input type="date" className="h-9 bg-secondary border-0 w-36" />
            </div>
          </div>
          <div className="flex gap-1.5">
            {filtrosTipo.map((f) => (
              <button
                key={f.valor}
                onClick={() => setFiltroTipo(f.valor)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filtroTipo === f.valor
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
                <th className="text-left p-3 font-medium text-muted-foreground">Descrição</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Tipo</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Forma</th>
                <th className="text-right p-3 font-medium text-muted-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {lancamentosFiltrados.map((l) => (
                <tr key={l.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-3 text-foreground">{l.descricao}</td>
                  <td className="p-3">
                    <span className={`badge-status ${l.tipo === "entrada" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                      {l.tipo === "entrada" ? "Entrada" : "Saída"}
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">{l.data}</td>
                  <td className="p-3 text-muted-foreground">{l.forma}</td>
                  <td className={`p-3 text-right font-medium ${l.tipo === "entrada" ? "text-success" : "text-destructive"}`}>
                    {l.tipo === "entrada" ? "+" : "-"} {l.valor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
