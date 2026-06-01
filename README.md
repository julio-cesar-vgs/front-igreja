# Igreja Ipiranga — Design System

A design system for **Igreja Ipiranga · Sistema de Gestão**, a management platform
for evangelical churches in Brazil. The product lets a church run its services
(*cultos*), members (*membros*), and finances (*dízimos & ofertas*) across a head
office (*matriz*) and branches (*filiais*), with a strong emphasis on financial
integrity (the *conferência* / reconciliation flow).

The surface captured here is the **mobile app** (an Android/PWA prototype built
with Next.js 16, React 19, Tailwind v4 and shadcn/ui). It is designed mobile-first
for a **30+ audience**: large type, big touch targets, plain Portuguese, high
contrast.

> **Heads-up — this is a v0-generated prototype, not a finished brand.** There is
> no bespoke logo or wordmark in the source; the favicon is a generic v0 mark. The
> de-facto brand mark is a Lucide `church` glyph in a tinted circular badge. Treat
> the color/type/component system as the source of truth and the "logo" as a
> placeholder to be replaced.

## Sources

Everything here was reverse-engineered from a single repository the user provided.
You may not have access; links are recorded so you (or the reader) can go deeper:

- **GitHub:** https://github.com/julio-cesar-vgs/front-igreja
  - `app/globals.css` — the complete OKLCH token system (light + dark).
  - `app/prototype/page.tsx` + `components/prototype/**` — the 8 prototype screens.
  - `GUIA_PROTOTIPOS_ANDROID.md` — UX rationale, palette table, usability rules.
  - `REVISAO_COMPLETA_SISTEMA_IGREJA.md` — product/architecture overview, user roles,
    screen specs, business rules.

Explore the repository further to build higher-fidelity work against this product.

The original screen source (`.tsx`) is preserved under [`reference/`](reference/)
for lookup; it is not used at runtime.

---

## Content Fundamentals

**Language.** Brazilian Portuguese (pt-BR) throughout. Domain vocabulary is
religious-administrative and should be kept verbatim: *culto* (service), *dízimo*
(tithe), *oferta* (offering), *dizimista* (tither), *conferência* (financial
reconciliation), *matriz/filial* (HQ/branch), *cooperador*, *presbítero*, *louvor*
(worship/hymn), *membro*.

**Tone.** Warm, plain, reassuring, never jargon-y. The brief explicitly targets
users 30+, so copy avoids technical terms and English loanwords. Labels are short
imperatives or nouns: *Entrar*, *Criar nova conta*, *Adicionar Louvor*, *Conferir
Financeiro*, *Registrar Dízimo*.

**Person.** Addresses the user directly and informally — second person, possessive
"sua": *"Digite sua senha"*, *"Esqueci minha senha"*, *"Buscar membro…"*. Greetings
are personal: *"Bem-vindo, Pastor João"*.

**Casing.** Title-case for screen titles and buttons (*Conferência Financeira*,
*Adicionar Dízimo*). UPPERCASE eyebrows/section labels with wide tracking
(*CONTATO*, *VALORES CALCULADOS*, *TOTAL RECEBIDO*). Status enums are stored
UPPERCASE (*EM_ANDAMENTO*, *AGENDADO*, *FINALIZADO*, *ATIVO*) but always rendered
human-friendly (*Em Andamento*, *Agendado*).

**Errors & feedback.** Direct, specific, kind. *"E-mail inválido"*, *"Senha deve
ter pelo menos 6 caracteres"*, *"Nenhum culto encontrado"*. Financial feedback is
explicit about consequences: *"Conferência OK / Os valores conferem perfeitamente"*
vs. *"Divergência Detectada / Diferença de R$ 45,00"*.

**Numbers.** Currency is always `R$` in pt-BR format (`R$ 12.450,50` — period
thousands, comma decimal). Dates are `DD/MM/AAAA`. A privacy toggle (eye icon) can
mask all monetary values (`••••••••`).

**Emoji.** None. The product uses Lucide icons, never emoji.

**Vibe.** Trustworthy and calm — fitting for an app that handles a congregation's
money. "Azul transmite confiança; dourado remete a espiritualidade."

---

## Visual Foundations

**Color.** A blue-and-gold system authored entirely in **OKLCH** (see
`colors_and_type.css`). Primary is *Azul Confiança* `#2563eb` (oklch 0.45 0.15 250);
accent is *Dourado* `#eab308` (oklch 0.75 0.12 85). Semantics: green `#22c55e`
(success / tithes), amber `#f59e0b` (warning / divergence), red `#ef4444`
(destructive). **Every neutral carries a faint blue tint (hue 250)** so backgrounds,
cards and borders feel cohesive. A full **dark theme** exists (`.dark`), lifting the
same hues onto navy for low-light sanctuaries.

**Type.** **Inter** for everything (400/500/600/700/800), **Geist Mono** for codes,
payment methods and tabular figures. Scale runs large — body never below 16px,
inputs/buttons at 17–18px, screen titles 20–24px, hero currency totals 28–36px.
Tight tracking on display sizes; wide tracking on uppercase eyebrows.

