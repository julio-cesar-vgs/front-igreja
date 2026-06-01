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
  { id: "menu", label: "Menu", icon: "menu" },
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

// ---- Toast (lightweight) --------------------------------------------------
function Toast({ message }) {
  if (!message) return null;
  return <div className="toast">{message}</div>;
}

Object.assign(window, { Icon, Button, Input, Badge, Card, brl, PhoneFrame, BottomNavigation, Toast, NAV_TABS });
