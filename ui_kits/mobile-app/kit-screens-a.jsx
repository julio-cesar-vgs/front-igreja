/* global React, Icon, Button, Input, Badge, Card, brl */
// =============================================================================
// Igreja Ipiranga — Screens A: Login, Dashboard, Cultos, Culto Detalhe
// =============================================================================

// ---------------------------------------------------------------- LOGIN -----
function LoginScreen({ onLogin }) {
  const [email, setEmail] = React.useState("pastor@ipiranga.org");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const submit = () => {
    const e = {};
    if (!email) e.email = "Digite seu e-mail";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "E-mail inválido";
    if (!password) e.password = "Digite sua senha";
    else if (password.length < 6) e.password = "Senha deve ter pelo menos 6 caracteres";
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1100);
  };

  return (
    <div className="screen login">
      <div className="login-hero">
        <div className="login-badge"><Icon name="church" size={48} /></div>
        <h1 className="login-title">Igreja Ipiranga</h1>
        <p className="login-sub">Sistema de Gestão</p>
      </div>
      <div className="login-form">
        <div className="field">
          <label>E-mail</label>
          <Input value={email} error={!!errors.email} placeholder="seu@email.com"
            onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: undefined }); }} />
          {errors.email && <p className="field-err">{errors.email}</p>}
        </div>
        <div className="field">
          <label>Senha</label>
          <div className="field-icon-r">
            <Input type={show ? "text" : "password"} value={password} error={!!errors.password}
              placeholder="Digite sua senha"
              onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: undefined }); }} />
            <button className="eye" onClick={() => setShow(!show)}>
              <Icon name={show ? "eye-off" : "eye"} size={20} />
            </button>
          </div>
          {errors.password && <p className="field-err">{errors.password}</p>}
        </div>
        <button className="link-primary">Esqueci minha senha</button>
        <Button variant="default" size="lg" className="full" onClick={submit} disabled={loading}>
          {loading ? <><Icon name="loader-2" size={20} className="spin" /> Entrando...</> : "Entrar"}
        </Button>
        <div className="divider"><span>ou</span></div>
        <Button variant="outline" size="lg" className="full">Criar nova conta</Button>
      </div>
      <p className="login-version">Versão 1.0.0</p>
    </div>
  );
}

