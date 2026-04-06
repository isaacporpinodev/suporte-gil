import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { BadgeStatus } from "@/components/BadgeStatus";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Tag, CreditCard, CheckCircle2, Clock, Wrench, PackageCheck, ClipboardList, Banknote, QrCode, CreditCard as CardIcon } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const etapasTimeline = [
  { status: "Aberta", data: "01/04/2026 09:30", icone: ClipboardList, ativo: true, concluido: true },
  { status: "Em andamento", data: "01/04/2026 10:15", icone: Wrench, ativo: true, concluido: false },
  { status: "Pronta", data: "", icone: CheckCircle2, ativo: false, concluido: false },
  { status: "Entregue", data: "", icone: PackageCheck, ativo: false, concluido: false },
];

const pecasUtilizadas = [
  { nome: "Tela LCD iPhone 14 Pro", quantidade: 1, valor: "R$ 180,00" },
  { nome: "Película de vidro", quantidade: 1, valor: "R$ 20,00" },
];

export default function PaginaDetalheOS() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const subtotal = 200;
  const maoDeObra = 150;
  const desconto = 0;
  const total = subtotal + maoDeObra - desconto;
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
        titulo={`Ordem de Serviço ${id || "OS-0042"}`}
        acao={
          <Button variant="ghost" onClick={handleVoltar} className="gap-2 text-muted-foreground h-9">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      {/* Cabeçalho da OS */}
      <div className="card-premium p-5 mb-6">
        <div className="flex flex-wrap items-center gap-8">
          {[
            { label: "Cliente", valor: "Maria Silva", destaque: true },
            { label: "Aparelho", valor: "iPhone 14 Pro", destaque: true },
            { label: "IMEI", valor: "356789012345678", destaque: false },
            { label: "Técnico", valor: "Carlos Técnico", destaque: false },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
              <p className={cn("mt-0.5", item.destaque ? "text-sm font-semibold text-foreground" : "text-sm text-muted-foreground")}>{item.valor}</p>
            </div>
          ))}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Status</p>
            <BadgeStatus status="em_andamento" className="mt-1" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timeline */}
          <div className="card-premium p-6">
            <p className="secao-titulo">Timeline de Status</p>
            <div className="flex items-start">
              {etapasTimeline.map((etapa, i) => (
                <div key={etapa.status} className="flex items-start flex-1">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className={cn(
                      "h-10 w-10 rounded-xl flex items-center justify-center transition-all",
                      etapa.ativo
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-muted/60 text-muted-foreground"
                    )}>
                      <etapa.icone className="h-4.5 w-4.5" />
                    </div>
                    <p className={cn(
                      "text-xs mt-2 font-medium",
                      etapa.ativo ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {etapa.status}
                    </p>
                    {etapa.data && (
                      <p className="text-[10px] text-muted-foreground mt-0.5 tabular-nums">{etapa.data}</p>
                    )}
                  </div>
                  {i < etapasTimeline.length - 1 && (
                    <div className={cn(
                      "h-0.5 flex-1 mt-5 mx-1 rounded-full",
                      etapa.concluido ? "bg-primary" : "bg-muted"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Diagnóstico */}
          <div className="card-premium p-6">
            <p className="secao-titulo">Diagnóstico Técnico</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tela trincada com LCD danificado. Touch parcialmente funcional. Necessária troca completa do display assembly. Demais componentes testados e funcionando normalmente.
            </p>
          </div>

          {/* Peças */}
          <div className="card-premium p-6">
            <p className="secao-titulo">Peças Utilizadas</p>
            <table className="w-full tabela-premium">
              <thead>
                <tr>
                  <th>Peça</th>
                  <th className="text-center">Qtd</th>
                  <th className="text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                {pecasUtilizadas.map((p) => (
                  <tr key={p.nome}>
                    <td className="font-medium text-foreground">{p.nome}</td>
                    <td className="text-center text-muted-foreground tabular-nums">{p.quantidade}</td>
                    <td className="text-right font-semibold text-foreground tabular-nums">{p.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="space-y-6">
          {/* Resumo Financeiro */}
          <div className="card-premium p-6">
            <p className="secao-titulo">Resumo Financeiro</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Peças</span>
                <span className="font-medium text-foreground tabular-nums">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mão de obra</span>
                <span className="font-medium text-foreground tabular-nums">R$ {maoDeObra.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Desconto</span>
                <span className="font-medium text-foreground tabular-nums">- R$ {desconto.toFixed(2)}</span>
              </div>
              <div className="border-t border-border/50 pt-3 mt-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground tabular-nums">R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagamento */}
          <div className="card-premium p-6">
            <p className="secao-titulo">Forma de Pagamento</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Pix", icone: QrCode },
                { label: "Cartão", icone: CardIcon },
                { label: "Dinheiro", icone: Banknote },
                { label: "Outro", icone: CreditCard },
              ].map((forma) => (
                <button key={forma.label} className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border/60 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-accent transition-all">
                  <forma.icone className="h-4 w-4 text-muted-foreground" />
                  {forma.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ações */}
          <div className="space-y-2">
            <Button className="w-full gap-2 h-11 shadow-md text-sm font-semibold">
              <CreditCard className="h-4 w-4" />
              Registrar Pagamento
            </Button>
            <Button variant="outline" className="w-full gap-2 h-10 text-sm">
              <Clock className="h-4 w-4" />
              Alterar Status
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="gap-1.5 text-xs h-9">
                <Printer className="h-3.5 w-3.5" />
                Comprovante
              </Button>
              <Button variant="outline" className="gap-1.5 text-xs h-9">
                <Tag className="h-3.5 w-3.5" />
                Etiqueta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
