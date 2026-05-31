# Guia de Protótipos - Aplicativo Android Igreja Ipiranga

## Visao Geral

Este documento descreve os protótipos de interface (UI/UX) desenvolvidos para o aplicativo Android de gestão de igrejas evangelicas. Os protótipos foram criados seguindo as melhores práticas de usabilidade para usuarios de 30+ anos.

---

## Como Acessar os Protótipos

1. Inicie a aplicação com `pnpm dev`
2. Navegue até: `http://localhost:3000/prototype`
3. Interaja com as telas usando os botões de navegação

---

## Arquitetura dos Protótipos

```
components/prototype/
├── phone-frame.tsx              # Moldura do telefone (iOS-style)
├── bottom-navigation.tsx        # Barra de navegação inferior
└── screens/
    ├── login-screen.tsx         # Tela de login
    ├── dashboard-screen.tsx     # Dashboard principal
    ├── cultos-screen.tsx        # Lista de cultos
    ├── culto-detalhe-screen.tsx # Detalhe do culto (com abas)
    ├── membros-screen.tsx       # Lista de membros
    ├── membro-detalhe-screen.tsx # Perfil do membro
    ├── financeiro-screen.tsx    # Resumo financeiro
    └── conferencia-screen.tsx   # Conferência financeira

app/prototype/
└── page.tsx                     # Página principal dos protótipos
```

---

## Decisoes de Design

### Público-Alvo: 30+ Anos

**Características implementadas:**

- **Tipografia Grande**: Fonte Inter 16px+ para corpo, 24px+ para títulos
- **Botões Grandes**: Área de toque mínima 48x48px (Material Design 3)
- **Espacamento Generoso**: Padding 16px-24px em elementos principais
- **Contraste Alto**: Cores com alto contraste de luminância (WCAG AA+)
- **Linguagem Simples**: Rótulos claros e diretos, sem jargão técnico

### Paleta de Cores

| Elemento | Cor | Funcao |
|----------|-----|--------|
| Primary | Azul #2563eb (oklch 0.45 0.15 250) | Principal, ações importantes |
| Success | Verde #22c55e (oklch 0.55 0.15 145) | Dízimos, confirmações |
| Accent | Dourado #eab308 (oklch 0.75 0.12 85) | Ofertas, destaques |
| Destructive | Vermelho #ef4444 (oklch 0.55 0.22 25) | Erros, exclusões |
| Warning | Laranja #f59e0b (oklch 0.75 0.15 85) | Alertas, divergências |

**Racional**: Azul transmite confiança (importante para financeiro). Dourado remete a espiritualidade. Verde e vermelho são reconhecidos universalmente.

### Layout

**Primário**: Flexbox para 99% dos casos (alinhamento e distribuição)
**Secundário**: Grid apenas para matrizes de dados simples
**Evitado**: Absolute positioning, floats

**Responsividade**: Mobile-first. Testado em viewport 360px-480px (Android padrão).

### Navegação

```
Desktop:
├── Sidebar (topo)
└── Conteúdo

Mobile:
├── Header com título
├── Conteúdo
├── Bottom Navigation (5 itens principais)
└── FAB (Floating Action Button) para ação primária
```

---

## Telas Prototipadas

### 1. Login Screen
**Propósito**: Autenticação segura via JWT.

**Componentes principais**:
- Logo/Branding da igreja
- Campos: Email, Senha
- Botão "Entrar" destacado
- Link "Registrar-se"
- Validacoes em tempo real
- Loading state
- Mensagens de erro contextualizadas

**Fluxo**:
- Email vazio → Erro: "Email é obrigatório"
- Senha < 8 chars → Erro: "Senha deve ter no mínimo 8 caracteres"
- Credenciais inválidas → Erro: "Email ou senha incorretos"
- Sucesso → Navega para Dashboard

---

### 2. Dashboard Screen
**Propósito**: Visão geral das operacoes da igreja.

**Componentes principais**:
- Saudação: "Bem-vindo, [Nome]"
- Cards com métricas:
  - Próximos Cultos (com data)
  - Total Membros Ativos
  - Dízimos do Mês
  - Últimas Atividades
- Botão rápido para "Iniciar Culto"
- 5 abas na base: Dashboard, Cultos, Membros, Financeiro, Perfil

**Fluxo**:
- Clique em "Cultos" → CultosScreen
- Clique em "Membros" → MembrosScreen
- Clique em "Financeiro" → FinanceiroScreen

