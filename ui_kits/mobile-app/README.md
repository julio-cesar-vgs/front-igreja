# UI Kit — Aplicativo Móvel (Igreja Ipiranga)

High-fidelity, mostly-cosmetic recreation of the **Igreja Ipiranga** mobile app
(the Android/PWA prototype from `app/prototype` in the source repo). Open
`index.html` for the interactive click-through.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | App shell + state machine. Renders the phone frame and routes between screens. |
| `kit-ui.jsx` | Primitives: `Icon` (Lucide), `Button`, `Input`, `Badge`, `Card`, `PhoneFrame`, `BottomNavigation`, `Toast`, plus the `brl()` currency helper. |
| `kit-screens-a.jsx` | `LoginScreen`, `DashboardScreen`, `CultosScreen`, `CultoDetalheScreen`. |
| `kit-screens-b.jsx` | `MembrosScreen`, `MembroDetalheScreen`, `FinanceiroScreen`, `RelatoriosScreen`. |
| `kit-modals.jsx` | `ConferenciaModal`, `ReaberturaModal`, `NovoCultoModal`, `SessaoExpiradaModal`. |
| `kit-forms.jsx` | Registration forms: `RegistrarDizimoModal`, `RegistrarOfertaModal`, plus `MemberCombobox` (search a registered member OR enter an unregistered name) and the reusable `AuditoriaBlock` (tesoureiro que registra + conferente — names stored for audit). |
| `kit.css` | All component styling, built on the tokens in `../../colors_and_type.css`. |

## Interactive flow

`Login` → **Entrar** → `Dashboard`. From the dashboard, the metric cards and the
bottom navigation route to **Cultos**, **Membros** and **Financeiro**. Tap a culto
to open the tabbed **Culto Detalhe** (Resumo / Louvores / Pessoas / Financeiro);
tap a member for **Membro Detalhe**; from Financeiro, **Conferir Financeiro** opens
the **Conferência** screen with live divergence calculation.

## Conventions

- **Phone frame** is a fixed 375 × 812 iOS-style bezel (notch, status bar, home
  indicator). Each screen is a scroll container inside it; headers are sticky and
  the bottom nav / FAB are absolutely positioned within the frame.
- **Icons** are Lucide (the app's real library), loaded from CDN. The `Icon`
  component renders an `<i data-lucide>` imperatively so it survives React
  re-renders — see `kit-ui.jsx`.
- **Components are cosmetic**. State is local and data is mocked (matching the
  source mocks exactly). There is no real auth, persistence or API.
- Copy is **Brazilian Portuguese**, large type, generous touch targets — tuned for
  a 30+ audience, per the product's design brief.

## To extend

Add a screen component, export it on `window` at the bottom of its file, then add
a case to the `SCREENS` map in `index.html`. Reuse the primitives in `kit-ui.jsx`
rather than re-styling from scratch.
