# Frontend Design Brief V2 — Igreja Ipiranga
# App Mobile — Protótipo Navegável (Claude Design)

> **Versão 2 — corrige os gaps identificados na revisão técnica do protótipo v1.**
> Cole este documento inteiro no Claude Design para gerar a versão revisada.
> Mantém tudo que estava bom na v1 e corrige/adiciona o que estava faltando.

> **Atualização 01/06/2026 — Contratos de API revisados:**
> Todos os endpoints agora usam DTOs dedicados de request e response (sem expor entidades JPA).
> Consulte `docs/PROTOTYPE_FIELD_CONTRACTS.md` para a lista completa de campos por tela.
> Mudanças que impactam o protótipo:
> - **Membros:** `GET /membros` e `GET /membros/{id}` retornam `MembroResponseDTO` (sem `igrejaId`/`version`)
> - **Igrejas:** `GET /igrejas` e `GET /igrejas/{id}` retornam `IgrejaResponseDTO` (sem campos internos)
> - **Louvores, Músicos, Cooperadores, Presbíteros, Visitantes:** respostas agora retornam `{id, nome, ...}` limpos
> - **Conferência:** `POST /conferencia` agora retorna `ConferenciaDTO` (inclui `conferenteNome`, `conferenteId`)
> - **Reabertura:** `POST /reabrir` retorna `CultoResponseDTO` (mesmo formato do detalhe do culto)
> - **Aprovar Conferência:** `PATCH /conferencias/{id}/aprovar` recebe `{ "observacaoAprovacao": "..." }` (antes era Map genérico)

---

## Contexto do Produto

Sistema de gestão eclesiástica para igrejas evangélicas brasileiras.
**Superfície: app mobile Android/PWA exclusivamente** (nesta versão).
**Público-alvo:** 30+ anos — pastores, tesoureiros, cooperadores, membros da equipe.
**Idioma:** Português brasileiro (pt-BR) em todo o app. Nunca usar inglês na interface.

---

## Design System (fonte da verdade)

### Cores
- **Primary (Azul Confiança):** `#2563eb` — botões principais, headers, ícones ativos
- **Accent (Dourado):** `#eab308` — badge "Em Andamento", destaques espirituais
- **Success (Verde):** `#22c55e` — dízimos, conferência OK, membro ativo
- **Warning (Âmbar):** `#f59e0b` — divergência financeira, alertas
- **Destructive (Vermelho):** `#ef4444` — ações irreversíveis (excluir, reabrir)
- **Background:** branco com leve tint azul (`hsl(220 20% 98%)`)
- **Foreground:** `#0f172a`
- **Muted:** `#64748b`
- **Border:** `hsl(220 13% 91%)`

Dark mode existe (`.dark`) mas o protótipo pode focar no light mode.

### Tipografia
- **Inter** para tudo (400/500/600/700/800)
- **Geist Mono** para valores monetários em tabelas e totais isolados
- Body mínimo: 16px. Inputs/botões: 17–18px. Títulos de tela: 20–24px. Totais financeiros hero: 28–36px.
- Labels de seção em UPPERCASE com letter-spacing largo: `font-bold text-xs uppercase tracking-widest text-muted-foreground`

### Ícones
**Lucide** exclusivamente. 24px, stroke 2px, line-style (sem fill — exceção: `heart` filled verde para dizimista).
Ícones-chave por função:
- `church` → marca / aba Cultos
- `home` → Início / Dashboard
- `users` → Membros
- `wallet` → Financeiro
- `dollar-sign` → dízimos (verde)
- `gift` → ofertas (dourado)
- `music` → louvores
- `mic-2` → músicos
- `user-check` → presbíteros / cooperadores
- `heart` → dizimista (filled verde)
- `eye` / `eye-off` → toggle privacidade de valores
- `check-circle-2` → conferência OK
- `alert-circle` → divergência
- `lock` → culto bloqueado/conferido
- `lock-open` → reabrir culto
- `trending-up` → crescimento
- `bar-chart-2` → relatórios
- `arrow-left` → voltar
- `plus` → adicionar / FAB
- `bell` → notificações

