import { ReactNode } from "react";

interface TituloPaginaProps {
  titulo: string;
  descricao?: string;
  acao?: ReactNode;
}

export function TituloPagina({ titulo, descricao, acao }: TituloPaginaProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">{titulo}</h1>
        {descricao && (
          <p className="text-sm text-muted-foreground mt-0.5">{descricao}</p>
        )}
      </div>
      {acao && <div className="shrink-0">{acao}</div>}
    </div>
  );
}
