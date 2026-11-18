# Igreja Ipiranga (front-igreja) Security Charter

## Principles

### I. Verify identity and church roles before exposing member or financial data

Always authenticate users and enforce role-based access controls on trusted boundaries before allowing anyone to view, edit, or reconcile member records, worship services, or church finances, and never treat client-side navigation or UI state as authorization.

- Why: Member profiles, tithes, and offerings are sensitive personal and financial records; relying on client-only checks lets an unauthorized visitor bypass screens and read or alter private church data.

### II. Treat all user and external input as untrusted until validated

Always validate every form submission, search filter, and navigation or URL input against strict schemas before processing, storing, or rendering it, and never inject unescaped input into HTML, URLs, or dynamic expressions.

- Why: Unchecked input can corrupt financial numbers, break workflows, or allow cross-site scripting (XSS) that steals a treasurer's or pastor's session.

### III. Never store secrets, credentials, or sensitive records in client code or browser storage

Never embed passwords, tokens, API keys, or hardcoded bypass credentials in frontend code or version history, and never persist unencrypted member PII or sensitive financial details in browser storage.

- Why: Everything shipped to the browser or kept in local storage can be inspected by anyone on the network or sharing a sanctuary device, leading to account compromise and privacy breaches.

### IV. Enforce 4-eyes integrity and auditability on financial reconciliation

Always enforce the 4-eyes financial verification workflow (or a required, tamper-evident justification when a second verifier is absent) and protect reconciled records against silent edits or client-side tampering.

- Why: Church treasury handling requires strict accountability; unguarded or silently modifiable reconciliation totals hide accounting mistakes or tampering and undermine congregation trust.

### V. Ship hardened browser defaults and vetted, patched dependencies

Always keep third-party packages audited and pinned via the lockfile, configure strict browser security headers (Content Security Policy, framing, and referrer protections), and never expose unauthenticated prototype shortcuts or debug routes in production.

- Why: Known library vulnerabilities, missing browser headers, or leftover prototype routes give attackers straightforward paths to exploit users or hijack active sessions.

## Baseline discipline

Lagune holds this charter, every principle, every time. A principle is not suspended because a control looks small, familiar, or unlikely to be hit. This is not a judgement call.

### Only the controls the project needs

Lagune recommends and applies only the controls this project's context calls for. A control the project does not need is never added for completeness, and a generic checklist is not thoroughness. Every later phase acts on what the system actually does, never on what it might hypothetically do.

- Why: effort spent on risks the project does not have buries the risks it does have. Fewer, right-sized controls are easier to apply, prove, and keep true than a checklist no one finishes.

### Prefer the simplest vetted control

When a control is needed, reach for the safest option already proven, in order: a control this project already has, then a platform or framework built-in, then a well-maintained vetted library, and only then custom code. Never hand-roll a security primitive (cryptography, escaping, authentication, sessions) that a vetted standard already provides. A new dependency is new attack surface, justified and not assumed. Code, an endpoint, or a feature the project does not use is attack surface too, so removing it is itself a control.

- Why: hand-rolled security is where subtle, unaudited bugs live, and a second control duplicating an existing one is the one that gets forgotten and drifts. Boring, standard controls are easier to audit and harder to get wrong, and less surface is less to defend.

### When a control seems skippable

A control is held even when a reason to skip it feels reasonable:

- "Too small to need a control": small gaps are where breaches start.
- "Already handled elsewhere": assumed coverage is exactly how gaps hide.
- "Unlikely to be hit": attackers target the path no one is watching.
- "It works, ship it": working and safe are different claims, and the charter requires both.

## Governance

- This charter guides every security decision in each Lagune phase, and every change to it is reviewed and approved by the project maintainer.
- It holds only what a deterministic check cannot capture, so it never repeats a control that linters, TypeScript strict checks, or automated tools already enforce.

Version: 1.0.0 | Ratified: 2026-11-18
