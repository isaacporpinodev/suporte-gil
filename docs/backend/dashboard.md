# Dashboard

## Objetivo

Definir como os cards e listas do dashboard devem ser alimentados pelo backend.

## Principio geral

O dashboard nao deve depender de mocks montados no frontend para representar a operacao real.

O backend deve expor:
- contagens agregadas por status
- metricas financeiras resumidas
- listas curtas de ultimas ordens
- alertas de estoque baixo

## Cards atuais

### OS Abertas

- fonte: contagem de OS com `status = aberta`

### Em Andamento

- fonte: contagem de OS com `status = em_andamento`

### Prontas

- fonte: contagem de OS com `status = pronta`

### Entregues Hoje

- fonte: contagem de OS com `status = entregue` e `dataEntrega = hoje`

### Faturamento do Dia

- fonte: soma de recebimentos confirmados do dia
- nao usar apenas ordens prontas

### Saldo Atual

- fonte: consolidacao financeira da operacao
- regra depende do modulo financeiro

## Endpoint sugerido

```ts
type DashboardResponse = {
  ordens: {
    abertas: number;
    emAndamento: number;
    prontas: number;
    entreguesHoje: number;
    aguardandoPeca?: number;
    canceladas?: number;
  };
  financeiro: {
    faturamentoDiaCents: number;
    saldoAtualCents: number;
  };
  ordensRecentes: Array<{
    id: string;
    numero: string;
    clienteNome: string;
    aparelhoNome: string;
    status: string;
    dataReferencia: string;
    valorTotalCents: number;
  }>;
  alertasEstoque: Array<{
    produtoId: string;
    produtoNome: string;
    quantidadeAtual: number;
    estoqueMinimo: number;
  }>;
};
```

## Regras importantes

- nomes dos cards devem refletir exatamente o criterio usado
- se a regra for "hoje", precisa existir data operacional correspondente
- contagens do dashboard e listagens filtradas devem usar a mesma semantica

## Exemplo de alinhamento frontend-backend

Se o card envia:

```ts
navigate("/ordens", { state: { filtroInicial: "pronta" } })
```

O backend precisa aceitar o mesmo conceito de status na listagem.