---

### 3. Cultos Screen (Lista)
**Propósito**: Visualizar e gerenciar cultos.

**Componentes principais**:
- Barra de busca com placeholder "Buscar por tema..."
- Filtros: Status (TODOS, EM_ANDAMENTO, FINALIZADO)
- Cards de culto com:
  - Data e hora em destaque
  - Tema do culto
  - Status (badge colorido)
  - Número de pessoas
  - Ícone para abrir detalhe
- Empty state se não houver cultos
- FAB "+" para criar culto

**Usabilidade**:
- Cada card é clicável (área grande ~80px altura)
- Filtros em horizontal scroll (não força scroll vertical)
- Busca com debounce (não em tempo real para economia de dados)

---

### 4. Culto Detalhe Screen
**Propósito**: Dashboard operacional durante o culto.

**Estrutura**: 5 abas (swipe horizontal ou tabs)

1. **Resumo**
   - Status do culto (Botão para Finalizar)
   - Cards com totais: Pessoas, Dízimos, Ofertas, Total
   - Informações: Tema, Responsáveis

2. **Louvores**
   - Lista de louvores ministrados
   - Botão "Adicionar Louvor"
   - Remover com confirmação

3. **Participantes**
   - 4 sub-abas: Cooperadores, Músicos, Presbíteros, Visitantes
   - Lista com ícone + nome
   - Botão adicionar por tipo

4. **Financeiro**
   - Subtabs: Dízimos, Ofertas
   - Lista de contribuições com membro/oferente, valor, forma pagamento
   - Botões para adicionar

5. **Conferência**
   - Resumo dos valores calculados
   - Campo para valor conferido
   - Status: CONFERIDO (verde) ou DIVERGENTE (amarelo)
   - Cálculo de diferença
   - Campo de observações

**Usabilidade**:
- Abas fixas no topo (scroll não leva as abas)
- Adição de itens via modal (não paginação)
- Cada item é swipeable para remover (com confirmação)

---

### 5. Membros Screen (Lista)
**Propósito**: Gerenciar cadastro de membros.

**Componentes principais**:
- Barra de busca: "Buscar membro..."
- Filtros: TODOS, ATIVO, INATIVO
- Cards de membro com:
  - Nome, Telefone
  - Status (badge)
  - Ícone coração se for dizimista
  - Avatar com inicial
- Empty state se não houver resultados
- FAB "+" para cadastrar

**Usabilidade**:
- Busca por nome (case-insensitive)
- Filtros exclusivos (um por vez)
- Click no card → MembroDetalheScreen

---

### 6. Membro Detalhe Screen
**Propósito**: Visualizar e editar perfil de membro.

**Componentes principais**:
- Header com avatar grande e nome
- Status e badges (Ativo, Dizimista)
- Seções (cardstack):
  1. **Contato**: Telefone, Email, Endereço
  2. **Informações Pessoais**: Data nascimento, Data membresia
  3. **Contribuições**: Dízimos este ano, Total histórico
  4. **Observações**: Texto livre (ex: "Participa do louvor")
- Botão "Editar" no final

**Usabilidade**:
- Copiar dados com long-press (não implementado em protótipo, mas indicado)
- Avatar grande e clara identificação
- Informacoes organizadas por seção (não paginação)

---

### 7. Financeiro Screen
**Propósito**: Visão consolidada do financeiro do período.

**Componentes principais**:
- Cards com gradient (gradual brightness):
  1. **Dízimos**: Verde, valor grande, +% trend
  2. **Ofertas**: Dourado, valor grande, +% trend
  3. **Total**: Branco/Card, breakdown em grid 2x2
- Botões rápidos: "Adicionar Dizimo", "Adicionar Oferta"
- Seção "Transações Recentes": 
  - Lista com tipo (ícone), membro/descrição, valor, data, forma pagamento
  - Clicável para editar
- Botão de óculos para ocultar valores (privacidade)
- Botão "Conferir Financeiro" destacado

**Usabilidade**:
- Gradients suaves (não agressivos)
- Cards com shadow (profundidade)
- Números grandes e legíveis
- Transações recentes em scroll vertical

---

### 8. Conferência Screen
**Propósito**: Validar valores de dinheiro físico com registros.

