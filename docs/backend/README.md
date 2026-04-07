# Backend Docs

Esta pasta registra regras de negocio, contratos esperados e decisoes de modelagem para o backend do `suporte-gil`.

Objetivos:
- alinhar frontend e backend em torno das mesmas entidades e filtros
- evitar ambiguidade em metricas do dashboard
- registrar o que hoje e mock visual e o que precisa virar dado real
- servir como referencia para desenvolvimento humano e uso por agentes

Documentos:
- `ordens-servico.md`: dominio principal de OS, status, datas e filtros
- `dashboard.md`: definicao das metricas e cards do dashboard
- `boas-praticas.md`: diretrizes de implementacao para este projeto

Principios deste projeto:
- nomes de campos devem refletir o evento de negocio real
- filtros da UI devem mapear para contratos claros da API
- cards do dashboard devem usar dados agregados do backend
- nao reutilizar campos errados por conveniencia visual

Exemplo:
- `dataEntrada` nao substitui `dataEntrega`
- `Entregues Hoje` exige `status = entregue` e `dataEntrega = hoje`