// ------------------------------------------------------------ DASHBOARD -----
function DashboardScreen({ onNavigate, onToast }) {
  return (
    <div className="screen has-nav">
      <header className="hdr-primary rounded-b">
        <div className="hdr-row">
          <div>
            <p className="hdr-greet">Bem-vindo,</p>
            <h1 className="hdr-name">Pastor João</h1>
          </div>
          <button className="hdr-bell" onClick={() => onToast("Nenhuma notificação nova")}>
            <Icon name="bell" size={24} /><span className="dot" />
          </button>
        </div>
        <div className="church-pill">
          <div className="church-pill-l">
            <div className="church-ic"><Icon name="church" size={20} /></div>
            <div>
              <p className="church-name">Igreja Ipiranga - Matriz</p>
              <p className="church-sub">Sede Principal</p>
            </div>
          </div>
          <Icon name="chevron-right" size={20} style={{ opacity: .5 }} />
        </div>
      </header>

      <div className="dash-body">
        <div className="grid-2">
          <Card className="tap" onClick={() => onNavigate("membros")}>
            <div className="metric-ic" style={{ background: "color-mix(in oklch,var(--primary) 12%,transparent)" }}>
              <Icon name="users" size={20} style={{ color: "var(--primary)" }} />
            </div>
            <p className="metric-num">156</p><p className="metric-sub">Membros Ativos</p>
          </Card>
          <Card className="tap" onClick={() => onNavigate("financeiro")}>
            <div className="metric-ic" style={{ background: "color-mix(in oklch,var(--chart-2) 20%,transparent)" }}>
              <Icon name="wallet" size={20} style={{ color: "var(--chart-2)" }} />
            </div>
            <p className="metric-num">R$ 12.450</p><p className="metric-sub">Este Mês</p>
          </Card>
        </div>

        <Card className="row-between">
          <div className="row-l">
            <div className="metric-ic" style={{ background: "color-mix(in oklch,var(--accent) 20%,transparent)" }}>
              <Icon name="trending-up" size={20} style={{ color: "var(--accent-foreground)" }} />
            </div>
            <div><p className="b600">Crescimento</p><p className="metric-sub">vs. mês anterior</p></div>
          </div>
          <Badge tone="success">+12%</Badge>
        </Card>

        <div className="sec-head">
          <h2>Próximo Culto</h2>
          <button className="link-sm" onClick={() => onNavigate("cultos")}>Ver todos</button>
        </div>
        <Card className="accent-l tap" onClick={() => onNavigate("culto-detalhe")}>
          <div className="row-between">
            <div>
              <h3 className="b600">Culto de Domingo</h3>
              <p className="metric-sub" style={{ marginBottom: 8 }}>Tema: A Fé que Move Montanhas</p>
              <p className="row-l metric-sub" style={{ gap: 6 }}><Icon name="calendar" size={16} /> Domingo, 20/04 às 19h</p>
            </div>
            <Badge tone="accent">Em 2 dias</Badge>
          </div>
        </Card>

        <h2 className="sec-head-solo">Ações Rápidas</h2>
        <div className="grid-2">
          {[["church", "Novo Culto"], ["users", "Novo Membro"], ["wallet", "Registrar Dízimo"], ["trending-up", "Relatórios"]].map(([ic, lbl]) => (
            <button key={lbl} className="quick" onClick={() => onToast(lbl + " — em breve")}>
              <Icon name={ic} size={24} style={{ color: "var(--primary)" }} /><span>{lbl}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------- CULTOS -----
const CULTOS = [
  { id: "1", tema: "A Fé que Move Montanhas", dataHora: "20/04/2026 19:00", status: "AGENDADO", pessoas: null },
  { id: "2", tema: "O Poder da Oração", dataHora: "13/04/2026 19:00", status: "EM_ANDAMENTO", pessoas: 89 },
  { id: "3", tema: "Graça Abundante", dataHora: "06/04/2026 19:00", status: "FINALIZADO", pessoas: 124 },
  { id: "4", tema: "Amor Incondicional", dataHora: "30/03/2026 19:00", status: "FINALIZADO", pessoas: 98 },
];
const STATUS = {
  AGENDADO: { label: "Agendado", tone: "muted" },
  EM_ANDAMENTO: { label: "Em Andamento", tone: "accent" },
  FINALIZADO: { label: "Finalizado", tone: "success" },
};
function CultosScreen({ onNavigate, onToast }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState(null);
  const list = CULTOS.filter((c) => c.tema.toLowerCase().includes(q.toLowerCase()) && (!filter || c.status === filter));
  const filters = [[null, "Todos"], ["EM_ANDAMENTO", "Em Andamento"], ["AGENDADO", "Agendados"], ["FINALIZADO", "Finalizados"]];
  return (
    <div className="screen has-nav">
      <header className="hdr-sticky">
        <div className="row-between" style={{ marginBottom: 16 }}>
          <h1 className="hdr-name dark">Cultos</h1>
          <Button size="sm" onClick={() => onToast("Novo culto — em breve")}><Icon name="plus" size={16} /> Novo</Button>
        </div>
        <div className="field-icon-l">
          <Icon name="search" size={20} />
          <Input placeholder="Buscar por tema..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="pills">
          {filters.map(([val, lbl]) => (
            <button key={lbl} className={"pill" + (filter === val ? " on" : "")} onClick={() => setFilter(val)}>{lbl}</button>
          ))}
        </div>
      </header>
      <div className="list">
        {list.length === 0 ? (
          <div className="empty"><div className="empty-ic"><Icon name="calendar" size={32} /></div><p>Nenhum culto encontrado</p></div>
        ) : list.map((c) => {
          const s = STATUS[c.status];
          return (
            <Card key={c.id} className={"tap" + (c.status === "EM_ANDAMENTO" ? " accent-l" : "")} onClick={() => onNavigate("culto-detalhe")}>
              <div className="row-between">
                <div style={{ minWidth: 0 }}>
                  <Badge tone={s.tone}>{s.label}</Badge>
                  <h3 className="b600" style={{ margin: "6px 0 4px" }}>{c.tema}</h3>
                  <div className="row-l metric-sub" style={{ gap: 16 }}>
                    <span className="row-l" style={{ gap: 4 }}><Icon name="calendar" size={16} />{c.dataHora}</span>
                    {c.pessoas && <span className="row-l" style={{ gap: 4 }}><Icon name="users" size={16} />{c.pessoas} pessoas</span>}
                  </div>
                </div>
                <Icon name="chevron-right" size={20} style={{ color: "var(--muted-foreground)" }} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------- CULTO DETALHE -----
function CultoDetalheScreen({ onBack, onNavigate }) {
  const [tab, setTab] = React.useState("resumo");
  const d = {
    tema: "O Poder da Oração", dataHora: "13/04/2026 19:00", pessoas: 89,
    palavraInicial: "Pr. João Silva", palavraFinal: "Ev. Maria Santos",
    louvores: [{ nome: "Ana Paula", hino: "Grande é o Senhor" }, { nome: "Carlos Eduardo", hino: "Quão Grande és Tu" }],
    cooperadores: [{ nome: "José Carlos", cargo: "Porteiro" }, { nome: "Maria Lúcia", cargo: "Recepção" }],
    visitantes: [{ nome: "Roberto Lima", tel: "(11) 99999-0001" }],
    totalDizimos: 3450, totalOfertas: 1280,
  };
  const tabs = [["resumo", "Resumo"], ["louvores", "Louvores"], ["pessoas", "Pessoas"], ["financeiro", "Financeiro"]];
  return (
    <div className="screen">
      <header className="hdr-primary rounded-b">
        <div className="row-l" style={{ gap: 12, marginBottom: 16 }}>
          <button className="hdr-back" onClick={onBack}><Icon name="arrow-left" size={20} /></button>
          <div style={{ flex: 1 }}>
            <Badge tone="accent">Em Andamento</Badge>
            <h1 className="hdr-name" style={{ marginTop: 4, fontSize: 18 }}>{d.tema}</h1>
            <p className="hdr-greet">{d.dataHora}</p>
          </div>
        </div>
        <div className="grid-3">
          {[[d.pessoas, "Pessoas"], ["R$ " + d.totalDizimos.toLocaleString("pt-BR"), "Dízimos"], ["R$ " + d.totalOfertas.toLocaleString("pt-BR"), "Ofertas"]].map(([n, l]) => (
            <div key={l} className="mini-card"><p className="mini-num">{n}</p><p className="mini-lbl">{l}</p></div>
          ))}
        </div>
      </header>

      <div className="detail-body">
        <div className="tabs">
          {tabs.map(([id, lbl]) => (
            <button key={id} className={"tab" + (tab === id ? " on" : "")} onClick={() => setTab(id)}>{lbl}</button>
          ))}
        </div>

        {tab === "resumo" && (
          <div className="stack-md">
            <Card>
              {[["Palavra Inicial", d.palavraInicial], ["Palavra Final", d.palavraFinal], ["Louvores", d.louvores.length], ["Visitantes", d.visitantes.length]].map(([k, v]) => (
                <div key={k} className="kv"><span className="metric-sub">{k}</span><span className="b500">{v}</span></div>
              ))}
            </Card>
            <Card className="accent-l">
              <div className="row-between">
                <div className="row-l"><Icon name="alert-circle" size={20} style={{ color: "var(--accent)" }} />
                  <div><p className="b500">Conferência</p><p className="metric-sub">Pendente</p></div></div>
                <Button size="sm" onClick={() => onNavigate("conferencia")}>Conferir</Button>
              </div>
            </Card>
          </div>
        )}
        {tab === "louvores" && (
          <div className="stack-sm">
            <Button variant="outline" className="full"><Icon name="plus" size={20} /> Adicionar Louvor</Button>
            {d.louvores.map((l, i) => (
              <Card key={i} className="row-l" style={{ gap: 12 }}>
                <div className="circ-ic"><Icon name="music" size={20} style={{ color: "var(--primary)" }} /></div>
                <div><p className="b500">{l.nome}</p><p className="metric-sub">{l.hino}</p></div>
              </Card>
            ))}
          </div>
        )}
        {tab === "pessoas" && (
          <div className="stack-md">
            <div>
              <div className="row-between" style={{ marginBottom: 8 }}><h3 className="b600">Cooperadores</h3><button className="link-sm"><Icon name="plus" size={14} /> Adicionar</button></div>
              {d.cooperadores.map((c, i) => (
                <Card key={i} className="row-l compact" style={{ gap: 12, marginBottom: 8 }}>
                  <div className="circ-ic sm" style={{ background: "var(--secondary)" }}><Icon name="users" size={16} /></div>
                  <div><p className="b500 sm">{c.nome}</p><p className="metric-sub xs">{c.cargo}</p></div>
                </Card>
              ))}
            </div>
            <div>
              <div className="row-between" style={{ marginBottom: 8 }}><h3 className="b600">Visitantes</h3><button className="link-sm"><Icon name="plus" size={14} /> Adicionar</button></div>
              {d.visitantes.map((v, i) => (
                <Card key={i} className="row-l compact" style={{ gap: 12 }}>
                  <div className="circ-ic sm" style={{ background: "color-mix(in oklch,var(--accent) 20%,transparent)" }}><Icon name="users" size={16} style={{ color: "var(--accent-foreground)" }} /></div>
                  <div><p className="b500 sm">{v.nome}</p><p className="metric-sub xs">{v.tel}</p></div>
                </Card>
              ))}
            </div>
          </div>
        )}
        {tab === "financeiro" && (
          <div className="stack-md">
            <div className="grid-2">
              <div className="tot-card" style={{ background: "color-mix(in oklch,var(--chart-2) 10%,transparent)" }}>
                <Icon name="wallet" size={24} style={{ color: "var(--chart-2)" }} />
                <p className="tot-num" style={{ color: "var(--chart-2)" }}>R$ {d.totalDizimos.toLocaleString("pt-BR")}</p><p className="metric-sub">Total Dízimos</p>
              </div>
              <div className="tot-card" style={{ background: "color-mix(in oklch,var(--accent) 10%,transparent)" }}>
                <Icon name="wallet" size={24} style={{ color: "var(--accent-foreground)" }} />
                <p className="tot-num" style={{ color: "var(--accent-foreground)" }}>R$ {d.totalOfertas.toLocaleString("pt-BR")}</p><p className="metric-sub">Total Ofertas</p>
              </div>
            </div>
            <Button variant="outline" className="full"><Icon name="plus" size={20} /> Registrar Dízimo</Button>
            <Button variant="outline" className="full"><Icon name="plus" size={20} /> Registrar Oferta</Button>
            <div className="grand-total">
              <p className="metric-sub" style={{ color: "var(--primary-foreground)", opacity: .8 }}>Total Geral</p>
              <p className="grand-num">R$ {(d.totalDizimos + d.totalOfertas).toLocaleString("pt-BR")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, DashboardScreen, CultosScreen, CultoDetalheScreen });
