import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const usuarios = [
  { id: 1, nome: "Admin Master", email: "admin@techassist.com", perfil: "Admin Master", status: "Ativo" },
  { id: 2, nome: "Ricardo Loja Centro", email: "ricardo@techassist.com", perfil: "Admin Loja", status: "Ativo" },
  { id: 3, nome: "Carlos Técnico", email: "carlos@techassist.com", perfil: "Técnico", status: "Ativo" },
  { id: 4, nome: "Pedro Manutenção", email: "pedro@techassist.com", perfil: "Técnico", status: "Ativo" },
  { id: 5, nome: "Ana Hardware", email: "ana@techassist.com", perfil: "Técnico", status: "Inativo" },
];

const corPerfil: Record<string, string> = {
  "Admin Master": "bg-primary/10 text-primary border border-primary/20",
  "Admin Loja": "bg-info/10 text-info border border-info/20",
  "Técnico": "bg-muted text-muted-foreground border border-border",
};

export default function PaginaUsuarios() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleVoltar = () => {
    if (location.key !== "default") {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Usuários"
        descricao="Gerenciamento de usuários do sistema"
        acao={
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={handleVoltar} className="gap-2 text-muted-foreground h-10 px-4">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <Button className="gap-2 shadow-sm h-10 px-5">
              <Plus className="h-4 w-4" />
              Novo Usuário
            </Button>
          </div>
        }
      />

      <div className="card-premium">
        <div className="overflow-x-auto">
          <table className="w-full tabela-premium">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id} className="cursor-pointer">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">
                        {u.nome.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <span className="font-semibold text-foreground">{u.nome}</span>
                    </div>
                  </td>
                  <td className="text-muted-foreground">{u.email}</td>
                  <td>
                    <span className={cn("badge-status", corPerfil[u.perfil] || "")}>{u.perfil}</span>
                  </td>
                  <td>
                    <span className={cn(
                      "badge-status",
                      u.status === "Ativo"
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-muted text-muted-foreground border border-border"
                    )}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", u.status === "Ativo" ? "bg-success" : "bg-muted-foreground")} />
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
