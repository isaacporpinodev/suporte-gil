import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
          <Button onClick={() => navigate("/estoque/novo")} className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Produto
          </Button>
        }
      />

      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-4 border-b">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produto ou categoria..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-9 h-9 bg-secondary border-0"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium text-muted-foreground">Produto</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Categoria</th>
                <th className="text-center p-3 font-medium text-muted-foreground">Quantidade</th>
                <th className="text-center p-3 font-medium text-muted-foreground">Mínimo</th>
                <th className="text-right p-3 font-medium text-muted-foreground">Custo</th>
                <th className="text-right p-3 font-medium text-muted-foreground">Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.map((p) => (
                <tr key={p.id} className={`border-b last:border-0 hover:bg-muted/30 transition-colors ${p.baixo ? "bg-destructive/5" : ""}`}>
                  <td className="p-3 font-medium text-foreground flex items-center gap-2">
                    {p.baixo && <AlertTriangle className="h-3.5 w-3.5 text-warning shrink-0" />}
                    {p.nome}
                  </td>
                  <td className="p-3 text-muted-foreground">{p.categoria}</td>
                  <td className={`p-3 text-center font-medium ${p.quantidade === 0 ? "text-destructive" : p.baixo ? "text-warning" : "text-foreground"}`}>
                    {p.quantidade}
                  </td>
                  <td className="p-3 text-center text-muted-foreground">{p.minimo}</td>
                  <td className="p-3 text-right text-muted-foreground">{p.custo}</td>
                  <td className="p-3 text-right font-medium text-foreground">{p.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
