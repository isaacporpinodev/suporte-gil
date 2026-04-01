import { cn } from "@/lib/utils";

export type StatusOrdemServico =
  | "aberta"
  | "em_andamento"
  | "aguardando_peca"
  | "pronta"
  | "entregue"
  | "cancelada";

const configStatus: Record<StatusOrdemServico, { label: string; classe: string; dot: string }> = {
  aberta: { label: "Aberta", classe: "bg-info/10 text-info border border-info/20", dot: "bg-info" },
  em_andamento: { label: "Em andamento", classe: "bg-warning/10 text-warning border border-warning/20", dot: "bg-warning" },
  aguardando_peca: { label: "Aguardando peça", classe: "bg-muted text-muted-foreground border border-border", dot: "bg-muted-foreground" },
  pronta: { label: "Pronta", classe: "bg-success/10 text-success border border-success/20", dot: "bg-success" },
  entregue: { label: "Entregue", classe: "bg-success/10 text-success border border-success/20", dot: "bg-success" },
  cancelada: { label: "Cancelada", classe: "bg-destructive/10 text-destructive border border-destructive/20", dot: "bg-destructive" },
};

interface BadgeStatusProps {
  status: StatusOrdemServico;
  className?: string;
}

export function BadgeStatus({ status, className }: BadgeStatusProps) {
  const config = configStatus[status];
  return (
    <span className={cn("badge-status gap-1.5", config.classe, className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
      {config.label}
    </span>
  );
}
