import { LayoutPrincipal } from "@/components/LayoutPrincipal";
import { TituloPagina } from "@/components/TituloPagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaginaNovoProduto() {
  const navigate = useNavigate();

  return (
    <LayoutPrincipal>
      <TituloPagina
        titulo="Novo Produto"
        descricao="Cadastre uma nova peça ou produto"
        acao={
          <Button variant="ghost" onClick={() => navigate("/estoque")} className="gap-2 text-muted-foreground h-9">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      <div className="max-w-2xl">
        <div className="card-premium p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="nome" className="text-xs font-medium">Nome do produto</Label>
              <Input id="nome" placeholder="Ex: Tela LCD iPhone 14 Pro" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="categoria" className="text-xs font-medium">Categoria</Label>
              <Input id="categoria" placeholder="Ex: Telas, Baterias" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sku" className="text-xs font-medium">SKU</Label>
              <Input id="sku" placeholder="Código do produto" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="custo" className="text-xs font-medium">Custo (R$)</Label>
              <Input id="custo" type="number" placeholder="0,00" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preco" className="text-xs font-medium">Preço de venda (R$)</Label>
              <Input id="preco" type="number" placeholder="0,00" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="quantidade" className="text-xs font-medium">Quantidade em estoque</Label>
              <Input id="quantidade" type="number" placeholder="0" className="h-10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="minimo" className="text-xs font-medium">Estoque mínimo</Label>
              <Input id="minimo" type="number" placeholder="0" className="h-10" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="fornecedor" className="text-xs font-medium">Fornecedor</Label>
              <Input id="fornecedor" placeholder="Nome do fornecedor" className="h-10" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="observacoes" className="text-xs font-medium">Observações</Label>
              <Textarea id="observacoes" placeholder="Observações sobre o produto..." rows={3} />
            </div>
          </div>
          <Button className="gap-2 h-10 shadow-sm">
            <Save className="h-4 w-4" />
            Salvar Produto
          </Button>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
