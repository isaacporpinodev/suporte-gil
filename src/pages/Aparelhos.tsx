import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Smartphone } from "lucide-react";

export default function PaginaAparelhos() {
  return (
    <LayoutPrincipal>
      <TituloPagina titulo="Aparelhos" descricao="Cadastro de aparelhos dos clientes" />
      <div className="rounded-lg border bg-card p-12 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <Smartphone className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">Aparelhos cadastrados</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Visualize todos os aparelhos cadastrados vinculados aos clientes e suas respectivas ordens de serviço.
        </p>
      </div>
    </LayoutPrincipal>
  );
}
