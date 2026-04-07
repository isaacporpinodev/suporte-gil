# Boas Praticas

## 1. Separar dado operacional de dado visual

- frontend pode formatar
- backend deve definir a verdade do negocio
- nao modelar API com base apenas no layout atual

## 2. Preferir contratos estaveis

- use nomes de campos claros e consistentes
- evite respostas ambiguuas ou dependentes de contexto de tela
- mantenha enums e filtros previsiveis

Exemplo bom:
- `status = "pronta"`
- `dataEntrega = "2026-04-07T14:30:00Z"`

Exemplo ruim:
- `tipo = "finalizada2"`
- `data = "07/04/2026"`

## 3. Persistir dinheiro em centavos

- evitar `float` para valores financeiros
- formatacao monetaria deve acontecer no frontend

## 4. Usar datas em formato padrao

- preferir ISO 8601
- explicitar timezone nas regras de negocio quando necessario
- distinguir data tecnica de data comercial

## 5. Validar transicoes de status

Exemplo:
- `aberta -> em_andamento` permitido
- `em_andamento -> pronta` permitido
- `pronta -> entregue` permitido
- `cancelada -> em_andamento` normalmente nao permitido

## 6. Centralizar regras de dashboard no backend

- cards nao devem ser recalculados de formas diferentes em cada tela
- a mesma definicao usada no dashboard deve refletir as listagens filtradas

## 7. Planejar busca e filtros como API de produto

Para ordens:
- busca textual
- status
- periodo de entrada
- periodo de entrega
- tecnico
- cliente
- paginacao

## 8. Nao misturar mock com contrato final

- se o frontend estiver em mock, deixar isso documentado
- marcar claramente quais campos ainda sao provisiorios
- nao transformar mock em dependencia silenciosa do backend

## 9. Pensar em auditoria

Para ordens e financeiro, vale manter historico de:
- mudanca de status
- usuario responsavel pela acao
- momento da alteracao

## 10. Priorizar simplicidade

- comece com poucos endpoints bem definidos
- evite abstrair demais antes do fluxo principal estabilizar
- modele primeiro o que sustenta OS, dashboard e financeiro

## Prioridades recomendadas para este projeto

1. Modelar corretamente `ordens_servico`
2. Criar campos de datas operacionais reais, incluindo `dataEntrega`
3. Expor listagem de OS com filtros alinhados ao frontend
4. Expor agregados do dashboard
5. Integrar financeiro com eventos reais de pagamento

