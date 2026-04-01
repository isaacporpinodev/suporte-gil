import { cn } from "@/lib/utils";

export type StatusOrdemServico =
  | "aberta"
  | "em_andamento"
  | "aguardando_peca"
  | "pronta"
  | "entregue"
  | "cancelada";

const configStatus: Record<StatusOrdemServico, { label: string; classe: string }> = {
  aberta: { label: "Aberta", classe: "bg-info/15 text-info" },
  em_andamento: { label: "Em andamento", classe: "bg-warning/15 text-warning" },
  aguardando_peca: { label: "Aguardando peça", classe: "bg-muted text-muted-foreground" },
  pronta: { label: "Pronta", classe: "bg-success/15 text-success" },
  entregue: { label: "Entregue", classe: "bg-success/20 text-success" },
  cancelada: { label: "Cancelada", classe: "bg-destructive/15 text-destructive" },
};

interface BadgeStatusProps {
  status: StatusOrdemServico;
  className?: string;
}

export function BadgeStatus({ status, className }: BadgeStatusProps) {
  const config = configStatus[status];
  return (
    <span className={cn("badge-status", config.classe, className)}>
      {config.label}
    </span>
  );
}
