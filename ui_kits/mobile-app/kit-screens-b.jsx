/* global React, Icon, Button, Input, Badge, Card, brl, can, cultoTotais, MEMBROS */
// =============================================================================
// Igreja Ipiranga — Screens B (V2): Membros, Membro Detalhe, Financeiro, Relatórios
// =============================================================================

// -------------------------------------------------------------- MEMBROS -----
function MembrosScreen({ role, membros, onOpenMembro, onNovoMembro, onToast }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("TODOS");
  const list = membros.filter((m) => {
    const okSearch = m.nome.toLowerCase().includes(q.toLowerCase());
    const okFilter = filter === "TODOS" ? true : filter === "DIZIMISTA" ? m.dizimista : m.status === filter;
    return okSearch && okFilter;
  });
  const filters = [["TODOS", "Todos"], ["ATIVO", "Ativos"], ["INATIVO", "Inativos"], ["DIZIMISTA", "Dizimistas"]];
  const stats = [["Total", membros.length], ["Ativos", membros.filter((m) => m.status === "ATIVO").length], ["Dizimistas", membros.filter((m) => m.dizimista).length]];
  return (
    <div className="screen has-nav">
      <header className="hdr-primary flat">
        <h1 className="hdr-name" style={{ marginBottom: 12 }}>Membros</h1>
        <div className="row" style={{ gap: 8 }}>
          <div className="field-icon-l onprimary" style={{ flex: 1 }}>
            <Icon name="search" size={20} />
            <Input placeholder="Buscar membro..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <button className="icon-btn-light" onClick={() => onToast("Filtros avançados", "success")}><Icon name="filter" size={20} /></button>
        </div>
      </header>
      <div className="member-stats">
        {stats.map(([l, n]) => (<div key={l} className="member-stat"><p className="member-stat-n">{n}</p><p className="member-stat-l">{l}</p></div>))}
      </div>
      <div className="filter-strip">
        {filters.map(([val, lbl]) => (
          <button key={val} className={"pill" + (filter === val ? " on" : "")} onClick={() => setFilter(val)}>{lbl}</button>
        ))}
      </div>
      <div className="list" style={{ paddingTop: 4 }}>
        {list.length === 0 ? (
          <div className="empty"><Icon name="users" size={48} style={{ color: "var(--muted-foreground)" }} /><p>Nenhum membro encontrado</p></div>
        ) : list.map((m) => (
          <Card key={m.id} className="tap row-between" onClick={() => onOpenMembro(m.id)}>
            <div>
              <div className="row-l" style={{ gap: 8 }}>
                <h3 className="b600">{m.nome}</h3>
                {m.dizimista && <Icon name="heart" size={16} style={{ color: "var(--success)", fill: "var(--success)" }} />}
              </div>
              <p className="metric-sub">{m.tel}</p>
              <span className={"badge " + (m.status === "ATIVO" ? "badge-success" : "badge-muted")} style={{ marginTop: 8 }}>
                {m.status === "ATIVO" ? "Ativo" : "Inativo"}
              </span>
            </div>
            <div className="avatar">{m.nome.charAt(0)}</div>
          </Card>
        ))}
      </div>
      {can(role, "cadastrar_membro") && (
        <button className="fab" onClick={onNovoMembro}><Icon name="plus" size={24} /></button>
      )}
    </div>
  );
}