### Componentes Visuais
- **Radius base:** 16px (`rounded-2xl`). Cards internos: 12px. Pills/FAB: fully round.
- **Cards:** fundo branco, borda 1px `border`, sombra suave `shadow-sm`. Borda esquerda 4px accent para cultos em andamento: `border-l-4 border-l-accent`.
- **Headers das telas:** fundo `bg-primary` com `rounded-b-3xl`. Texto em `text-primary-foreground`.
- **Touch targets:** mínimo 48px de altura para tudo interativo.
- **Press feedback:** `active:scale-[0.98]` em cards, `active:scale-95` em botões.
- **Motion:** transições 150–300ms. Spinner no botão de login. Sem bounces ou parallax.
- **Bottom Navigation:** fixo no bottom, 5 abas, ativa com fill primary.

---

## Navegação Global

### Bottom Navigation (fixo em todas as telas principais)
5 abas:
1. `home` → Início (Dashboard)
2. `church` → Cultos
3. `users` → Membros
4. `wallet` → Financeiro
5. `bar-chart-2` → Relatórios

Aba ativa: ícone e label em `text-primary`, fundo pill `bg-primary/10`.
Aba inativa: `text-muted-foreground`.

### Mapa de Navegação

```
[Login]
    ↓
[Dashboard]
    ├── [Lista de Cultos]
    │       ├── [Detalhe do Culto]  ← tela mais complexa
    │       │       ├── tab Resumo
    │       │       ├── tab Louvores
    │       │       ├── tab Pessoas  (músicos + cooperadores + presbíteros + visitantes)
    │       │       ├── tab Financeiro (lista + totais + toggle privacidade)
    │       │       └── [Modal: Conferência Financeira]  ← criticamente revisado
    │       │               └── [Modal: Reabertura de Culto]  ← NOVO
    │       └── [Modal: Novo Culto]
    ├── [Lista de Membros]
    │       └── [Detalhe do Membro]
    ├── [Financeiro Global]  (relatório cross-cultos)
    └── [Relatórios]  ← NOVA TELA
```

---

## TELA 1 — Login

**Mantida da v1 com pequenas correções.**

**Layout:** tela inteira, gradiente `from-primary/5 to-background`. Logo centralizado (ícone `church` em círculo `bg-primary/10`). Formulário na parte inferior.

**Elementos:**
- Ícone `church` 48px em círculo branco com fundo `bg-primary/10` (96px diâmetro)
- H1: "Igreja Ipiranga" — `text-2xl font-bold text-center`
- Subtítulo: "Sistema de Gestão" — `text-base text-muted-foreground`
- Input Email: `h-14 text-lg rounded-xl`, autocomplete email
- Input Senha: `h-14 text-lg rounded-xl pr-12`, toggle eye/eye-off no canto direito
- Erros inline em vermelho (`text-destructive`) abaixo de cada campo
- Botão "Entrar": `h-14 w-full text-lg font-semibold rounded-xl bg-primary`
- Loading state: spinner + texto "Entrando..."
- Divisor "ou" com linhas horizontais
- Botão "Criar nova conta": `variant="outline" h-14 w-full text-lg rounded-xl`
- Link "Esqueci minha senha" em `text-primary`
- Footer: "Versão 1.0.0" em `text-muted-foreground text-sm`

**Validações visíveis:**
- "Digite seu e-mail" / "E-mail inválido"
- "Digite sua senha" / "Senha deve ter pelo menos 6 caracteres"

---

## TELA 2 — Dashboard (Início)

**Mantida da v1 com correção de roles.**

