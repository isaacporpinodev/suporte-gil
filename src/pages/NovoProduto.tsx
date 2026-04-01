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
          <Button variant="ghost" onClick={() => navigate("/estoque")} className="gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        }
      />

      <div className="max-w-2xl">
        <div className="rounded-lg border bg-card p-5 shadow-sm space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="nome">Nome do produto</Label>
              <Input id="nome" placeholder="Ex: Tela LCD iPhone 14 Pro" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="categoria">Categoria</Label>
              <Input id="categoria" placeholder="Ex: Telas, Baterias" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sku">SKU</Label>
              <Input id="sku" placeholder="Código do produto" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="custo">Custo (R$)</Label>
              <Input id="custo" type="number" placeholder="0,00" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preco">Preço de venda (R$)</Label>
              <Input id="preco" type="number" placeholder="0,00" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="quantidade">Quantidade em estoque</Label>
              <Input id="quantidade" type="number" placeholder="0" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="minimo">Estoque mínimo</Label>
              <Input id="minimo" type="number" placeholder="0" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="fornecedor">Fornecedor</Label>
              <Input id="fornecedor" placeholder="Nome do fornecedor" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea id="observacoes" placeholder="Observações sobre o produto..." rows={3} />
            </div>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Salvar Produto
          </Button>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
