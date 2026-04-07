# Ordens de Servico

## Objetivo

Definir a estrutura minima esperada para ordens de servico, seus status e os filtros usados pelo frontend.

## Entidade principal

Campos minimos recomendados:

```ts
type OrdemServico = {
  id: string;
  clienteId: string;
  tecnicoId?: string | null;
  aparelhoId?: string | null;
  numero: string;
  status:
    | "aberta"
    | "em_andamento"
    | "aguardando_peca"
    | "pronta"
    | "entregue"
    | "cancelada";
  diagnostico?: string | null;
  observacoes?: string | null;
  valorPecasCents: number;
  valorMaoDeObraCents: number;
  descontoCents: number;
  valorTotalCents: number;
  dataEntrada: string;
  dataInicioServico?: string | null;
  dataConclusao?: string | null;
  dataEntrega?: string | null;
  dataCancelamento?: string | null;
  createdAt: string;
  updatedAt: string;
};
```

## Regras de status

- `aberta`: OS criada e ainda nao iniciada
- `em_andamento`: reparo em execucao
- `aguardando_peca`: parada aguardando item externo ou interno
- `pronta`: reparo concluido, aguardando retirada ou entrega
- `entregue`: atendimento encerrado com item entregue ao cliente
- `cancelada`: OS encerrada sem conclusao operacional normal

## Regras de datas

- `dataEntrada`: quando o equipamento entrou na loja
- `dataInicioServico`: quando o tecnico iniciou a execucao
- `dataConclusao`: quando o servico foi finalizado
- `dataEntrega`: quando o equipamento foi efetivamente entregue
- `dataCancelamento`: quando a OS foi cancelada

Nao usar:
- `dataEntrada` para medir entregas
- `createdAt` como substituto de data operacional

## Filtros esperados pelo frontend

Hoje o frontend ja usa:
- busca por numero da OS
- busca por nome do cliente
- busca por telefone
- filtro por status

Contrato sugerido:

```ts
type ListarOrdensParams = {
  busca?: string;
  status?: "aberta" | "em_andamento" | "aguardando_peca" | "pronta" | "entregue" | "cancelada";
  dataEntradaDe?: string;
  dataEntradaAte?: string;
  dataEntregaDe?: string;
  dataEntregaAte?: string;
  tecnicoId?: string;
  clienteId?: string;
  pagina?: number;
  limite?: number;
};
```

## Casos importantes

### Card "OS Abertas"

Deve filtrar:
- `status = aberta`

### Card "Em Andamento"

Deve filtrar:
- `status = em_andamento`

### Card "Prontas"

Deve filtrar:
- `status = pronta`

### Card "Entregues Hoje"

Deve filtrar:
- `status = entregue`
- `dataEntrega` dentro do dia atual

Sem `dataEntrega`, esta metrica fica incorreta.

## Observacoes de modelagem

- valores monetarios devem ser persistidos em centavos
- datas devem ser armazenadas em formato consistente, preferencialmente ISO 8601
- status deve ser enumerado no backend, nao string livre
- transicoes de status devem ser validadas no backend