// ------------------------------------------------------- MEMBRO DETALHE -----
function MembroDetalheScreen({ role, membro, onBack, onEdit, onDelete, onAlterarStatus, onAlterarDizimista, onToast }) {
  const [fav, setFav] = React.useState(membro.dizimista);
  const m = membro;
  return (
    <div className="screen">
      <header className="hdr-primary flat row-between">
        <button className="hdr-back" onClick={onBack}><Icon name="arrow-left" size={20} /></button>
        <h1 className="hdr-name" style={{ fontSize: 18 }}>Perfil do Membro</h1>
        <button className="hdr-back" onClick={() => setFav(!fav)}>
          <Icon name="heart" size={20} style={fav ? { fill: "var(--accent)", color: "var(--accent)" } : {}} />
        </button>
      </header>
      <div className="detail-scroll">
        <div className="profile-hero">
          <div className="profile-avatar">{m.nome.charAt(0)}</div>
          <h2 className="profile-name">{m.nome}</h2>
          <p className="hdr-greet">Membro desde {m.membresia}</p>
          <div className="row" style={{ gap: 8, justifyContent: "center", marginTop: 12 }}>
            <span className="chip-light">{m.status === "ATIVO" ? "Ativo" : "Inativo"}</span>
            {m.dizimista && <span className="chip-gold">Dizimista</span>}
          </div>
        </div>
        <div className="stack-sm" style={{ padding: 16 }}>
          <Card>
            <p className="eyebrow">Contato</p>
            <div className="stack-sm" style={{ marginTop: 12 }}>
              <div className="info-row"><Icon name="phone" size={20} style={{ color: "var(--primary)" }} /><div><p className="eyebrow">Telefone</p><p className="b500">{m.tel}</p></div></div>
              <div className="info-row"><Icon name="mail" size={20} style={{ color: "var(--primary)" }} /><div><p className="eyebrow">Email</p><p className="b500">{m.email}</p></div></div>
              <div className="info-row"><Icon name="map-pin" size={20} style={{ color: "var(--primary)" }} /><div><p className="eyebrow">Endereço</p><p className="b500">{m.endereco}</p></div></div>
            </div>
          </Card>
          <Card>
            <p className="eyebrow">Informações Pessoais</p>
            <div className="stack-sm" style={{ marginTop: 12 }}>
              <div className="info-row"><Icon name="calendar" size={20} style={{ color: "var(--primary)" }} /><div><p className="eyebrow">Data de Nascimento</p><p className="b500">{m.nascimento}</p></div></div>
              <div className="info-row"><Icon name="calendar" size={20} style={{ color: "var(--primary)" }} /><div><p className="eyebrow">Data de Membresia</p><p className="b500">{m.membresia}</p></div></div>
            </div>
          </Card>
          <Card>
            <p className="eyebrow">Contribuições</p>
            <div className="grid-2" style={{ marginTop: 12 }}>
              <div className="stat-box" style={{ background: "color-mix(in oklch,var(--success) 10%,transparent)" }}>
                <p className="eyebrow">Dízimos em 2026</p><p className="stat-num" style={{ color: "var(--success)" }}>{m.dizimosAno}</p></div>
              <div className="stat-box" style={{ background: "color-mix(in oklch,var(--primary) 10%,transparent)" }}>
                <p className="eyebrow">Total Dízimos</p><p className="stat-num" style={{ color: "var(--primary)" }}>{m.totalDizimos}</p></div>
            </div>
          </Card>
          {m.obs && <Card><p className="eyebrow">Observações</p><p className="sm" style={{ marginTop: 8, lineHeight: 1.5 }}>{m.obs}</p></Card>}
        </div>
          {can(role, "editar_membro") && (
          <div style={{ padding: "0 16px 8px", display: "flex", gap: 8 }}>
            <Button variant="outline" style={{ flex: 1 }} onClick={onEdit}><Icon name="pencil" size={18} /> Editar</Button>
            {can(role, "alterar_status_membro") && <Button variant="outline" style={{ flex: 1 }} onClick={onAlterarStatus}><Icon name="user-check" size={18} /> Status</Button>}
          </div>)}
          {can(role, "excluir_membro") && (
          <div style={{ padding: "0 16px 24px" }}>
            <Button style={{ width: "100%", background: "var(--destructive)", color: "#fff" }} onClick={onDelete}><Icon name="trash-2" size={18} /> Excluir Membro</Button>
          </div>)}
      </div>
    </div>
  );
}

