import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const usuarios = [
  { id: 1, nome: "Admin Master", email: "admin@techassist.com", perfil: "Admin Master", status: "Ativo" },
  { id: 2, nome: "Ricardo Loja Centro", email: "ricardo@techassist.com", perfil: "Admin Loja", status: "Ativo" },
  { id: 3, nome: "Carlos Técnico", email: "carlos@techassist.com", perfil: "Técnico", status: "Ativo" },
  { id: 4, nome: "Pedro Manutenção", email: "pedro@techassist.com", perfil: "Técnico", status: "Ativo" },
  { id: 5, nome: "Ana Hardware", email: "ana@techassist.com", perfil: "Técnico", status: "Inativo" },
];

const corPerfil: Record<string, string> = {
  "Admin Master": "bg-primary/15 text-primary",
  "Admin Loja": "bg-info/15 text-info",
  "Técnico": "bg-muted text-muted-foreground",
};

export default function PaginaUsuarios() {
  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Usuários"
        descricao="Gerenciamento de usuários do sistema"
        acao={
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Usuário
          </Button>
        }
      />

      <div className="rounded-lg border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium text-muted-foreground">Nome</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Email</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Perfil</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-medium text-foreground">{u.nome}</td>
                  <td className="p-3 text-muted-foreground">{u.email}</td>
                  <td className="p-3">
                    <span className={`badge-status ${corPerfil[u.perfil] || ""}`}>{u.perfil}</span>
                  </td>
                  <td className="p-3">
                    <span className={`badge-status ${u.status === "Ativo" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>
                      {u.status}
                    </span>
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
