/* global React */
// =============================================================================
// Igreja Ipiranga — UI Kit primitives
// Faithful, mostly-cosmetic recreations of the shadcn/ui components the app uses,
// plus the custom PhoneFrame + BottomNavigation. Source: front-igreja repo.
// =============================================================================

// ---- Icon: wraps Lucide (the app's real icon set) -------------------------
function Icon({ name, size = 24, className = "", style = {}, strokeWidth = 2 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (host && window.lucide) {
      host.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      host.appendChild(i);
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        attrs: { "stroke-width": strokeWidth },
      });
    }
  }, [name, strokeWidth]);
  return (
    <span
      ref={ref}
      className={"ii " + className}
      style={{ width: size, height: size, display: "inline-flex", flexShrink: 0, ...style }}
    />
  );
}

// ---- Button ---------------------------------------------------------------
function Button({ variant = "default", size = "md", className = "", style = {}, children, ...rest }) {
  const base = "btn btn-" + variant + " btn-" + size + " " + className;
  return (
    <button className={base} style={style} {...rest}>
      {children}
    </button>
  );
}

// ---- Input ----------------------------------------------------------------
function Input({ className = "", error = false, ...rest }) {
  return <input className={"inp " + (error ? "inp-err " : "") + className} {...rest} />;
}

// ---- Badge ----------------------------------------------------------------
function Badge({ tone = "muted", className = "", children }) {
  return <span className={"badge badge-" + tone + " " + className}>{children}</span>;
}

// ---- Card -----------------------------------------------------------------
function Card({ className = "", style = {}, children, ...rest }) {
  return (
    <div className={"card " + className} style={style} {...rest}>
      {children}
    </div>
  );
}

// ---- Currency helper ------------------------------------------------------
function brl(v) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
}

// ---- PhoneFrame: iOS-style bezel, 375×812 ---------------------------------
function PhoneFrame({ children }) {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-status">
        <span className="phone-time">9:41</span>
        <span className="phone-status-icons">
          <Icon name="signal" size={15} />
          <Icon name="wifi" size={15} />
          <Icon name="battery-full" size={20} />
        </span>
      </div>
      <div className="phone-screen">{children}</div>
      <div className="phone-home" />
    </div>
  );
}

// ---- BottomNavigation -----------------------------------------------------
const NAV_TABS = [
  { id: "home", label: "Início", icon: "home" },
  { id: "cultos", label: "Cultos", icon: "church" },
  { id: "membros", label: "Membros", icon: "users" },
  { id: "financeiro", label: "Financeiro", icon: "wallet" },
  { id: "relatorios", label: "Relatórios", icon: "bar-chart-2" },
];
function BottomNavigation({ active, onChange }) {
  return (
    <nav className="bottomnav">
      {NAV_TABS.map((t) => {
        const on = active === t.id;
        return (
          <button key={t.id} className={"navitem" + (on ? " on" : "")} onClick={() => onChange(t.id)}>
            <Icon name={t.icon} size={24} />
            <span>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ---- Toast (typed, with icon) ---------------------------------------------
function Toast({ toast }) {
  if (!toast) return null;
  const map = {
    success: { icon: "check-circle-2", color: "var(--success)" },
    warning: { icon: "alert-circle", color: "var(--warning)" },
    error: { icon: "x-circle", color: "var(--destructive)" },
  };
  const m = map[toast.type] || map.success;
  return (
    <div className={"toast toast-" + (toast.type || "success")}>
      <Icon name={m.icon} size={18} style={{ color: m.color }} />
      <span>{toast.message}</span>
    </div>
  );
}

// ---- Sheet: fullscreen or bottom-sheet overlay ----------------------------
function Sheet({ variant = "full", onClose, children }) {
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className={"sheet sheet-" + variant} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

// ---- Skeleton loading block ----------------------------------------------
function Skeleton({ h = 16, w = "100%", r = 8, style = {} }) {
  return <div className="skeleton" style={{ height: h, width: w, borderRadius: r, ...style }} />;
}

// ---- Conferred-culto banner — only locks FINANCIAL section ---------------
function LockedBanner({ data, conferenteNome, canReabrir, onReabrir }) {
  return (
    <div className="locked-banner">
      <Icon name="lock" size={20} style={{ color: "var(--warning)" }} />
      <div style={{ flex: 1 }}>
        <p className="b600" style={{ color: "var(--warning)", margin: 0 }}>Caixa conferido em {data}</p>
        <p className="metric-sub" style={{ margin: 0 }}>Edições financeiras bloqueadas{conferenteNome ? ` · conf. ${conferenteNome}` : ""}. Louvores e pessoas seguem editáveis.</p>
      </div>
      {canReabrir && <button className="reabrir-link" onClick={onReabrir}>Reabrir</button>}
    </div>
  );
}

// ---- RoleBar: "ver como" selector (outside the phone) ----------------------
function RoleBar({ role, onChange }) {
  const roles = ["MEMBRO", "COOPERADOR", "TESOUREIRO", "ADMIN"];
  return (
    <div className="rolebar">
      <span className="rolebar-lbl"><Icon name="eye" size={14} /> Ver como</span>
      <div className="rolebar-opts">
        {roles.map((r) => (
          <button key={r} className={"rolebar-opt" + (role === r ? " on" : "")} onClick={() => onChange(r)}>
            {ROLE_LABEL[r]}
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Button, Input, Badge, Card, brl, PhoneFrame, BottomNavigation, Toast, Sheet, Skeleton, LockedBanner, RoleBar, NAV_TABS });