**Spacing & layout.** 4px base unit; generous 16–24px padding on primary elements;
24px screen gutters (`px-6`). **Flexbox for ~99% of layout**, grid only for simple
data matrices (metric cards, totals). Absolute positioning and floats are avoided
except for the fixed chrome (bottom nav, FAB). Mobile-first, designed for 360–480px.
Touch targets ≥ 48px.

**Corner radii.** Soft and friendly. Base `--radius: 1rem` (16px) with a 12/14/16/20
scale; finance summary cards go to `rounded-2xl`; pills, avatars and the FAB are
fully round; the phone bezel is `rounded-[3rem]`.

**Cards.** White surface, 1px tinted border, `radius-lg`, and a **soft low-opacity
navy shadow** (`shadow-sm` at rest → `shadow-md` on hover). A 4px left accent border
(`border-l-accent` / `border-l-primary`) flags live or featured items. Some headers
and finance cards invert to a solid primary or a gentle gradient.

**Backgrounds.** Mostly flat near-white (`--background`). **Gradients are used
sparingly and only with intent**: the login screen fades primary→background; the
finance summary cards use diagonal green/gold gradients; the member profile hero is
a vertical primary gradient. No photographic imagery, no textures, no patterns.

**Elevation & transparency.** Depth comes from soft shadows, not heavy borders.
Translucency is used for chrome-on-color: e.g. `primary-foreground/10–20` for cards
and buttons sitting on the blue header. No backdrop blur in the source.

**Motion.** Restrained. 150–300ms transitions on color/shadow; `active:scale-95`
(buttons) and `active:scale-[0.98]` (cards) press feedback; a spinner on the login
button; a subtle scale-up on the active nav icon. No bounces, no parallax.

**States.** *Hover* lifts a card's shadow or lightens an outline button to
`secondary`; primary buttons brighten ~6%. *Press* shrinks slightly. *Focus* shows a
3px primary ring. *Active* nav/filter = solid primary fill (or a soft 10% primary
tint pill). *Disabled* = reduced opacity.

---

## Iconography

The product uses **Lucide** (`lucide-react`) exclusively, at **24px with a 2px
stroke**, drawn in line style with no fills — the one exception being the *dizimista*
heart, which is filled green. There is **no icon font, no SVG sprite, no PNG icons,
and no emoji or unicode glyphs** used as icons in the source.

Common icons and their roles: `church` (brand mark / Cultos tab), `home` (Início),
`users` (Membros), `wallet` (Financeiro), `dollar-sign` (dízimos), `gift` (ofertas),
`music` (louvores), `heart` (dizimista), `calendar` (dates), `trending-up` (growth),
`search`, `plus` (add / FAB), `bell` (notifications), `eye`/`eye-off` (value privacy),
`check-circle-2` / `alert-circle` (conference OK / divergence), `chevron-right`,
`arrow-left`, `phone`, `mail`, `map-pin`.

Because Lucide is CDN-available, the previews and UI kit link it directly
(`https://unpkg.com/lucide@latest`) rather than vendoring SVGs. To use icons in your
own static HTML, drop `<i data-lucide="church"></i>` and call `lucide.createIcons()`.

### Assets on disk (`assets/`)
The repo ships only placeholder/system art. All are preserved for reference but
**none is a real brand logo**:
- `v0-icon.svg` — the generic v0 app icon (NOT a church logo).
- `icon-light-32x32.png`, `icon-dark-32x32.png`, `apple-icon.png` — favicons.
- `placeholder-logo.svg`, `placeholder.jpg`, `placeholder-user.jpg` — v0 placeholders.

> ⚠️ **Substitution flag:** No genuine logo, brand illustrations, or photography
> exist in the source. If you need a real mark, ask the user to supply one. Fonts
> (Inter, Geist Mono) are loaded from Google Fonts via CDN rather than vendored —
> flag if you need the `.woff2` files locally.

---

## Index — what's in this folder

| Path | What it is |
|------|------------|
| `README.md` | This file. |
| `colors_and_type.css` | The single source of truth for color + type tokens (light + dark), radii, spacing, and semantic element styles. Import it everywhere. |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code). |
| `assets/` | Logos, favicons and placeholders copied from the repo (see Iconography). |
| `preview/` | The Design System cards shown in the Design System tab (colors, type, spacing, components, brand). |
| `ui_kits/mobile-app/` | Interactive, high-fidelity recreation of the mobile app — open `index.html`. See its own README. |
| `reference/` | Original `.tsx` screen source from the repo, for lookup only. |

### Other products / surfaces
The source repo contains **one product surface** — the mobile app prototype. There
is no separate marketing site, desktop app or docs site in the codebase (the desktop
"sidebar" tokens exist in CSS but no desktop screens are built). Only one UI kit is
provided as a result.
