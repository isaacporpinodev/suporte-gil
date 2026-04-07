import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const clientes = [
  { id: 1, nome: "Maria Silva", telefone: "(11) 99999-1234", quantidadeOS: 5, ultimaOS: "01/04/2026" },
  { id: 2, nome: "João Santos", telefone: "(11) 98888-5678", quantidadeOS: 3, ultimaOS: "01/04/2026" },
  { id: 3, nome: "Ana Costa", telefone: "(21) 97777-9012", quantidadeOS: 2, ultimaOS: "31/03/2026" },
  { id: 4, nome: "Carlos Oliveira", telefone: "(31) 96666-3456", quantidadeOS: 7, ultimaOS: "31/03/2026" },
  { id: 5, nome: "Paula Mendes", telefone: "(11) 95555-7890", quantidadeOS: 1, ultimaOS: "30/03/2026" },
  { id: 6, nome: "Roberto Lima", telefone: "(11) 94444-2345", quantidadeOS: 4, ultimaOS: "29/03/2026" },
  { id: 7, nome: "Fernanda Reis", telefone: "(21) 93333-6789", quantidadeOS: 2, ultimaOS: "28/03/2026" },
];

export default function PaginaClientes() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const clientesFiltrados = clientes.filter(
    (c) => busca === "" || c.nome.toLowerCase().includes(busca.toLowerCase()) || c.telefone.includes(busca)
  );

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Clientes"
        descricao="Cadastro e histórico de clientes"
        acao={
          <Button onClick={() => navigate("/clientes/novo")} className="gap-2 shadow-sm h-10 px-5">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        }
      />

      <div className="card-premium">
        <div className="p-4 border-b border-border/50">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
            <Input
              placeholder="Buscar por nome ou telefone..."
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
                <th>Nome</th>
                <th>Telefone</th>
                <th className="text-center">Qtd OS</th>
                <th>Última OS</th>
              </tr>
            </thead>
            <tbody>
              {clientesFiltrados.map((c) => (
                <tr key={c.id} className="cursor-pointer">
                  <td className="font-semibold text-foreground">{c.nome}</td>
                  <td className="text-muted-foreground tabular-nums">{c.telefone}</td>
                  <td className="text-center">
                    <span className="badge-status bg-primary/8 text-primary border border-primary/15">{c.quantidadeOS}</span>
                  </td>
                  <td className="text-muted-foreground tabular-nums">{c.ultimaOS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
