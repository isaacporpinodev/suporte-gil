import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CardResumoProps {
  titulo: string;
  valor: string | number;
  icone: LucideIcon;
  descricao?: string;
  variante?: "padrao" | "sucesso" | "alerta" | "info";
  className?: string;
}

const varianteIcone = {
  padrao: "bg-primary/10 text-primary",
  sucesso: "bg-success/10 text-success",
  alerta: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
};

export function CardResumo({
  titulo,
  valor,
  icone: Icone,
  descricao,
  variante = "padrao",
  className,
}: CardResumoProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-5 shadow-sm", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{titulo}</p>
          <p className="text-2xl font-bold tracking-tight text-card-foreground">{valor}</p>
          {descricao && (
            <p className="text-xs text-muted-foreground">{descricao}</p>
          )}
        </div>
        <div className={cn("rounded-lg p-2.5", varianteIcone[variante])}>
          <Icone className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
