---
name: igreja-ipiranga-design
description: Use this skill to generate well-branded interfaces and assets for Igreja Ipiranga (Sistema de Gestão — a church management app for evangelical churches in Brazil), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Start with `colors_and_type.css` (the OKLCH color + Inter/Geist Mono type tokens,
light + dark) — import it into anything you build. Then skim the `preview/` cards
for the visual language and `ui_kits/mobile-app/` for ready-made, faithful
recreations of the app's screens and components (login, dashboard, cultos, membros,
financeiro, conferência) plus primitives (Button, Input, Badge, Card, PhoneFrame,
BottomNavigation). Icons are Lucide (24px, 2px stroke, no emoji).

Key brand facts: blue (#2563eb, *Azul Confiança*) + gold (#eab308, *Dourado*),
generous radii (base 1rem), large type and 48px+ touch targets for a 30+ audience,
Brazilian Portuguese copy, soft navy shadows, restrained motion. There is **no real
logo** — the de-facto mark is a Lucide `church` glyph in a circular badge; ask the
user for a real logo if one is needed.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
