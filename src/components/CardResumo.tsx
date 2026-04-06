import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CardResumoProps {
  titulo: string;
  valor: string | number;
  icone: LucideIcon;
  descricao?: string;
  rotuloAcao?: string;
  variante?: "padrao" | "sucesso" | "alerta" | "info";
  className?: string;
  onClick?: () => void;
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
  rotuloAcao,
  variante = "padrao",
  className,
  onClick,
}: CardResumoProps) {
  const Conteudo = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {titulo}
          </p>
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-card-foreground tabular-nums">
            {valor}
          </p>
          {descricao && (
            <p className="text-xs text-muted-foreground line-clamp-2">{descricao}</p>
          )}
        </div>
        <div className={cn("rounded-xl p-2.5 shrink-0", varianteIcone[variante])}>
          <Icone className="h-5 w-5" />
        </div>
      </div>
      {rotuloAcao && (
        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-medium text-muted-foreground">
          <span>{rotuloAcao}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      )}
    </>
  );

  const classes = cn(
    "card-premium p-4 sm:p-5 border-l-[3px] text-left",
    varianteBorda[variante],
    onClick && "group w-full cursor-pointer hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    className
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {Conteudo}
      </button>
    );
  }

  return (
    <div className={classes}>
      {Conteudo}
    </div>
  );
}
