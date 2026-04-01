import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Printer, ArrowLeft, User, Smartphone, AlertCircle, ClipboardCheck, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const checklistEntrada = [
  "Liga normalmente",
  "Tela sem trincas",
  "Touch funcionando",
  "Botões funcionando",
  "Câmera funcionando",
  "Alto-falante funcionando",
  "Microfone funcionando",
  "Carregamento funcionando",
  "Biometria funcionando",
  "Face ID funcionando",
];

function SecaoFormulario({ icone: Icone, titulo, numero, children }: { icone: React.ElementType; titulo: string; numero: number; children: React.ReactNode }) {
  return (
    <div className="card-premium p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-8 w-8 rounded-lg bg-primary/8 flex items-center justify-center">
          <Icone className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Etapa {numero}</p>
          <h3 className="text-sm font-semibold text-foreground leading-none mt-0.5">{titulo}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function PaginaNovaOS() {
  const navigate = useNavigate();

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Nova Ordem de Serviço"
        descricao="Cadastre uma nova OS rapidamente"
        acao={
          <Button variant="ghost" onClick={() => navigate("/ordens")} className="gap-2 text-muted-foreground h-9">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      <div className="max-w-4xl space-y-5">
        {/* Cliente */}
        <SecaoFormulario icone={User} titulo="Dados do Cliente" numero={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cliente" className="text-xs font-medium">Nome do cliente</Label>
              <Input id="cliente" placeholder="Nome completo" className="h-10" autoFocus />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="telefone" className="text-xs font-medium">Telefone</Label>
              <Input id="telefone" placeholder="(00) 00000-0000" className="h-10" />
            </div>
          </div>
        </SecaoFormulario>

        {/* Aparelho */}
        <SecaoFormulario icone={Smartphone} titulo="Dados do Aparelho" numero={2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="marca" className="text-xs font-medium">Marca</Label>
              <Input id="marca" placeholder="Ex: Apple, Samsung" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modelo" className="text-xs font-medium">Modelo</Label>
              <Input id="modelo" placeholder="Ex: iPhone 14 Pro" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="imei" className="text-xs font-medium">IMEI / Serial</Label>
              <Input id="imei" placeholder="Número de identificação" className="h-10" />
            </div>
          </div>
        </SecaoFormulario>

        {/* Problema */}
        <SecaoFormulario icone={AlertCircle} titulo="Problema Relatado" numero={3}>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="defeito" className="text-xs font-medium">Defeito relatado</Label>
              <Textarea id="defeito" placeholder="Descreva o problema relatado pelo cliente..." rows={3} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="acessorios" className="text-xs font-medium">Acessórios entregues</Label>
              <Input id="acessorios" placeholder="Ex: Carregador, capinha, película" className="h-10" />
            </div>
          </div>
        </SecaoFormulario>

        {/* Checklist */}
        <SecaoFormulario icone={ClipboardCheck} titulo="Checklist de Entrada" numero={4}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {checklistEntrada.map((item) => (
              <label key={item} className="flex items-center gap-2.5 text-sm cursor-pointer p-2.5 rounded-lg border border-transparent hover:border-border hover:bg-muted/30 transition-all select-none">
                <Checkbox className="shrink-0" />
                <span className="text-foreground text-xs">{item}</span>
              </label>
            ))}
          </div>
        </SecaoFormulario>

        {/* Técnico e Observações */}
        <SecaoFormulario icone={Settings} titulo="Responsável e Observações" numero={5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="tecnico" className="text-xs font-medium">Técnico responsável</Label>
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Selecione o técnico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carlos">Carlos Técnico</SelectItem>
                  <SelectItem value="pedro">Pedro Manutenção</SelectItem>
                  <SelectItem value="ana">Ana Hardware</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="previsao" className="text-xs font-medium">Previsão de entrega</Label>
              <Input id="previsao" type="date" className="h-10" />
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label htmlFor="observacoes" className="text-xs font-medium">Observações</Label>
            <Textarea id="observacoes" placeholder="Observações adicionais..." rows={3} />
          </div>
        </SecaoFormulario>

        {/* Ações - Destaque para Salvar e Imprimir */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 pb-8 pt-2">
          <Button variant="outline" className="gap-2 h-11">
            <Save className="h-4 w-4" />
            Salvar
          </Button>
          <Button className="gap-2 h-11 px-6 shadow-md bg-primary hover:bg-primary/90 text-base font-semibold">
            <Printer className="h-4 w-4" />
            Salvar e Imprimir Etiqueta
          </Button>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
