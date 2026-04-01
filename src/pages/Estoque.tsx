import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const produtos = [
  { id: 1, nome: "Tela LCD iPhone 14 Pro", categoria: "Telas", quantidade: 8, minimo: 3, custo: "R$ 120,00", preco: "R$ 180,00", baixo: false },
  { id: 2, nome: "Bateria Samsung S23", categoria: "Baterias", quantidade: 5, minimo: 2, custo: "R$ 45,00", preco: "R$ 80,00", baixo: false },
  { id: 3, nome: "Tela iPhone 12", categoria: "Telas", quantidade: 1, minimo: 3, custo: "R$ 90,00", preco: "R$ 150,00", baixo: true },
  { id: 4, nome: "Bateria Samsung S21", categoria: "Baterias", quantidade: 0, minimo: 2, custo: "R$ 35,00", preco: "R$ 65,00", baixo: true },
  { id: 5, nome: "Flex de carga USB-C", categoria: "Flexes", quantidade: 2, minimo: 5, custo: "R$ 15,00", preco: "R$ 40,00", baixo: true },
  { id: 6, nome: "Película de vidro universal", categoria: "Acessórios", quantidade: 50, minimo: 10, custo: "R$ 3,00", preco: "R$ 20,00", baixo: false },
  { id: 7, nome: "Conector Lightning", categoria: "Conectores", quantidade: 12, minimo: 5, custo: "R$ 10,00", preco: "R$ 30,00", baixo: false },
];

export default function PaginaEstoque() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const produtosFiltrados = produtos.filter(
    (p) => busca === "" || p.nome.toLowerCase().includes(busca.toLowerCase()) || p.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Estoque"
        descricao="Controle de peças e produtos"
        acao={
          <Button onClick={() => navigate("/estoque/novo")} className="gap-2 shadow-sm h-10 px-5">
            <Plus className="h-4 w-4" />
            Novo Produto
          </Button>
        }
      />

      <div className="card-premium">
        <div className="p-4 border-b border-border/50">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
            <Input
              placeholder="Buscar produto ou categoria..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-9 h-9 bg-muted/50 border-0 text-sm placeholder:text-muted-foreground/50 rounded-lg"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full tabela-premium">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th className="text-center">Qtd</th>
                <th className="text-center">Mínimo</th>
                <th className="text-right">Custo</th>
                <th className="text-right">Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.map((p) => (
                <tr key={p.id} className={cn(p.baixo && "bg-destructive/[0.03]")}>
                  <td className="font-medium text-foreground">
                    <div className="flex items-center gap-2">
                      {p.baixo && <AlertTriangle className="h-3.5 w-3.5 text-warning shrink-0" />}
                      {p.nome}
                    </div>
                  </td>
                  <td>
                    <span className="badge-status bg-muted text-muted-foreground">{p.categoria}</span>
                  </td>
                  <td className={cn("text-center font-semibold tabular-nums", p.quantidade === 0 ? "text-destructive" : p.baixo ? "text-warning" : "text-foreground")}>
                    {p.quantidade}
                  </td>
                  <td className="text-center text-muted-foreground tabular-nums">{p.minimo}</td>
                  <td className="text-right text-muted-foreground tabular-nums">{p.custo}</td>
                  <td className="text-right font-semibold text-foreground tabular-nums">{p.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