**Header azul arredondado na base (`rounded-b-3xl`):**
- Saudação: "Bem-vindo," (muted) + "Pastor João" (bold, nome do usuário logado)
- Ícone `bell` com badge dourado (notificações)
- Card translúcido `bg-primary-foreground/10` com ícone `church`, nome da igreja e `chevron-right`

**Cards de métricas (grid 2 colunas, -mt-4 para sobrepor o header):**
- Card Membros Ativos: ícone `users` em `bg-primary/10`, número grande, label
- Card Financeiro (mês): ícone `wallet` em `bg-success/20`, valor em R$, label

**Card Crescimento (linha inteira):**
- Ícone `trending-up` em `bg-accent/20`
- Badge verde `+12%`

**Seção "Próximo Culto":**
- Link "Ver todos" (text-primary)
- Card com `border-l-4 border-l-primary`, tema, data com ícone `calendar`, badge "Em 2 dias"

**Seção "Ações Rápidas" — grid 2x2:**
> ⚠️ **CORREÇÃO V2:** mostrar apenas ações permitidas pelo role do usuário logado.

| Botão | Ícone | Role mínimo |
|-------|-------|-------------|
| Novo Culto | `church` | ADMIN |
| Novo Membro | `users` | COOPERADOR |
| Registrar Dízimo | `dollar-sign` | TESOUREIRO |
| Relatórios | `bar-chart-2` | TESOUREIRO |

Se o usuário não tem permissão, o botão não aparece (não fica disabled — simplesmente some).
Para MEMBRO (role mais básico), as Ações Rápidas não aparecem.

---

## TELA 3 — Lista de Cultos

**Mantida da v1.**

**Header (fundo branco, sticky, com border-bottom):**
- H1 "Cultos" + botão "+ Novo" (visível apenas ADMIN+)
- Input busca com ícone `search`
- Chips de filtro scrolláveis: Todos | Em Andamento | Agendados | Finalizados

**Status badges:**
- `EM_ANDAMENTO` → `bg-accent text-accent-foreground` — borda esquerda 4px accent no card
- `AGENDADO` → `bg-muted text-muted-foreground`
- `FINALIZADO` → `bg-success/20 text-success`

**Cards de culto:**
- Tema (bold), data com ícone `calendar`, total de pessoas com ícone `users` (quando disponível)
- `chevron-right` no canto direito
- Estado vazio: ícone `calendar` centralizado + "Nenhum culto encontrado"

---

## TELA 4 — Detalhe do Culto

**REVISADA V2 — correções significativas.**

**Header azul (`rounded-b-3xl`):**
- Botão voltar (`arrow-left` em círculo translúcido)
- Badge de status (accent=Em Andamento, success=Finalizado)
- Tema do culto (bold)
- Data/hora

> ⚠️ **NOVO V2 — Banner de culto conferido (quando aplicável):**
> Quando o culto já foi conferido, exibir banner **abaixo do header** (fora das tabs):
> ```
> 🔒  Culto conferido em 31/05/2026. Alterações bloqueadas.
>     [Reabrir Culto]  ← apenas ADMIN+ (texto em vermelho/destructive)
> ```
> Fundo `bg-warning/10`, borda `border-warning`, ícone `lock`.
> Todos os botões "+ Adicionar" dentro das tabs ficam `disabled` com tooltip.

**Mini-cards de resumo (no header, 3 colunas):**
- Pessoas | Dízimos (R$) | Ofertas (R$)

**Tabs (4 abas, `grid-cols-4 h-12`):**

### Tab 1 — Resumo
Card com: Palavra Inicial, Palavra Final, Total Louvores, Total Visitantes

Card de status da conferência com `border-l-4`:
- Não conferido: `border-l-accent` + ícone `alert-circle` âmbar + botão "Conferir" (apenas TESOUREIRO+)
- Conferido: `border-l-success` + ícone `check-circle-2` verde + "Conferido em [data]"

