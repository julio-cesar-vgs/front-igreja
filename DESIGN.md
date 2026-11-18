# Design System: Igreja Ipiranga — Tema Azul Confiança

Official `DESIGN.md` specification extracted from `app/globals.css` and `prototipo/colors_and_type.css` for **Igreja Ipiranga · Sistema de Gestão**, a mobile-first church management platform (services, members, tithes/offerings, 4-eyes financial reconciliation, and volunteer schedules).

## 1. Visual Theme & Atmosphere

Warm, trustworthy, high-contrast mobile interface engineered specifically for **30+ and senior church leadership** (pastors, treasurers, elders, and deacons) operating in sanctuary and administrative settings. Cool-tinted near-white surfaces (`oklch(0.98 0.005 250)`) pair with deep **Azul Confiança** (`#2563eb`) headers and **Dourado Espiritual** (`#eab308`) highlights. Dark mode (`.dark`) lifts the same hue family onto deep sanctuary navy (`#0f172a`) for low-light worship services.

## 2. Color Palette & Roles

### Primary Foundation
- **Azul Confiança (`#2563eb` / `oklch(0.45 0.15 250)`)**: Primary brand color used on top app headers, primary action buttons, active navigation pills, and focus rings.
- **Branco Azulado (`#f8fafc` / `oklch(0.98 0.005 250)`)**: Root canvas background with a subtle cool blue undertone (`hue 250`).
- **Superfície Puro Card (`#ffffff` / `oklch(1 0 0)`)**: Elevated card, sheet, and modal containers with `1px` tinted border (`#e2e8f0`).
- **Azul Secundário Suave (`#eff6ff` / `oklch(0.95 0.02 250)`)**: Secondary fill for filter strips, icon badges, and subtle highlights.

### Accent & Interactive
- **Dourado Espiritual (`#eab308` / `oklch(0.75 0.12 85)`)**: Accent color for "Em Andamento" service badges, offering summaries, and "Conferir Caixa" primary callouts.
- **Azul Marinho Sidebar (`#1e293b` / `oklch(0.20 0.05 250)`)**: Desktop navigation chrome and high-contrast structural framing.

### Typography & Text Hierarchy
- **Tinta Profunda (`#0f172a` / `oklch(0.15 0.02 250)`)**: Primary text on light surfaces for maximum legibility.
- **Ardósia Suave (`#64748b` / `oklch(0.45 0.02 250)`)**: Secondary labels, timestamps, helper text, and uppercase eyebrows.
- **Borda Estrutural (`#e2e8f0` / `oklch(0.90 0.01 250)`)**: `1px` dividers, card outlines, and input borders.

### Functional States
- **Verde Dízimo / Conferido (`#22c55e` / `oklch(0.55 0.15 145)`)**: Tithe totals, active member status, tither heart icon (`fill`), and reconciled ("Conferido OK") financial status.
- **Âmbar Divergência (`#f59e0b` / `oklch(0.75 0.15 85)`)**: Unreconciled cash alerts, financial divergence warnings (`Divergente`), and locked-cash banners.
- **Vermelho Exclusão (`#ef4444` / `oklch(0.55 0.22 25)`)**: Destructive actions (delete record, reopen locked reconciliation with mandatory audit justification) and form validation errors.

## 3. Typography Rules

- **Inter (`--font-sans`)**: Primary UI typeface across all headings, body copy, inputs, and buttons.
  - **Hero Financial Totals (`--text-3xl`, `30px`–`36px`)**: Weight `700`–`800`, `1.15` line-height, tight tracking.
  - **Screen Titles (`h1`, `--text-2xl`, `20px`–`24px`)**: Weight `700`, `1.15` line-height.
  - **Section Headings (`h2` / `h3`, `18px`–`20px`)**: Weight `600`, `1.3` line-height.
  - **Interactive Inputs & Primary Buttons (`--text-lg`, `17px`–`18px`)**: Weight `600` for buttons, `400` for inputs.
  - **Body Copy (`--text-base`, `16px` minimum)**: Weight `400`–`500`, `1.5` line-height (never below `16px` for 30+ accessibility).
  - **Uppercase Eyebrows (`.eyebrow`, `12px`)**: Weight `600`, `0.025em` letter-spacing, uppercase (`CONTATO`, `VALORES CALCULADOS`, `RESPONSÁVEIS`).
- **Geist Mono (`--font-mono`)**: Tabular currency readouts (`R$ 12.450,50`), payment method tags (`PIX`, `DINHEIRO`, `TRANSFERENCIA`), and audit timestamps.

## 4. Component Stylings

- **Buttons**: Minimum `48px`–`56px` height (`h-14`), `12px`–`16px` (`rounded-xl`) corner radius, `17px`–`18px` semibold label, `active:scale-95` tactile feedback.
- **Cards**: `#ffffff` surface, `1px solid #e2e8f0` border, `16px` (`--radius: 1rem`) radius, soft navy shadow (`shadow-sm`). Featured or live (`EM_ANDAMENTO`) items add a `4px` left accent border (`border-l-4 border-l-accent` or `border-l-primary`).
- **Inputs & Comboboxes**: `52px`–`56px` height, `12px`–`14px` radius, fixed visible label above the field, clear red error state (`#ef4444`) with plain Portuguese helper copy below.
- **Bottom Navigation**: 5 fixed tabs (`Início`, `Cultos`, `Membros`, `Financeiro`, `Relatórios`), `64px` minimum touch width per item, Lucide `24px` (`2px` stroke) icons, active pill fill in `primary/10`.
- **Domain Components**:
  - **Privacy Mask Toggle (`eye` / `eye-off`)**: Masks all monetary values (`••••••••`) for safe use on the pulpit or in public spaces.
  - **4-Eyes Financial Reconciliation Sheet (`Conferência Financeira`)**: Side-by-side comparison of system totals vs. physical count, live difference badge, mandatory second verifier (`conferenteNome`) or audited `semAjudante` justification.

## 5. Layout Principles

- **Grid & Spacing**: `4px` base spacing unit with `16px`–`24px` (`px-4` to `px-6`) screen gutters, `12px`–`16px` vertical card stacks, and `16px`–`20px` internal card padding.
- **Viewport & Responsiveness**: Mobile-first `375x812px` reference viewport (`360px`–`480px` fluid), single-column vertical scroll with sticky top headers and `2-column` metric summary grids (`grid-cols-2`). Pinch-to-zoom (`userScalable: true`) is always enabled.

## 6. Design System Notes for Stitch Generation

- **Atmosphere keywords**: Trustworthy Brazilian church management, 30+ senior-friendly legibility, Azul Confiança (`#2563eb`) headers, Dourado (`#eab308`) highlights, Verde (`#22c55e`) tithe cards, clean white cards with `16px` rounded corners, Lucide line icons (`24px`), Brazilian Portuguese (`pt-BR`) labels.
- **Component prompts**:
  - *Header*: Curved blue top header (`#2563eb`, `rounded-b-3xl`) with greeting, church branch selector pill (`Igreja Matriz Ipiranga`), and 3-column translucent summary mini-cards.
  - *List & Filter Strip*: Sticky search bar with horizontal pill filters (`Todos`, `Em Andamento`, `Finalizados`) above `16px`-radius white cards with `4px` gold left accent bar and status badges.
  - *Financial Reconciliation*: Two-card gradient summary (`#22c55e` green for Dízimos, `#eab308` gold for Ofertas) with privacy eye toggle, tabular Geist Mono `R$` amounts, and a 4-eyes audit verification form.