**Componentes principais**:
- Alert status (verde se OK, amarelo se divergente)
- Seção "Valores Calculados":
  - Tabela: Dízimos | Ofertas | Total
  - Valores em verde/dourado/azul respectivamente
- **Entrada de Valor Conferido** (campo grande com teclado numérico):
  - Grande, teclado especial numérico
  - Aceita . ou , como decimal
- **Resumo da Conferência**:
  - Total Calculado
  - Total Conferido
  - Diferença (verde se +, vermelho se -)
  - Percentual de variacao
- Campo de observações (text area grande)
- Botões: "Cancelar" e "Confirmar" (ou "Conferir Mesmo Assim" se divergente)

**Usabilidade**:
- Números grandes e fáceis de ler
- Campo de entrada com placeholder "0,00"
- Validacao em tempo real de divergencia
- Não obriga confirmacao se não houver diferença

---

## Guias de Usabilidade Implementados

### 1. Acessibilidade
- Contraste WCAG AA+ em todos os elementos
- Labels em português claro
- Botões com área de toque mínima 48x48px
- Sem dependência de cores apenas para diferenciação
- Textos alternativos em ícones

### 2. Feedback Visual
- Loading states com spinners
- Toasts/alerts para confirmacoes e erros
- Disabled state em botões quando apropriado
- Hover/active states em botões (desktop)
- Scroll indica conteúdo abaixo

### 3. Hierarquia Visual
- Títulos em 24px, corpos em 16px
- Weights: Regular (400), Medium (500), Bold (700)
- Espaçamento proporcional (4px base unit)
- Cor primária para ações principais

### 4. Padrões de Navegacao
- Bottom navigation (5 abas) consistente
- Back button em cada tela (quando aplicável)
- FAB sempre na posição fixa bottom-right
- Header sticky (não scrolls away)

### 5. Performance Percebida
- Componentes carregam instantaneamente (dados mockados)
- Animacoes suaves (transitions de 200-300ms)
- Sem delays artificiais
- Skeletons loaders para dados assincronos

---

## Como Estender os Protótipos

### Adicionar Nova Tela

1. Criar arquivo em `components/prototype/screens/nova-tela-screen.tsx`
2. Exportar componente com pattern `export function NovaTelaScreen`
3. Adicionar case no switch em `app/prototype/page.tsx`
4. Adicionar botão de navegacao no info panel

### Modificar Cores

1. Editar `app/globals.css` - variaveis CSS no `:root`
2. Atualizar `--primary`, `--success`, `--accent`, etc.
3. Testar contraste em tools como WebAIM Contrast Checker

### Adicionar Temas

1. Criar novo arquivo de tema em `app/themes/`
2. Exportar variaveis CSS
3. Aplicar dinamicamente com localStorage/context

---

## Componentes Utilizados

Todos os protótipos usam componentes da biblioteca **shadcn/ui**:
- `Button` - Botões padroes
- `Input` - Campos de texto
- `textarea` - Campos multi-linha

Custom components:
- `PhoneFrame` - Moldura do telefone
- `BottomNavigation` - Barra navegacao inferior

---

## Proximos Passos

1. **Implementar Modais**: Adicionar dialogs para criar/editar items
2. **Implement Forms**: Integrar validacoes com zod/react-hook-form
3. **Animacoes**: Transicoes entre telas com Framer Motion
4. **Dark Mode**: Testar tema escuro para ambientes com pouca luz
5. **Integrar API**: Conectar com endpoints reais do backend
6. **Testes E2E**: Cypress/Playwright para validar fluxos
7. **Feedback Haptico**: Vibracao em acoes importantes
8. **Notificacoes Push**: Para alertas de conferência pendente

---

## Especificacoes Técnicas

- **Framework**: Next.js 16 (App Router)
- **UI Library**: shadcn/ui (Tailwind CSS v4)
- **Icons**: Lucide React
- **Responsividade**: Mobile-first (360px+)
- **Viewport**: `device-width`, `initial-scale=1`, `theme-color=#2563eb`
- **Linguagem**: Português Brasileiro (pt-BR)

---

## Conclusao

Os protótipos representam uma solução completa e pronta para desenvolvimento de uma aplicacao Android robusta para gestao de igrejas evangelicas. Todos os fluxos principais estao mapeados e as melhores práticas de UX/UI foram implementadas com foco no publico-alvo de 30+ anos.

O código esta pronto para ser integrado com uma API real e complementado com validacoes, testes e animacoes mais avancadas.