### Tab 2 — Louvores
- Botão "+ Adicionar Louvor" (outline, `h-12`, desabilitado se conferido)
- Lista: avatar circular `bg-primary/10` com ícone `music`, nome da pessoa, hino (se houver)
- Cada item: swipe ou botão de delete (desabilitado se conferido)

### Tab 3 — Pessoas
> ⚠️ **CORREÇÃO V2 — adicionar Músicos e Presbíteros.**

4 seções em accordion/expansível, cada uma com label uppercase e botão "+ Adicionar":

**Músicos** — ícone `mic-2` em `bg-primary/10`
- Nome do músico
- Botão "+ Adicionar Músico"

**Cooperadores** — ícone `user-check` em `bg-secondary`
- Nome + cargo (ex: "Porteiro", "Recepção")
- Botão "+ Adicionar Cooperador"

**Presbíteros** — ícone `user-check` em `bg-accent/20`
- Nome do presbítero
- Botão "+ Adicionar Presbítero"

**Visitantes** — ícone `users` em `bg-accent/20`
- Nome + telefone
- Botão "+ Adicionar Visitante"

Todos os botões "+ Adicionar" ficam `disabled` quando culto está conferido.

### Tab 4 — Financeiro
> ⚠️ **CORREÇÃO V2 — listar itens individuais + toggle de privacidade.**

**Toggle de privacidade** (eye/eye-off) no canto superior direito da tab — mascara valores com `••••••`.

**Cards de totais (2 colunas):**
- Dízimos: `bg-success/10`, valor em verde, ícone `dollar-sign`
- Ofertas: `bg-accent/10`, valor em âmbar, ícone `gift`

**Lista de Dízimos:**
```
DÍZIMOS                              [+ Registrar]
─────────────────────────────────
João Silva                R$ 200,00
PIX · 31/05/2026          [editar] [remover]

Maria Santos              R$ 150,00
DINHEIRO · 31/05/2026     [editar] [remover]
```
Cada item: avatar com inicial do nome em `bg-primary/10`, nome, forma de pagamento + data, valor em verde.

**Lista de Ofertas:**
```
OFERTAS                              [+ Registrar]
─────────────────────────────────
Oferta Regular            R$ 100,00
DINHEIRO · 31/05/2026     [editar] [remover]

Oferta Missões            R$ 50,00
PIX · 31/05/2026          [editar] [remover]
```
Cada item: ícone `gift` em `bg-accent/10`, tipo da oferta, forma de pagamento + data, valor em âmbar.

**Card Total Geral (fundo primary):**
- "Total Geral" em texto muted
- Valor em `text-3xl font-bold` branco (ou `••••••••` se privacidade ativa)

**Botão "Conferir Caixa"** (destaque dourado `bg-accent`, `text-accent-foreground`, `h-12 w-full`, ícone `check-circle-2`):
- Visível apenas para TESOUREIRO+
- Desabilitado se já conferido (com tooltip "Caixa já conferido")

---

## MODAL A — Conferência Financeira

> ⚠️ **COMPLETAMENTE REVISADO V2 — alinhado ao `ConferenciaRequestDTO` da API.**

Ativado pelo botão "Conferir Caixa" na tab Financeiro do culto.
Modal de tela cheia (ou sheet que sobe de baixo para cima) com scroll interno.

**Header:**
- Botão voltar (`arrow-left`)
- Título: "Conferência Financeira"
- Subtítulo: nome e data do culto

**Bloco 1 — Valores do Sistema (somente leitura, fundo `bg-muted/50`):**
```
VALORES CALCULADOS PELO SISTEMA
────────────────────────────────
💲 Dízimos        R$ 3.450,00
🎁 Ofertas        R$ 1.280,00
   ─────────────────────────
   TOTAL SISTEMA  R$ 4.730,00
```
Estilo: cards com ícones, valores em `font-bold`. Total com fundo `bg-primary/10`.

**Bloco 2 — Contagem Física do Tesoureiro:**
Label: `VALORES CONTADOS FISICAMENTE` (uppercase, tracking wide)

