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
  padrao: "bg-primary/8 text-primary",
  sucesso: "bg-success/8 text-success",
  alerta: "bg-warning/8 text-warning",
  info: "bg-info/8 text-info",
};

const varianteBorda = {
  padrao: "border-l-primary/40",
  sucesso: "border-l-success/40",
  alerta: "border-l-warning/40",
  info: "border-l-info/40",
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
    <div className={cn(
      "card-premium p-5 border-l-[3px]",
      varianteBorda[variante],
      className
    )}>
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{titulo}</p>
          <p className="text-2xl font-bold tracking-tight text-card-foreground tabular-nums">{valor}</p>
          {descricao && (
            <p className="text-xs text-muted-foreground">{descricao}</p>
          )}
        </div>
        <div className={cn("rounded-xl p-2.5 shrink-0", varianteIcone[variante])}>
          <Icone className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
