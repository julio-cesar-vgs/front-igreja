# Frontend Design Brief — Sistema Igreja Ipiranga
# Para uso no Claude Design (protótipo navegável)

> Cole este documento inteiro no Claude Design para gerar o protótipo navegável.
> Todas as telas, fluxos, dados e comportamentos estão descritos aqui.

---

## Contexto do Produto

**Sistema de gestão eclesiástica** para igrejas evangélicas.
Cada Igreja é um tenant isolado. Usuários têm roles que definem o que veem e fazem.
O fluxo central é: criar um culto → registrar o que aconteceu → conferir o financeiro.

**Usuário-alvo:** pastores, tesoureiros, cooperadores e membros da equipe da igreja.
**Tom visual:** sóbrio, profissional, levemente institucional. Não infantil.
**Paleta sugerida:** azul-escuro (#1e3a5f) como primária, branco, cinza-claro (#f5f7fa), dourado/âmbar (#d4a017) como acento em elementos financeiros.

---

## Telas e Navegação

### Mapa de Telas

```
[Login]
    ↓ (autenticado)
[Dashboard Principal]
    ├── [Lista de Cultos]
    │       ├── [Criar Culto]
    │       └── [Detalhe do Culto]
    │               ├── [Dashboard do Culto]  ← tela mais importante
    │               ├── [Louvores]
    │               ├── [Participantes] (cooperadores, músicos, presbíteros, visitantes)
    │               ├── [Financeiro do Culto] (dízimos + ofertas)
    │               └── [Conferência do Tesoureiro]
    ├── [Membros]
    │       ├── [Lista de Membros]
    │       └── [Detalhe do Membro]
    ├── [Relatórios Financeiros]
    └── [Auditoria / Logs]  (apenas ADMIN)
```

---

## Tela 1 — Login

**URL:** `/login`
**Acesso:** público

**Layout:**
- Tela dividida verticalmente: esquerda com imagem/ilustração de igreja, direita com formulário
- Logo da Igreja Ipiranga no topo do formulário
- Título: "Sistema de Gestão"

**Campos:**
- Email (input, required)
- Senha (input password, required)
- Botão "Entrar" (primary, cor azul-escuro)
- Link "Esqueci minha senha" (desabilitado neste protótipo)

**Feedback:**
- Loading spinner no botão ao submeter
- Toast de erro: "Credenciais inválidas" (vermelho)
- Toast de aviso: "Muitas tentativas. Aguarde 60 segundos" (amarelo) — rate limit
- Ao logar com sucesso → redirect para Dashboard Principal

**Dados mock para login:**
```
Email: admin@igreja.com
Senha: admin123
```

---

## Tela 2 — Dashboard Principal

**URL:** `/dashboard`
**Acesso:** qualquer role autenticado

**Header fixo:**
- Logo + nome da Igreja (ex: "Igreja Matriz Ipiranga")
- Nome do usuário logado + badge com sua role
- Ícone de notificação (badge com número)
- Botão "Sair" (logout)

**Sidebar esquerda (navegação principal):**
- 🏠 Dashboard
- ⛪ Cultos
- 👥 Membros
- 💰 Financeiro (só TESOUREIRO+)
- 📋 Auditoria (só ADMIN+)
- ⚙️ Configurações

**Conteúdo do Dashboard:**
4 cards de métricas no topo:
```
[Cultos este mês: 4]  [Membros ativos: 87]  [Arrecadado este mês: R$ 3.240]  [Visitantes: 12]
```

Seção "Cultos Recentes" — tabela com últimos 5:
```
Data        | Tema                  | Status         | Total
13/05/2026  | Culto da Família      | EM ANDAMENTO   | R$ 850,00
06/05/2026  | Pregação Especial     | FINALIZADO     | R$ 1.200,00
```

Seção "Alertas":
- Cultos com conferência pendente
- Divergências financeiras

---

## Tela 3 — Lista de Cultos

**URL:** `/cultos`
**Acesso:** qualquer autenticado

**Filtros (barra no topo):**
- Status: dropdown (Todos | Em Andamento | Finalizado)
- Período: date range picker (de → até)
- Tema: input de busca (busca parcial)
- Botão "Novo Culto" (verde, visível apenas para ADMIN+)

**Tabela de cultos:**
```
Data/Hora           | Tema              | Total Pessoas | Status         | Ações
31/05/2026 19:00   | Culto do Senhor   | 120           | EM ANDAMENTO   | [Ver] [Editar] [Excluir]
24/05/2026 19:00   | Culto da Família  | 95            | FINALIZADO     | [Ver]
```

- Status "EM ANDAMENTO" = badge azul
- Status "FINALIZADO" = badge verde
- Paginação no rodapé (20 por página)

---

## Tela 4 — Criar / Editar Culto

**URL:** `/cultos/novo` | `/cultos/{id}/editar`
**Acesso:** ADMIN+

**Formulário:**
- Data e Hora* (datetime picker)
- Tema (input texto, max 200 chars)
- Palavra Inicial Por (input texto, max 100 chars)
- Palavra Final Por (input texto, max 100 chars)
- Total de Pessoas (input numérico, mínimo 0)
- Descrição (textarea, max 500 chars)
- Status* (select: EM_ANDAMENTO | FINALIZADO)
- Botões: "Salvar" (primary) | "Cancelar" (secondary)

> **Nota:** Na edição, o campo `version` é enviado automaticamente (transparente para o usuário). Em caso de conflito de edição concorrente, exibir modal: "Este culto foi alterado por outro usuário. Recarregue a página."

---

## Tela 5 — Dashboard do Culto (tela principal)

**URL:** `/cultos/{id}/dashboard`
**Acesso:** qualquer autenticado
**Destaque:** tela mais rica e importante do sistema

**Layout:** duas colunas
- Coluna esquerda (70%): conteúdo principal por abas
- Coluna direita (30%): sidebar financeiro sticky

**Header da tela:**
- Data e hora do culto + tema
- Badge de status (EM ANDAMENTO em azul / FINALIZADO em cinza)
- Botão "Reabrir Culto" (vermelho, apenas ADMIN, visível quando FINALIZADO)
- Última atualização (timestamp)

**Sidebar direita — Resumo Financeiro:**
```
┌─────────────────────────────┐
│  RESUMO FINANCEIRO          │
│                             │
│  Dízimos       R$ 500,00   │
│  Ofertas       R$ 150,00   │
│  ─────────────────────────  │
│  TOTAL         R$ 650,00   │
│                             │
│  [Conferir Caixa]           │
│  (botão dourado, TESOUREIRO)│
│                             │
│  ✓ CONFERIDO em 31/05/2026  │
│  Tesoureiro: João Silva     │
└─────────────────────────────┘
```

**Abas do conteúdo principal:**

#### Aba "Louvores"
Lista de louvores com: nome da pessoa, hino (opcional)
Botão "+ Adicionar Louvor" (inline form abaixo da lista)
Cada item tem [editar] e [remover]

#### Aba "Participantes"
4 sub-seções em accordion:
- **Músicos** — lista com nome
- **Cooperadores** — lista com nome + cargo
- **Presbíteros** — lista com nome
- **Visitantes** — lista com nome + telefone

Botão "+ Adicionar" em cada seção

#### Aba "Financeiro"
Duas sub-abas: Dízimos | Ofertas

**Dízimos:**
```
Nome do Membro      | Valor      | Data       | Ações
João Silva          | R$ 100,00  | 31/05/2026 | [editar] [remover]
Maria Santos        | R$ 80,00   | 31/05/2026 | [editar] [remover]
─────────────────────────────────────────────
Total: R$ 500,00
```
Botão "+ Registrar Dízimo"

**Ofertas:**
```
Tipo        | Valor      | Forma Pag.  | Data       | Ações
REGULAR     | R$ 100,00  | DINHEIRO    | 31/05/2026 | [editar] [remover]
MISSOES     | R$ 50,00   | PIX         | 31/05/2026 | [editar] [remover]
```
Botão "+ Registrar Oferta"

#### Aba "Auditoria" (apenas ADMIN+)
Timeline de logs das alterações do culto

---

## Tela 6 — Modal: Adicionar Dízimo

**Trigger:** botão "+ Registrar Dízimo" na aba Financeiro

**Modal:**
- Nome do Membro* (input texto — não precisa ser membro cadastrado)
- Valor* (input numérico, ex: 100.00)
- Data* (date picker, default hoje)
- Forma de Pagamento (select: DINHEIRO | PIX | CARTÃO DÉBITO | CARTÃO CRÉDITO | TRANSFERÊNCIA | CHEQUE | DEPÓSITO)
- Observação (textarea opcional)
- Botões: "Salvar" | "Cancelar"

---

## Tela 7 — Modal: Adicionar Oferta

**Trigger:** botão "+ Registrar Oferta"

**Modal:**
- Valor* (input numérico)
- Data* (date picker)
- Tipo de Oferta* (select: REGULAR | MISSÕES | CONSTRUÇÃO | AÇÃO SOCIAL | ESPECIAL | GRATIDÃO | DEPARTAMENTO | OUTRO)
- Forma de Pagamento (mesmo select do dízimo)
- Nome do Ofertante (opcional — para oferta identificada)
- Observação (opcional)

---

## Tela 8 — Modal: Conferência do Tesoureiro

**Trigger:** botão "Conferir Caixa" (dourado)
**Acesso:** TESOUREIRO+
**Contexto:** só aparece se culto NÃO foi conferido ainda

**Layout do modal (grande):**

```
CONFERÊNCIA DE CAIXA — Culto 31/05/2026

Valores do Sistema (automático):
  Total de Dízimos:   R$ 500,00
  Total de Ofertas:   R$ 150,00
  TOTAL SISTEMA:      R$ 650,00

─────────────────────────────────

Sua Contagem Física:
  Total de Dízimos*:  [______] R$
  Total de Ofertas*:  [______] R$
  TOTAL CONFERIDO*:   [______] R$

Nome(s) do(s) tesoureiro(s):  [________________________]
Observações:                   [________________________]

─────────────────────────────────
⚠️ ATENÇÃO: Após confirmar, o culto ficará BLOQUEADO para edições.
             Apenas o ADMIN pode reabrir.

[Cancelar]                    [Confirmar Conferência]
```

**Após salvar:**
- Se valores conferem: modal verde "✓ Conferência registrada com sucesso! Status: CONFERIDO"
- Se diverge: modal amarelo "⚠️ Divergência de R$ X,XX detectada. Conferência salva com status DIVERGENTE"

---

## Tela 9 — Modal: Reabrir Culto

**Trigger:** botão "Reabrir Culto" (vermelho)
**Acesso:** ADMIN+

**Modal de confirmação:**
```
⚠️ Reabrir Culto Conferido

Este culto foi conferido em 31/05/2026 por João (Tesoureiro).
Total conferido: R$ 650,00

Ao reabrir, a conferência existente será REMOVIDA e o culto
voltará ao status EM ANDAMENTO para novas edições.

Motivo obrigatório (para auditoria):
[____________________________________________]

[Cancelar]          [Confirmar Reabertura]
```

---

## Tela 10 — Membros

**URL:** `/membros`
**Acesso:** qualquer autenticado

**Barra de ações:**
- Busca por nome (input)
- Filtro Status: Ativo | Inativo | Todos
- Filtro Dizimista: Todos | Só Dizimistas
- Botão "+ Cadastrar Membro" (COOPERADOR+)

**Cards de estatísticas:**
```
[Total: 95]   [Ativos: 87]   [Dizimistas: 34]
```

**Lista:**
```
Nome              | Contato      | Status | Dizimista | Ações
João da Silva     | (11) 99999   | Ativo  | ✓         | [Ver] [Editar]
Maria Oliveira    | (11) 88888   | Ativo  | —         | [Ver] [Editar]
```

---

## Tela 11 — Relatórios Financeiros

**URL:** `/financeiro/relatorios`
**Acesso:** TESOUREIRO+

**Filtros:**
- Período: date range (de → até)
- Tipo: Dízimos | Ofertas | Ambos

**Gráfico de barras:** arrecadação por culto no período

**Tabela detalhada:**
```
Data        | Culto              | Dízimos    | Ofertas    | Total
31/05/2026  | Culto do Senhor    | R$ 500,00  | R$ 150,00  | R$ 650,00
24/05/2026  | Culto da Família   | R$ 420,00  | R$ 130,00  | R$ 550,00
─────────────────────────────────────────────────────────────────────
TOTAL                             R$ 920,00   R$ 280,00   R$ 1.200,00
```

**Conferências Divergentes:**
Alerta em vermelho listando cultos com `status = DIVERGENTE`

---

## Tela 12 — Auditoria / Logs

**URL:** `/auditoria`
**Acesso:** ADMIN+

**Filtros:**
- Entidade (select: Todos | Culto | Dizimo | Oferta | Membro...)
- Ação (select: Todos | INSERT/UPDATE | DELETE | REABERTURA)
- Usuário
- Período

**Timeline:**
```
31/05/2026 21:00  │  admin@igreja.com (ADMIN)
                  │  REABERTURA — Culto 31/05/2026
                  │  Motivo: "Erro de lançamento no dízimo"
                  │  [Ver detalhes ↓]

31/05/2026 20:30  │  joao@igreja.com (TESOUREIRO)
                  │  INSERT/UPDATE — Dizimo
                  │  Valor: R$ 100,00 | Membro: João Silva
```

---

## Comportamentos Globais

### Notificações em Tempo Real (WebSocket)
Quando um item é adicionado ao culto que o usuário está visualizando:
- Toast discreto no canto inferior direito: "✓ Novo dízimo adicionado por João (Tesoureiro)"
- Counters nas abas atualizam automaticamente sem refresh
- Total financeiro na sidebar atualiza em tempo real

### Bloqueio de Culto Conferido
Quando o culto está conferido:
- Botões "+Adicionar" ficam desabilitados com tooltip: "Culto conferido. Apenas ADMIN pode reabrir."
- Banner amarelo no topo da tela de detalhe: "⚠️ Este culto foi conferido em [data]. Alterações bloqueadas."
- Campos do formulário ficam somente-leitura

### Toast de Erros por Status HTTP
| HTTP | Mensagem | Cor |
|------|----------|-----|
| 400 | Dados inválidos: [detalhe do campo] | Vermelho |
| 401 | Sessão expirada. Faça login novamente. | Laranja |
| 403 | Você não tem permissão para esta ação. | Vermelho |
| 404 | Recurso não encontrado. | Amarelo |
| 409 | Este culto já foi conferido. Alterações bloqueadas. | Laranja |
| 429 | Muitas tentativas. Aguarde 60 segundos. | Amarelo |
| 503 | Sistema temporariamente sobrecarregado. Tente em 1 minuto. | Laranja |

### Controle por Role (o que cada um vê)

| Elemento | MEMBRO | COOPERADOR | TESOUREIRO | ADMIN | SUPER_ADMIN |
|----------|--------|------------|------------|-------|-------------|
| Ver cultos e dashboard | ✓ | ✓ | ✓ | ✓ | ✓ |
| Criar/editar culto | — | — | — | ✓ | ✓ |
| Adicionar participantes | — | ✓ | ✓ | ✓ | ✓ |
| Registrar dízimos/ofertas | — | — | ✓ | ✓ | ✓ |
| Conferir caixa | — | — | ✓ | ✓ | ✓ |
| Reabrir culto | — | — | — | ✓ | ✓ |
| Ver auditoria | — | — | — | ✓ | ✓ |
| Gerenciar igrejas | — | — | — | — | ✓ |

---

## Dados Mock para o Protótipo

### Igreja
- Nome: Igreja Matriz Ipiranga
- Endereço: Rua dos Patriotas, 1000 — Ipiranga, SP
- ID: `3fa85f64-5717-4562-b3fc-2c963f66afa6`

### Usuários
```
Admin (João Pastor):       admin@igreja.com / admin123 / ROLE_ADMIN
Tesoureiro (Maria Silva):  tesoureiro@igreja.com / ROLE_TESOUREIRO
Cooperador (Carlos):       cooperador@igreja.com / ROLE_COOPERADOR
```

### Culto de exemplo (EM ANDAMENTO)
```
Data: 31/05/2026 19:00
Tema: "A Graça que Transforma"
Palavra Inicial: Pr. João Silva
Palavra Final: Pr. Pedro Santos
Total Pessoas: 120

Louvores: ["Ana Costa — Hino 123", "Roberto Lima — Louvor Especial"]
Músicos: ["Carlos Organista", "Paulo Violão"]
Cooperadores: ["Marcos (Portaria)", "Lúcia (Recepção)"]
Visitantes: ["Fernando Souza — (11) 98765-4321"]
Presbíteros: ["Pr. José Alves", "Pr. Manuel Costa"]

Dízimos: [
  {membro: "João Silva", valor: 200.00, forma: DINHEIRO},
  {membro: "Maria Santos", valor: 150.00, forma: PIX},
  {membro: "Pedro Alves", valor: 100.00, forma: TRANSFERENCIA}
]

Ofertas: [
  {tipo: REGULAR, valor: 150.00, forma: DINHEIRO},
  {tipo: MISSOES, valor: 80.00, forma: PIX}
]

Totais: Dízimos R$ 450,00 | Ofertas R$ 230,00 | GERAL R$ 680,00
```

### Culto de exemplo (FINALIZADO + CONFERIDO)
```
Data: 24/05/2026 19:00
Tema: "Culto da Família"
Total Pessoas: 95
Status: FINALIZADO
Conferência: CONFERIDO | Total: R$ 550,00 | Tesoureiro: Maria Silva
```

---

## Componentes de UI Sugeridos

### Cards de Métricas
Cantos arredondados, sombra leve, ícone colorido à esquerda, número grande, rótulo pequeno abaixo.

### Status Badges
- EM ANDAMENTO → `#2563eb` (azul) — pulsante sutil
- FINALIZADO → `#16a34a` (verde)
- CONFERIDO → `#16a34a` + ícone ✓
- DIVERGENTE → `#d97706` (âmbar) + ícone ⚠️
- BLOQUEADO → `#6b7280` (cinza)

### Tabelas
Header fixo, linhas alternadas (branco / #f9fafb), hover com destaque suave, ações aparecem no hover.

### Formulários Inline
Para adicionar itens ao culto: o formulário de adição aparece **dentro da lista** ao clicar "+" — sem abrir modal separado — exceto para conferência (modal obrigatório pelo impacto).

### Sidebar Financeira
Sticky no scroll, fundo branco com borda esquerda dourada (#d4a017), totais em fonte grande (1.5rem), botão "Conferir" em dourado.

---

*Brief gerado em 31/05/2026 — Igreja Ipiranga — Para uso no Claude Design*