3 inputs numéricos grandes:
- "Total de Dízimos contados" — `placeholder="R$ 0,00"` — `h-14 text-xl font-bold`
- "Total de Ofertas contadas" — idem
- "Total Geral contado" — calculado automaticamente conforme os dois acima, editável manualmente

**Bloco 3 — Comparação em Tempo Real:**
> ⚠️ Calcular à medida que o usuário digita (igual à v1, mas agora para dízimos e ofertas separados).

```
COMPARAÇÃO
────────────────────────────────────
                  Sistema    Contado
Dízimos:       R$ 3.450    R$ 3.450
Ofertas:       R$ 1.280    R$ 1.280
────────────────────────────────────
Total:         R$ 4.730    R$ 4.730
Diferença:                 R$ 0,00

✓ CONFERÊNCIA OK — Os valores conferem perfeitamente.
```

**Status visual dinâmico (atualiza em tempo real):**

Quando CONFERIDO:
```
╔══════════════════════════════════╗
║  ✓  Conferência OK               ║
║     Os valores conferem.         ║
╚══════════════════════════════════╝
```
Fundo `bg-success/10`, borda `border-success`, ícone `check-circle-2` verde, texto verde.

Quando DIVERGENTE:
```
╔══════════════════════════════════╗
║  ⚠  Divergência de R$ 45,00      ║
║     Os valores não conferem.     ║
╚══════════════════════════════════╝
```
Fundo `bg-warning/10`, borda `border-warning`, ícone `alert-circle` âmbar, texto âmbar.

**Bloco 4 — Responsáveis pela Conferência (princípio dos quatro olhos):**
Label: `RESPONSÁVEIS PELA CONFERÊNCIA`

> ⚠️ **OBRIGATÓRIO:** a conferência exige presença de duas pessoas — o tesoureiro logado e um conferente físico.

- Campo "Tesoureiro" — somente leitura — nome do usuário logado (preenchido automaticamente)
- Campo "Nome do Conferente" — input texto — **obrigatório** — `placeholder="Nome de quem conferiu junto"`
  - Erro inline se vazio: "O nome do conferente é obrigatório"
  - Validação: 2–100 caracteres
- Campo "Conferente é usuário do sistema?" — toggle (opcional)
  - Se ativado: exibe select de usuários para vincular o `conferenteId`
- Campo "Outros participantes" — input texto — opcional — `placeholder="Ex: Pr. José, Diácono Paulo"`

**Bloco 5 — Observações (opcional):**
- Textarea com placeholder: "Ex: Alguns trocados separados para troco..."

**Aviso obrigatório (sempre visível antes dos botões):**
```
⚠️  Após confirmar, o culto ficará BLOQUEADO para novas alterações.
    Apenas o Administrador pode reabrir.
```
Fundo `bg-destructive/5`, borda `border-destructive/20`, texto `text-destructive/80 text-sm`.

**Botões fixos no bottom (above bottom nav):**
- "Cancelar" — `variant="outline"` flex-1
- "Confirmar Conferência" — cor varia: `bg-success` se CONFERIDO / `bg-warning text-white` se DIVERGENTE
  - Texto varia: "Confirmar" / "Conferir Mesmo Assim"

---

## MODAL B — Reabertura de Culto ← NOVO

> ⚠️ **NOVO V2 — tela que não existia no protótipo.**

Ativado pelo link "Reabrir Culto" no banner de culto bloqueado.
Visível apenas para ADMIN e SUPER_ADMIN.

**Apresentação:** modal de confirmação (sheet ou bottom sheet, não tela cheia).

**Conteúdo:**
```
🔓 Reabrir Culto Conferido

Este culto foi conferido em 31/05/2026.
Total conferido: R$ 4.730,00
Tesoureiro: Maria Silva
Conferente: João Diácono

Ao reabrir, a conferência existente será
REMOVIDA e o culto voltará a aceitar
novas alterações.

MOTIVO (obrigatório para auditoria)
[                                        ]
[  Descreva o motivo da reabertura...   ]

[Cancelar]          [Confirmar Reabertura]
```

