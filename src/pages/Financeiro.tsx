import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { CardResumo } from "@/components/CardResumo";
import { TrendingUp, TrendingDown, Wallet, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleVoltar = () => {
    if (location.key !== "default") {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  const lancamentosFiltrados = lancamentos.filter(
    (l) => filtroTipo === "todos" || l.tipo === filtroTipo
  );

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Financeiro"
        descricao="Controle financeiro gerencial"
        acao={
          <Button variant="ghost" onClick={handleVoltar} className="gap-2 text-muted-foreground h-10 px-4">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <CardResumo titulo="Total Entradas" valor="R$ 1.200,00" icone={TrendingUp} variante="sucesso" />
        <CardResumo titulo="Total Saídas" valor="R$ 2.980,00" icone={TrendingDown} variante="alerta" />
        <CardResumo titulo="Saldo" valor="R$ 18.320,00" icone={Wallet} variante="padrao" />
      </div>

      <div className="card-premium">
        <div className="p-4 border-b border-border/50 flex flex-wrap items-end gap-4">
          <div className="space-y-1.5">
            <Label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Período</Label>
            <div className="flex gap-2">
              <Input type="date" className="h-9 bg-muted/50 border-0 w-36 rounded-lg text-sm" />
              <Input type="date" className="h-9 bg-muted/50 border-0 w-36 rounded-lg text-sm" />
            </div>
          </div>
          <div className="flex gap-1">
            {filtrosTipo.map((f) => (
              <button
                key={f.valor}
                onClick={() => setFiltroTipo(f.valor)}
                className={`filtro-pill ${filtroTipo === f.valor ? "filtro-pill-ativo" : "filtro-pill-inativo"}`}
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
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Forma</th>
                <th className="text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {lancamentosFiltrados.map((l) => (
                <tr key={l.id}>
                  <td className="font-medium text-foreground">{l.descricao}</td>
                  <td>
                    <span className={cn(
                      "badge-status",
                      l.tipo === "entrada" ? "bg-success/10 text-success border border-success/20" : "bg-destructive/10 text-destructive border border-destructive/20"
                    )}>
                      {l.tipo === "entrada" ? "Entrada" : "Saída"}
                    </span>
                  </td>
                  <td className="text-muted-foreground tabular-nums">{l.data}</td>
                  <td className="text-muted-foreground">{l.forma}</td>
                  <td className={cn("text-right font-semibold tabular-nums", l.tipo === "entrada" ? "text-success" : "text-destructive")}>
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