// ----------------------------------------------------------- FINANCEIRO -----
function FinanceiroScreen({ cultos, onNavigate, onOpenCulto, onToast }) {
  const [show, setShow] = React.useState(true);
  const [periodo, setPeriodo] = React.useState("mes");
  const diz = 12450.5, ofe = 3200;
  const mask = (v) => (show ? brl(v) : "••••••••");
  const periodos = [["mes", "Este Mês"], ["anterior", "Mês Anterior"], ["3meses", "Últimos 3 meses"], ["ano", "Este Ano"]];

  // transações recentes cross-cultos
  const txs = [];
  cultos.forEach((c) => {
    c.dizimos.forEach((d) => txs.push({ tipo: "DIZIMO", quem: d.membro, valor: d.valor, data: d.data, forma: d.forma }));
    c.ofertas.forEach((o) => txs.push({ tipo: "OFERTA", quem: "Oferta " + o.tipo, valor: o.valor, data: o.data, forma: o.forma }));
  });
  const recentes = txs.slice(0, 5);
  const emAndamento = cultos.find((c) => c.status === "EM_ANDAMENTO");

  return (
    <div className="screen has-nav">
      <header className="hdr-primary flat">
        <div className="row-between" style={{ marginBottom: 12 }}>
          <h1 className="hdr-name" style={{ fontSize: 24 }}>Financeiro</h1>
          <button className="hdr-back" onClick={() => setShow(!show)}><Icon name={show ? "eye" : "eye-off"} size={20} /></button>
        </div>
        <p className="hdr-greet">Última conferência: 24/05/2026</p>
      </header>
      <div className="fin-body">
        <div className="fin-card grad-green">
          <div className="row-between" style={{ marginBottom: 12 }}>
            <div><p className="fin-eyebrow">Dízimos</p><p className="fin-num">{mask(diz)}</p></div>
            <div className="fin-ic"><Icon name="dollar-sign" size={24} /></div>
          </div>
          <p className="row-l fin-trend" style={{ gap: 4 }}><Icon name="trending-up" size={16} /> +12.5% este mês</p>
        </div>
        <div className="fin-card grad-gold">
          <div className="row-between" style={{ marginBottom: 12 }}>
            <div><p className="fin-eyebrow">Ofertas</p><p className="fin-num">{mask(ofe)}</p></div>
            <div className="fin-ic"><Icon name="gift" size={24} /></div>
          </div>
          <p className="row-l fin-trend" style={{ gap: 4 }}><Icon name="trending-up" size={16} /> +5.2% este mês</p>
        </div>
        <div className="fin-card-total">
          <p className="eyebrow">Total Recebido</p>
          <p className="fin-num" style={{ color: "var(--primary)", margin: "4px 0 12px" }}>{mask(diz + ofe)}</p>
          <div className="grid-2">
            <div className="stat-box" style={{ background: "color-mix(in oklch,var(--success) 10%,transparent)" }}><p className="metric-sub xs">Dízimos</p><p className="b600" style={{ color: "var(--success)" }}>{show ? brl(diz) : "••••"}</p></div>
            <div className="stat-box" style={{ background: "color-mix(in oklch,var(--accent) 10%,transparent)" }}><p className="metric-sub xs">Ofertas</p><p className="b600" style={{ color: "var(--accent-foreground)" }}>{show ? brl(ofe) : "••••"}</p></div>
          </div>
        </div>

        <div className="pills" style={{ marginTop: 0 }}>
          {periodos.map(([val, lbl]) => (
            <button key={val} className={"pill" + (periodo === val ? " on" : "")} onClick={() => setPeriodo(val)}>{lbl}</button>
          ))}
        </div>

        <Button variant="outline" className="full" onClick={() => onNavigate("relatorios")}>
          <Icon name="bar-chart-2" size={20} /> Ver Relatório Completo
        </Button>

        <h2 className="sec-head-solo">Transações Recentes</h2>
        <div className="stack-sm">
          {recentes.map((tx, i) => {
            const isDiz = tx.tipo === "DIZIMO";
            return (
              <Card key={i} className="row-between compact">
                <div className="row-l" style={{ gap: 12 }}>
                  <div className="tx-ic" style={{ background: isDiz ? "color-mix(in oklch,var(--success) 20%,transparent)" : "color-mix(in oklch,var(--accent) 20%,transparent)" }}>
                    <Icon name={isDiz ? "dollar-sign" : "gift"} size={24} style={{ color: isDiz ? "var(--success)" : "var(--accent-foreground)" }} />
                  </div>
                  <div><p className="b600 sm">{tx.quem}</p><p className="metric-sub xs mono-meta">{tx.data} · {tx.forma.replace(/_/g, " ")}</p></div>
                </div>
                <p className="b600 sm">{show ? brl(tx.valor) : "••••••"}</p>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="fin-fab">
        <Button variant="default" className="full" onClick={() => emAndamento ? onOpenCulto(emAndamento.id) : onToast("Nenhum culto em andamento", "warning")}>Conferir Financeiro</Button>
      </div>
    </div>
  );
}

// ----------------------------------------------------------- RELATÓRIOS -----
function RelatoriosScreen({ role, cultos, onOpenCulto, onNavigate }) {
  const [periodo, setPeriodo] = React.useState("mes");
  const periodos = [["mes", "Este Mês"], ["anterior", "Mês Anterior"], ["3meses", "Últimos 3 meses"], ["ano", "Este Ano"]];
  const totalDiz = cultos.reduce((a, c) => a + cultoTotais(c).dizimos, 0);
  const totalOfe = cultos.reduce((a, c) => a + cultoTotais(c).ofertas, 0);
  const pendentes = cultos.filter((c) => c.status === "FINALIZADO" && !c.conferencia);

  return (
    <div className="screen has-nav">
      <header className="hdr-primary flat">
        <h1 className="hdr-name" style={{ fontSize: 24 }}>Relatórios</h1>
        <p className="hdr-greet">Período: Maio 2026</p>
      </header>
      <div className="fin-body">
        <div className="pills" style={{ marginTop: 0 }}>
          {periodos.map(([val, lbl]) => (
            <button key={val} className={"pill" + (periodo === val ? " on" : "")} onClick={() => setPeriodo(val)}>{lbl}</button>
          ))}
        </div>

        <div className="grid-2">
          <div className="fin-card grad-green" style={{ padding: 16 }}>
            <Icon name="dollar-sign" size={22} />
            <p className="fin-num" style={{ fontSize: 22, marginTop: 6 }}>{brl(totalDiz)}</p>
            <p className="fin-eyebrow" style={{ marginTop: 2 }}>Dízimos · +12%</p>
          </div>
          <div className="fin-card grad-gold" style={{ padding: 16 }}>
            <Icon name="gift" size={22} />
            <p className="fin-num" style={{ fontSize: 22, marginTop: 6 }}>{brl(totalOfe)}</p>
            <p className="fin-eyebrow" style={{ marginTop: 2 }}>Ofertas · +5%</p>
          </div>
        </div>
        <div className="fin-card-total">
          <p className="eyebrow">Total Geral do Período</p>
          <p className="fin-num" style={{ color: "var(--primary)", margin: "4px 0 0" }}>{brl(totalDiz + totalOfe)}</p>
        </div>

        {pendentes.length > 0 && (
          <div className="alert alert-warn">
            <Icon name="alert-circle" size={20} style={{ color: "var(--warning)" }} />
            <div style={{ flex: 1 }}>
              <p className="b600" style={{ color: "var(--warning)", margin: 0 }}>{pendentes.length} culto(s) com conferência pendente</p>
              {pendentes.map((c) => (
                <button key={c.id} className="pend-link" onClick={() => onOpenCulto(c.id)}>Culto {c.data} — Conferir agora</button>
              ))}
            </div>
          </div>
        )}

        {can(role, "ver_auditoria") && (
          <Button variant="outline" className="full" onClick={() => onNavigate("auditoria")}>
            <Icon name="shield" size={20} /> Ver Log de Auditoria
          </Button>
        )}
        <h2 className="sec-head-solo">Arrecadação por Culto</h2>
        <div className="stack-sm">
          {cultos.map((c) => {
            const t = cultoTotais(c);
            const conf = c.conferencia;
            return (
              <Card key={c.id} className="tap" onClick={() => onOpenCulto(c.id)}>
                <div className="row-between" style={{ marginBottom: 8 }}>
                  <div><p className="b600 sm">{c.tema}</p><p className="metric-sub xs">{c.data}</p></div>
                  {conf
                    ? <Badge tone={conf.status === "CONFERIDO" ? "success" : "warning"}><Icon name={conf.status === "CONFERIDO" ? "check-circle-2" : "alert-circle"} size={12} />{conf.status === "CONFERIDO" ? "Conferido" : "Divergente"}</Badge>
                    : <Badge tone="muted"><Icon name="lock-open" size={12} />Pendente</Badge>}
                </div>
                <div className="rep-row">
                  <span className="metric-sub xs">Dízimos <b className="val-money" style={{ color: "var(--success)" }}>{brl(t.dizimos)}</b></span>
                  <span className="metric-sub xs">Ofertas <b className="val-money" style={{ color: "var(--accent-foreground)" }}>{brl(t.ofertas)}</b></span>
                  <span className="metric-sub xs">Total <b className="val-money" style={{ color: "var(--primary)" }}>{brl(t.total)}</b></span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------- AUDITORIA -----
function AuditoriaScreen({ onBack }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("TODOS");
  const tipos = ["TODOS", "Culto", "Dizimo", "Oferta", "Conferencia", "Membro"];
  const list = AUDIT_LOGS.filter((l) => {
    const okQ = !q || l.descricao.toLowerCase().includes(q.toLowerCase()) || l.usuario.toLowerCase().includes(q.toLowerCase());
    const okF = filter === "TODOS" || l.entidadeTipo === filter;
    return okQ && okF;
  });
  const ACAO_COLOR = { INSERT: "var(--success)", UPDATE: "var(--warning)", DELETE: "var(--destructive)" };
  const ACAO_ICON = { INSERT: "plus-circle", UPDATE: "pencil", DELETE: "trash-2" };
  const TIPO_COLOR = {
    Culto: "var(--primary)", Dizimo: "var(--success)", Oferta: "var(--accent-foreground)",
    Conferencia: "var(--warning)", Membro: "var(--muted-foreground)",
  };
  return (
    <div className="screen">
      <header className="hdr-primary flat">
        <div className="row-l" style={{ gap: 10, marginBottom: 14 }}>
          <button className="hdr-back" onClick={onBack}><Icon name="arrow-left" size={22} /></button>
          <div>
            <h1 className="hdr-name" style={{ fontSize: 20 }}>Auditoria</h1>
            <p className="hdr-greet">Log de alterações do sistema</p>
          </div>
        </div>
        <div className="field-icon-l">
          <Icon name="search" size={20} />
          <Input placeholder="Buscar por descrição ou usuário..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </header>
      <div className="pills" style={{ padding: "12px 16px 0", overflowX: "auto" }}>
        {tipos.map((t) => (
          <button key={t} className={"pill" + (filter === t ? " on" : "")} onClick={() => setFilter(t)}>{t}</button>
        ))}
      </div>
      <div style={{ padding: "12px 16px 80px" }}>
        {list.length === 0 ? (
          <div className="empty"><Icon name="shield" size={48} style={{ color: "var(--muted-foreground)" }} /><p>Nenhum registro encontrado</p></div>
        ) : list.map((log) => (
          <div key={log.id} className="audit-entry">
            <div className="audit-timeline-line" />
            <div className="audit-dot" style={{ background: ACAO_COLOR[log.acao] }}>
              <Icon name={ACAO_ICON[log.acao]} size={12} style={{ color: "#fff" }} />
            </div>
            <div className="audit-body">
              <div className="row-between" style={{ marginBottom: 4 }}>
                <div className="row-l" style={{ gap: 6 }}>
                  <span className="badge badge-muted" style={{ fontSize: 11, padding: "3px 8px", color: TIPO_COLOR[log.entidadeTipo] }}>{log.entidadeTipo}</span>
                  <span className="badge" style={{ fontSize: 11, padding: "3px 8px", background: "color-mix(in oklch," + ACAO_COLOR[log.acao] + " 12%,transparent)", color: ACAO_COLOR[log.acao] }}>{log.acao}</span>
                </div>
                <span className="metric-sub xs mono-meta">{log.timestamp}</span>
              </div>
              <p className="b500" style={{ margin: "0 0 4px", fontSize: 14, lineHeight: 1.4 }}>{log.descricao}</p>
              <div className="row-l" style={{ gap: 12 }}>
                <span className="row-l metric-sub xs" style={{ gap: 4 }}><Icon name="user" size={12} />{log.usuario}</span>
                {log.culto && <span className="row-l metric-sub xs" style={{ gap: 4 }}><Icon name="church" size={12} />{log.culto}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { MembrosScreen, MembroDetalheScreen, FinanceiroScreen, RelatoriosScreen, AuditoriaScreen });