**Elementos:**
- Ícone `lock-open` em círculo `bg-warning/10` no topo do modal
- Resumo dos dados da conferência (data, total, tesoureiro)
- Campo motivo: `textarea` `rows={3}`, obrigatório, borda vermelha se submetido vazio
- Botão "Cancelar": `variant="outline"`
- Botão "Confirmar Reabertura": `bg-destructive text-white` — desabilitado enquanto motivo estiver vazio

**Após confirmar:** Toast verde "Culto reaberto com sucesso" + retorno à tela de detalhe com banner removido.

---

## TELA 5 — Financeiro Global

**REVISADA V2 — remover ação de adicionar dízimo/oferta daqui.**

> Dízimos e ofertas sempre pertencem a um culto específico. Esta tela é para visão consolidada, não para registro.

**Header azul (sticky):**
- H1 "Financeiro"
- Toggle eye/eye-off para privacidade (estado global da tela)
- Subtítulo: "Última conferência: 11/05/2026"

**Cards de resumo (manter gradientes da v1):**
- Dízimos: gradiente `from-success to-success/80`, ícone `dollar-sign`, valor total, `+12.5% este mês`
- Ofertas: gradiente `from-accent to-accent/80`, ícone `gift`, valor total, `+5.2% este mês`
- Total Recebido: `border-2 border-primary`, breakdown em mini-cards

**Filtro de período (NOVO V2):**
Chips scrolláveis abaixo dos cards: `Este Mês` | `Mês Anterior` | `Últimos 3 meses` | `Este Ano`

**Botões de ação — CORRIGIDOS V2:**
- ~~"Adicionar Dízimo"~~ — REMOVIDO
- ~~"Adicionar Oferta"~~ — REMOVIDO

Substituir por: botão único "Ver Relatório Completo" → navega para Relatórios.

**Transações Recentes (manter da v1):**
Lista das últimas transações cross-cultos. Cada item: tipo (DIZIMO/OFERTA), nome/descrição, data, forma de pagamento, valor. Ícone `dollar-sign` verde para dízimos, `gift` âmbar para ofertas.

**Botão fixo no bottom:**
"Conferir Financeiro" → navega para o culto EM_ANDAMENTO mais recente.

---

## TELA 6 — Lista de Membros

**Mantida da v1.**

**Header azul (sticky):**
- H1 "Membros" + busca com `search` em fundo `primary-foreground`
- Botão filtro (`filter` icon)

**Chips de filtro:** Todos | Ativos | Inativos | Dizimistas (NOVO)

**Cards de membros:**
- Avatar circular com inicial do nome em `bg-primary/10`
- Nome + `heart` filled verde se dizimista
- Telefone em muted
- Badge status: verde "Ativo" / cinza "Inativo"
- `chevron-right`

**FAB (Floating Action Button):**
- `+` em círculo dourado (`bg-accent`) — `bottom-24 right-4` — apenas COOPERADOR+

**Estado vazio:** ícone `users` + "Nenhum membro encontrado"

---

## TELA 7 — Detalhe do Membro

**Mantida da v1.**

**Header azul com gradiente vertical:**
- Avatar circular com inicial (80px)
- Nome completo `text-2xl font-bold`
- "Membro desde [data]"
- Badges: "Ativo" em translúcido branco + "Dizimista" em dourado (se aplicável)

**Seções em cards:**

**CONTATO** (uppercase label):
- `phone` + Telefone
- `mail` + Email (break-all)
- `map-pin` + Endereço

**INFORMAÇÕES PESSOAIS:**
- `calendar` + Data de nascimento
- `calendar` + Data de membresia

**CONTRIBUIÇÕES:**
- Grid 2 colunas: "Dízimos em 2026" (verde) + "Total Dízimos" (primary)

