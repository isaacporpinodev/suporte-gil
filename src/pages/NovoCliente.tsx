import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaginaNovoCliente() {
  const navigate = useNavigate();

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Novo Cliente"
        descricao="Cadastre um novo cliente para futuras ordens de serviço"
        acao={
          <Button variant="ghost" onClick={() => navigate("/clientes")} className="gap-2 text-muted-foreground h-9">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      <div className="max-w-3xl">
        <div className="card-premium p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8">
              <UserRound className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Cadastro</p>
              <h3 className="mt-0.5 text-sm font-semibold leading-none text-foreground">Dados do Cliente</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="nome" className="text-xs font-medium">Nome completo</Label>
              <Input id="nome" placeholder="Ex: Maria Silva" className="h-10" autoFocus />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="telefone" className="text-xs font-medium">Telefone</Label>
              <Input id="telefone" placeholder="(00) 00000-0000" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium">E-mail</Label>
              <Input id="email" type="email" placeholder="cliente@exemplo.com" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cpf" className="text-xs font-medium">CPF</Label>
              <Input id="cpf" placeholder="000.000.000-00" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="nascimento" className="text-xs font-medium">Data de nascimento</Label>
              <Input id="nascimento" type="date" className="h-10" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="endereco" className="text-xs font-medium">Endereço</Label>
              <Input id="endereco" placeholder="Rua, número, bairro, cidade" className="h-10" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="observacoes" className="text-xs font-medium">Observações</Label>
              <Textarea id="observacoes" placeholder="Preferências, observações ou informações relevantes..." rows={4} />
            </div>
          </div>

          <div className="mt-5">
            <Button className="gap-2 h-10 shadow-sm">
              <Save className="h-4 w-4" />
              Salvar Cliente
            </Button>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
