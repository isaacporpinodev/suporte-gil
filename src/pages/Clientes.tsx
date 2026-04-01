import { useState } from "react";
import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

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

  const clientesFiltrados = clientes.filter(
    (c) => busca === "" || c.nome.toLowerCase().includes(busca.toLowerCase()) || c.telefone.includes(busca)
  );

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Clientes"
        descricao="Cadastro e histórico de clientes"
        acao={
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        }
      />

      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-4 border-b">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou telefone..."
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
                <th className="text-left p-3 font-medium text-muted-foreground">Nome</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Telefone</th>
                <th className="text-center p-3 font-medium text-muted-foreground">Qtd OS</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Última OS</th>
              </tr>
            </thead>
            <tbody>
              {clientesFiltrados.map((c) => (
                <tr key={c.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                  <td className="p-3 font-medium text-foreground">{c.nome}</td>
                  <td className="p-3 text-muted-foreground">{c.telefone}</td>
                  <td className="p-3 text-center text-foreground">{c.quantidadeOS}</td>
                  <td className="p-3 text-muted-foreground">{c.ultimaOS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
