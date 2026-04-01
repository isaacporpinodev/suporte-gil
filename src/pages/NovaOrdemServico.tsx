import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Printer, ArrowLeft } from "lucide-react";
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

export default function PaginaNovaOS() {
  const navigate = useNavigate();

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Nova Ordem de Serviço"
        descricao="Cadastre uma nova OS rapidamente"
        acao={
          <Button variant="ghost" onClick={() => navigate("/ordens")} className="gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      <div className="max-w-4xl space-y-6">
        {/* Cliente */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Cliente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cliente">Nome do cliente</Label>
              <Input id="cliente" placeholder="Nome completo" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" placeholder="(00) 00000-0000" />
            </div>
          </div>
        </div>

        {/* Aparelho */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Aparelho</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="marca">Marca</Label>
              <Input id="marca" placeholder="Ex: Apple, Samsung" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modelo">Modelo</Label>
              <Input id="modelo" placeholder="Ex: iPhone 14 Pro" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="imei">IMEI / Serial</Label>
              <Input id="imei" placeholder="Número de identificação" />
            </div>
          </div>
        </div>

        {/* Problema */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Problema</h3>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="defeito">Defeito relatado</Label>
              <Textarea id="defeito" placeholder="Descreva o problema relatado pelo cliente..." rows={3} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="acessorios">Acessórios entregues</Label>
              <Input id="acessorios" placeholder="Ex: Carregador, capinha, película" />
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Checklist de Entrada</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {checklistEntrada.map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm cursor-pointer p-2 rounded-md hover:bg-muted/50 transition-colors">
                <Checkbox />
                <span className="text-foreground">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Observações e Técnico */}
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Observações e Responsável</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="tecnico">Técnico responsável</Label>
              <Select>
                <SelectTrigger>
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
              <Label htmlFor="previsao">Previsão de entrega</Label>
              <Input id="previsao" type="date" />
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label htmlFor="observacoes">Observações</Label>
            <Textarea id="observacoes" placeholder="Observações adicionais..." rows={3} />
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-3 pb-6">
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Salvar
          </Button>
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Salvar e Imprimir Etiqueta
          </Button>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