**OBSERVAÇÕES** (se existir): texto corrido `text-sm leading-relaxed`

**Botão fixo:** "Editar" (`bg-primary`, com ícone `edit`) — apenas ADMIN e COOPERADOR+

---

## TELA 8 — Relatórios ← NOVA

> **Tela que estava prometida no Dashboard mas não existia. NOVO V2.**

**Header azul (sticky):**
- H1 "Relatórios"
- Subtítulo: "Período: Maio 2026" (dinâmico)

**Seletor de período (chips + date range se necessário):**
`Este Mês` | `Mês Anterior` | `Últimos 3 meses` | `Este Ano`

**Cards de totais do período:**
- Dízimos total: gradiente verde, ícone `dollar-sign`, valor, comparação com período anterior (`+12%`)
- Ofertas total: gradiente âmbar, ícone `gift`, valor, comparação
- Total geral: borda primary, breakdown mini

**Seção "Por Culto" — tabela simplificada:**
```
ARRECADAÇÃO POR CULTO

31/05/2026 · Culto do Senhor      ─────────
  Dízimos:  R$ 3.450     Ofertas: R$ 1.280
  Total: R$ 4.730   [✓ CONFERIDO]

24/05/2026 · Culto da Família     ─────────
  Dízimos:  R$ 2.100     Ofertas: R$   900
  Total: R$ 3.000   [✓ CONFERIDO]
```
Cada item: data + tema, totais de dízimos e ofertas, badge de status de conferência.

**Seção "Conferências Pendentes":**
Se houver cultos não conferidos com data passada:
```
⚠  2 cultos com conferência pendente
   > Culto 17/05/2026 — Conferir agora
   > Culto 10/05/2026 — Conferir agora
```
Fundo `bg-warning/10`, borda `border-warning`.

---

## Dados Mock para o Protótipo

### Usuário logado (ADMIN)
```
Nome: Pastor João
Email: admin@igreja.com
Role: ADMIN
Igreja: Igreja Matriz Ipiranga
```

### Culto 1 — Em Andamento (não conferido)
```
Tema: "A Graça que Transforma"
Data: 31/05/2026 19:00
Status: EM_ANDAMENTO
Total Pessoas: 120
Palavra Inicial: Pr. João Silva
Palavra Final: Pr. Pedro Santos
Conferido: NÃO

Louvores:
  - Ana Costa · "Grande é o Senhor"
  - Roberto Lima · "Quão Grande és Tu"

Músicos:
  - Carlos Teclado
  - Paulo Violão

Cooperadores:
  - Marcos Silva · Portaria
  - Lúcia Alves · Recepção

Presbíteros:
  - Pr. José Alves
  - Pr. Manuel Costa

Visitantes:
  - Fernando Souza · (11) 98765-4321

Dízimos:
  - João Silva · R$ 200,00 · PIX
  - Maria Santos · R$ 150,00 · DINHEIRO
  - Pedro Alves · R$ 100,00 · TRANSFERENCIA
  TOTAL: R$ 450,00

Ofertas:
  - Regular · R$ 150,00 · DINHEIRO
  - Missões · R$ 80,00 · PIX
  TOTAL: R$ 230,00

TOTAL GERAL: R$ 680,00
```

### Culto 2 — Finalizado (conferido)
```
Tema: "Culto da Família"
Data: 24/05/2026 19:00
Status: FINALIZADO
Total Pessoas: 95
Conferência: CONFERIDO
  Total Sistema: R$ 3.000,00
  Total Contado: R$ 3.000,00
  Diferença: R$ 0,00
  Tesoureiro: Maria Silva (usuário logado)
  Conferente: João Diácono (conferente físico)
  Data: 24/05/2026
```

