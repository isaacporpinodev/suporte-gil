import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { BarChart3 } from "lucide-react";

export default function PaginaRelatorios() {
  return (
    <LayoutPrincipal>
      <TituloPagina titulo="Relatórios" descricao="Relatórios e análises do sistema" />
      <div className="rounded-lg border bg-card p-12 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <BarChart3 className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">Relatórios em breve</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Módulo de relatórios com gráficos de faturamento, produtividade dos técnicos, peças mais utilizadas e muito mais.
        </p>
      </div>
    </LayoutPrincipal>
  );
}
