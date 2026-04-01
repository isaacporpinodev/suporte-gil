import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { BadgeStatus } from "@/components/BadgeStatus";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Tag, CreditCard, CheckCircle2, Clock, Wrench, PackageCheck, ClipboardList } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const etapasTimeline = [
  { status: "Aberta", data: "01/04/2026 09:30", icone: ClipboardList, ativo: true },
  { status: "Em andamento", data: "01/04/2026 10:15", icone: Wrench, ativo: true },
  { status: "Pronta", data: "", icone: CheckCircle2, ativo: false },
  { status: "Entregue", data: "", icone: PackageCheck, ativo: false },
];

const pecasUtilizadas = [
  { nome: "Tela LCD iPhone 14 Pro", quantidade: 1, valor: "R$ 180,00" },
  { nome: "Película de vidro", quantidade: 1, valor: "R$ 20,00" },
];

export default function PaginaDetalheOS() {
  const navigate = useNavigate();
  const { id } = useParams();

  const subtotal = 200;
  const maoDeObra = 150;
  const desconto = 0;
  const total = subtotal + maoDeObra - desconto;

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo={`Ordem de Serviço ${id || "OS-0042"}`}
        acao={
          <Button variant="ghost" onClick={() => navigate("/ordens")} className="gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      {/* Cabeçalho */}
      <div className="rounded-lg border bg-card p-5 shadow-sm mb-6">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Cliente</p>
            <p className="font-medium text-foreground">Maria Silva</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Aparelho</p>
            <p className="font-medium text-foreground">iPhone 14 Pro</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">IMEI</p>
            <p className="font-medium text-muted-foreground">356789012345678</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Status</p>
            <BadgeStatus status="em_andamento" className="mt-0.5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Técnico</p>
            <p className="font-medium text-foreground">Carlos Técnico</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timeline */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Timeline</h3>
            <div className="flex items-center gap-2">
              {etapasTimeline.map((etapa, i) => (
                <div key={etapa.status} className="flex items-center gap-2 flex-1">
                  <div className={`flex flex-col items-center text-center`}>
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center ${etapa.ativo ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <etapa.icone className="h-4 w-4" />
                    </div>
                    <p className={`text-xs mt-1.5 font-medium ${etapa.ativo ? "text-foreground" : "text-muted-foreground"}`}>
                      {etapa.status}
                    </p>
                    {etapa.data && (
                      <p className="text-[10px] text-muted-foreground">{etapa.data}</p>
                    )}
                  </div>
                  {i < etapasTimeline.length - 1 && (
                    <div className={`flex-1 h-0.5 ${etapa.ativo ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Diagnóstico */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-3">Diagnóstico Técnico</h3>
            <p className="text-sm text-muted-foreground">
              Tela trincada com LCD danificado. Touch parcialmente funcional. Necessária troca completa do display assembly. Demais componentes testados e funcionando normalmente.
            </p>
          </div>

          {/* Peças */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Peças Utilizadas</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium text-muted-foreground">Peça</th>
                  <th className="text-center py-2 font-medium text-muted-foreground">Qtd</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Valor</th>
                </tr>
              </thead>
              <tbody>
                {pecasUtilizadas.map((p) => (
                  <tr key={p.nome} className="border-b last:border-0">
                    <td className="py-2.5 text-foreground">{p.nome}</td>
                    <td className="py-2.5 text-center text-muted-foreground">{p.quantidade}</td>
                    <td className="py-2.5 text-right font-medium text-foreground">{p.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coluna lateral - Financeiro */}
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Resumo Financeiro</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Peças</span>
                <span className="text-foreground">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mão de obra</span>
                <span className="text-foreground">R$ {maoDeObra.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Desconto</span>
                <span className="text-foreground">- R$ {desconto.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2.5 flex justify-between font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">R$ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Pagamento</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="gap-1.5 text-sm h-10">
                <CreditCard className="h-3.5 w-3.5" /> Pix
              </Button>
              <Button variant="outline" className="gap-1.5 text-sm h-10">
                <CreditCard className="h-3.5 w-3.5" /> Cartão
              </Button>
              <Button variant="outline" className="gap-1.5 text-sm h-10">
                <CreditCard className="h-3.5 w-3.5" /> Dinheiro
              </Button>
              <Button variant="outline" className="gap-1.5 text-sm h-10">
                <CreditCard className="h-3.5 w-3.5" /> Outro
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full gap-2">
              <CreditCard className="h-4 w-4" />
              Registrar Pagamento
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Clock className="h-4 w-4" />
              Alterar Status
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Printer className="h-4 w-4" />
              Imprimir Comprovante
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Tag className="h-4 w-4" />
              Imprimir Etiqueta
            </Button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
