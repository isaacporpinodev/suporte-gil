import { ReactNode } from "react";

interface TituloPaginaProps {
  titulo: string;
  descricao?: string;
  acao?: ReactNode;
}

export function TituloPagina({ titulo, descricao, acao }: TituloPaginaProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{titulo}</h1>
        {descricao && (
          <p className="text-sm text-muted-foreground mt-1">{descricao}</p>
        )}
      </div>
      {acao && <div>{acao}</div>}
    </div>
  );
}