### Culto 3 — Finalizado (divergente)
```
Tema: "Pregação Especial"
Data: 17/05/2026 19:00
Status: FINALIZADO
Conferência: DIVERGENTE
  Total Sistema: R$ 2.500,00
  Total Contado: R$ 2.455,00
  Diferença: -R$ 45,00
```

### Membros
```
1. João Silva Santos · Ativo · Dizimista · (11) 98765-4321
2. Maria Santos · Ativa · Dizimista · (11) 98765-4322
3. Pedro Oliveira · Inativo · Não dizimista · (11) 98765-4323
4. Ana Costa · Ativa · Dizimista · (11) 98765-4324
5. Carlos Gomes · Ativo · Não dizimista · (11) 98765-4325
```

---

## Comportamentos Globais

### Banner de Culto Conferido
Quando o culto detalhe está com conferência registrada, exibir **fora das tabs, logo abaixo do header**:
```
[🔒]  Culto conferido em 24/05/2026
      Alterações bloqueadas.          [Reabrir]
```
- `[Reabrir]` visível apenas para ADMIN+, em `text-destructive font-medium`
- Todos os botões de escrita nas tabs ficam `disabled` com `opacity-50 cursor-not-allowed`

### Toggle de Privacidade (valores financeiros)
- Presente em: tab Financeiro do culto, tela Financeiro global
- Estado: `eye` (valores visíveis) / `eye-off` (valores `••••••••`)
- Aplica-se a TODOS os valores monetários da tela ao mesmo tempo
- Não persiste entre telas (reset ao sair)

### Toasts de Feedback
Aparecem no topo, 3 segundos de duração, com ícone:
- ✅ Verde: "Dízimo registrado com sucesso", "Culto reaberto"
- ⚠️ Âmbar: "Divergência detectada — Conferência salva", "Sessão expirando em 5 minutos"
- ❌ Vermelho: "Erro ao salvar. Tente novamente.", "Sessão expirada. Faça login novamente."

### Sessão Expirada (Token JWT)
Ao receber 401 da API, exibir:
```
Sessão expirada
Sua sessão expirou. Faça login novamente.
[Entrar novamente]
```
Bottom sheet que fecha o app e leva ao Login.

### Estados de Loading
- Telas com dados: skeleton loading (retângulos cinzas animados no lugar do conteúdo)
- Botões de ação: spinner Lucide `loader-2 animate-spin` substituindo o ícone normal
- FAB: desabilitado durante operação

### Estado Vazio
Cada lista tem seu estado vazio com ícone Lucide centralizado + mensagem:
- Cultos: `calendar` + "Nenhum culto encontrado"
- Membros: `users` + "Nenhum membro encontrado"
- Dízimos: `dollar-sign` + "Nenhum dízimo registrado neste culto"
- Ofertas: `gift` + "Nenhuma oferta registrada neste culto"
- Louvores: `music` + "Nenhum louvor adicionado"

---

## Resumo das Mudanças V1 → V2

| Tela | Mudança |
|------|---------|
| **Dashboard** | Ações Rápidas condicionais por role |
| **Detalhe do Culto — tab Pessoas** | + Músicos + Presbíteros (seções separadas) |
| **Detalhe do Culto — tab Financeiro** | + Lista individual de dízimos/ofertas + toggle privacidade |
| **Detalhe do Culto — geral** | + Banner de culto bloqueado + desabilitação geral pós-conferência |
| **Conferência** | Inputs separados por tipo (dízimos + ofertas) + **conferente obrigatório (dois olhos)** + aviso de bloqueio |
| **Financeiro Global** | Remove botões de adicionar + adiciona filtro de período |
| **Reabertura** | Modal novo com motivo obrigatório + confirmação em vermelho |
| **Relatórios** | Tela nova com breakdown por culto + alerta de conferências pendentes |

---

*Brief V2 — 31/05/2026 — Igreja Ipiranga · App Mobile*
*Baseado na revisão técnica do protótipo v1 e nos contratos da API (ver DOCUMENTATION.md)*
