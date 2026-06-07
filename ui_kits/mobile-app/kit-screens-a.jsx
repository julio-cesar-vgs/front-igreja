/* global React, Icon, Button, Input, Badge, Card, brl, can, cultoTotais, USER */
// =============================================================================
// Igreja Ipiranga — Screens A (V2): Login, Dashboard, Cultos, Culto Detalhe
// =============================================================================

// ---------------------------------------------------------------- LOGIN -----
function LoginScreen({ onLogin }) {
  const [email, setEmail] = React.useState("admin@igreja.com");
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
          <Input value={email} error={!!errors.email} placeholder="seu@email.com" autoComplete="email"
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
        <p className="login-version">Versão 1.0.0</p>
      </div>
    </div>
  );
}

// ------------------------------------------------------------ DASHBOARD -----
function DashboardScreen({ role, cultos, onNavigate, onOpenCulto, onRegistrarDizimo, onToast }) {
  const proximo = cultos.find((c) => c.status === "EM_ANDAMENTO") || cultos[0];
  const ativos = 87;
  const mesTotal = "R$ 3.240";
  const QUICK = [
    { ic: "church", lbl: "Novo Culto", act: "criar_culto" },
    { ic: "users", lbl: "Novo Membro", act: "cadastrar_membro" },
    { ic: "dollar-sign", lbl: "Registrar Dízimo", act: "registrar_dizimo" },
    { ic: "bar-chart-2", lbl: "Relatórios", act: "relatorios" },
    { ic: "shield", lbl: "Auditoria", act: "ver_auditoria" },
  ].filter((q) => can(role, q.act));

  return (
    <div className="screen has-nav">
      <header className="hdr-primary rounded-b">
        <div className="hdr-row">
          <div>
            <p className="hdr-greet">Bem-vindo,</p>
            <h1 className="hdr-name">{USER.nome}</h1>
          </div>
          <button className="hdr-bell" onClick={() => onToast("Nenhuma notificação nova", "success")}>
            <Icon name="bell" size={24} /><span className="dot" />
          </button>
        </div>
        <div className="church-pill">
          <div className="church-pill-l">
            <div className="church-ic"><Icon name="church" size={20} /></div>
            <div>
              <p className="church-name">{USER.igreja}</p>
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
            <p className="metric-num">{ativos}</p><p className="metric-sub">Membros Ativos</p>
          </Card>
          <Card className="tap" onClick={() => onNavigate("financeiro")}>
            <div className="metric-ic" style={{ background: "color-mix(in oklch,var(--chart-2) 20%,transparent)" }}>
              <Icon name="wallet" size={20} style={{ color: "var(--chart-2)" }} />
            </div>
            <p className="metric-num">{mesTotal}</p><p className="metric-sub">Este Mês</p>
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
        <Card className="accent-l tap" onClick={() => onOpenCulto(proximo.id)}>
          <div className="row-between">
            <div>
              <h3 className="b600">{proximo.tema}</h3>
              <p className="metric-sub" style={{ marginBottom: 8 }}>{proximo.dataHora}</p>
              <p className="row-l metric-sub" style={{ gap: 6 }}><Icon name="calendar" size={16} /> {proximo.data}</p>
            </div>
            <Badge tone="accent">Em andamento</Badge>
          </div>
        </Card>

        {QUICK.length > 0 && (
          <>
            <h2 className="sec-head-solo">Ações Rápidas</h2>
            <div className="grid-2">
              {QUICK.map((q) => (
                <button key={q.lbl} className="quick" onClick={() => {
                  if (q.act === "registrar_dizimo") { onRegistrarDizimo(); }
                  else if (q.act === "relatorios") { onNavigate("relatorios"); }
                  else if (q.act === "ver_auditoria") { onNavigate("auditoria"); }
                  else { onToast(q.lbl + " — em breve", "success"); }
                }}>
                  <Icon name={q.ic} size={24} style={{ color: "var(--primary)" }} /><span>{q.lbl}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// --------------------------------------------------------------- CULTOS -----
const STATUS = {
  AGENDADO: { label: "Agendado", tone: "muted" },
  EM_ANDAMENTO: { label: "Em Andamento", tone: "accent" },
  FINALIZADO: { label: "Finalizado", tone: "success" },
};
function CultosScreen({ role, cultos, onOpenCulto, onNovoCulto }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState(null);
  const list = cultos.filter((c) => c.tema.toLowerCase().includes(q.toLowerCase()) && (!filter || c.status === filter));
  const filters = [[null, "Todos"], ["EM_ANDAMENTO", "Em Andamento"], ["AGENDADO", "Agendados"], ["FINALIZADO", "Finalizados"]];
  return (
    <div className="screen has-nav">
      <header className="hdr-sticky">
        <div className="row-between" style={{ marginBottom: 16 }}>
          <h1 className="hdr-name dark">Cultos</h1>
          {can(role, "criar_culto") && <Button size="sm" onClick={onNovoCulto}><Icon name="plus" size={16} /> Novo</Button>}
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
          const t = cultoTotais(c);
          return (
            <Card key={c.id} className={"tap" + (c.status === "EM_ANDAMENTO" ? " accent-l" : "")} onClick={() => onOpenCulto(c.id)}>
              <div className="row-between">
                <div style={{ minWidth: 0 }}>
                  <div className="row-l" style={{ gap: 6 }}>
                    <Badge tone={s.tone}>{s.label}</Badge>
                    {c.conferencia && <Badge tone={c.conferencia.status === "CONFERIDO" ? "success" : "warning"}>
                      <Icon name={c.conferencia.status === "CONFERIDO" ? "check-circle-2" : "alert-circle"} size={12} />
                      {c.conferencia.status === "CONFERIDO" ? "Conferido" : "Divergente"}
                    </Badge>}
                  </div>
                  <h3 className="b600" style={{ margin: "6px 0 4px" }}>{c.tema}</h3>
                  <div className="row-l metric-sub" style={{ gap: 16 }}>
                    <span className="row-l" style={{ gap: 4 }}><Icon name="calendar" size={16} />{c.dataHora}</span>
                    <span className="row-l" style={{ gap: 4 }}><Icon name="users" size={16} />{c.pessoas}</span>
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
function PessoasSection({ titulo, icon, iconBg, iconColor, items, render, addLabel, locked, onAdd }) {
  return (
    <div>
      <div className="row-between" style={{ marginBottom: 8 }}>
        <h3 className="eyebrow">{titulo}</h3>
        <button className="link-sm" disabled={locked} onClick={onAdd}><Icon name="plus" size={14} /> Adicionar</button>
      </div>
      {items.length === 0 ? (
        <p className="metric-sub" style={{ padding: "4px 0 8px" }}>Nenhum registrado</p>
      ) : items.map((it, i) => (
        <Card key={i} className="row-l compact" style={{ gap: 12, marginBottom: 8 }}>
          <div className="circ-ic sm" style={{ background: iconBg }}><Icon name={icon} size={16} style={{ color: iconColor }} /></div>
          <div>{render(it)}</div>
        </Card>
      ))}
    </div>
  );
}

function CultoDetalheScreen({ role, culto, defaultTab, onBack, onConferir, onReabrir, onAddDizimo, onAddOferta, onEditDizimo, onDeleteDizimo, onEditOferta, onDeleteOferta, onEditCulto, onDeleteCulto, onAddSub, onToast }) {
  const [tab, setTab] = React.useState(defaultTab || "resumo");
  const [priv, setPriv] = React.useState(false);
  const t = cultoTotais(culto);
  const finLocked = !!culto.conferencia;   // só bloqueia financeiro
  const locked = finLocked;                 // alias para compat (removido dos sub-entity props)
  const conferido = locked && culto.conferencia.status === "CONFERIDO";
  const tabs = [["resumo", "Resumo"], ["louvores", "Louvores"], ["pessoas", "Pessoas"], ["financeiro", "Financeiro"]];
  const addDisabled = (lbl) => locked ? onToast("Culto conferido. Apenas ADMIN pode reabrir.", "warning") : onToast(lbl + " — em breve", "success");
  const money = (v) => (priv ? "••••••" : brl(v));

  return (
    <div className="screen">
      <header className="hdr-primary rounded-b">
        <div className="row-l" style={{ gap: 12, marginBottom: 16 }}>
          <button className="hdr-back" onClick={onBack}><Icon name="arrow-left" size={20} /></button>
          <div style={{ flex: 1 }}>
            <Badge tone={culto.status === "EM_ANDAMENTO" ? "accent" : "muted"}>{STATUS[culto.status].label}</Badge>
            <h1 className="hdr-name" style={{ marginTop: 4, fontSize: 18 }}>{culto.tema}</h1>
            <p className="hdr-greet">{culto.dataHora}</p>
          </div>
          {can(role, "editar_culto") && !locked && (
            <div className="row-l" style={{ gap: 4 }}>
              <button className="hdr-back" onClick={onEditCulto}><Icon name="pencil" size={18} /></button>
              <button className="hdr-back" style={{ background: "color-mix(in oklch,var(--destructive) 25%,transparent)" }} onClick={onDeleteCulto}><Icon name="trash-2" size={18} /></button>
            </div>
          )}
        </div>
        <div className="grid-3">
          {[[culto.pessoas, "Pessoas"], ["R$ " + t.dizimos.toLocaleString("pt-BR"), "Dízimos"], ["R$ " + t.ofertas.toLocaleString("pt-BR"), "Ofertas"]].map(([n, l]) => (
            <div key={l} className="mini-card"><p className="mini-num">{n}</p><p className="mini-lbl">{l}</p></div>
          ))}
        </div>
      </header>

      {finLocked && (
        <LockedBanner data={culto.conferencia.data} conferenteNome={culto.conferencia.conferenteNome} canReabrir={can(role, "reabrir")} onReabrir={onReabrir} />
      )}

      <div className="detail-body">
        <div className="tabs">
          {tabs.map(([id, lbl]) => (
            <button key={id} className={"tab" + (tab === id ? " on" : "")} onClick={() => setTab(id)}>{lbl}</button>
          ))}
        </div>

        {tab === "resumo" && (
          <div className="stack-md">
            <Card>
              {[["Palavra Inicial", culto.palavraInicial], ["Palavra Final", culto.palavraFinal], ["Louvores", culto.louvores.length], ["Visitantes", culto.visitantes.length]].map(([k, v]) => (
                <div key={k} className="kv"><span className="metric-sub">{k}</span><span className="b500">{v}</span></div>
              ))}
            </Card>
            <Card className={conferido ? "success-l" : "accent-l"}>
              <div className="row-between">
                <div className="row-l" style={{ gap: 8 }}>
                  <Icon name={conferido ? "check-circle-2" : "alert-circle"} size={20} style={{ color: conferido ? "var(--success)" : "var(--accent)" }} />
                  <div>
                    <p className="b500">Caixa Financeiro</p>
                    <p className="metric-sub">{finLocked ? (culto.conferencia.status === "CONFERIDO" ? "Conferido em " + culto.conferencia.data : "Divergente · " + culto.conferencia.data) : "Pendente"}</p>
                  </div>
                </div>
                {!finLocked && can(role, "conferir") && <Button size="sm" onClick={onConferir}>Conferir</Button>}
              </div>
            </Card>
            {can(role, "editar_culto") && (
              <Card style={{ borderLeft: "4px solid var(--primary)" }}>
                <div className="row-between">
                  <div className="row-l" style={{ gap: 8 }}>
                    <Icon name="door-closed" size={20} style={{ color: "var(--primary)" }} />
                    <div>
                      <p className="b500">Fechar Culto</p>
                      <p className="metric-sub">Muda status para Finalizado</p>
                    </div>
                  </div>
                  <Button size="sm" onClick={onEditCulto}>
                    {culto.status === "FINALIZADO" ? "Reabrir" : "Fechar"}
                  </Button>
                </div>
              </Card>
            )}
          </div>
        )}

        {tab === "louvores" && (
          <div className="stack-sm">
            <Button variant="outline" className="full" onClick={() => onAddSub("louvor")}><Icon name="plus" size={20} /> Adicionar Louvor</Button>
            {culto.louvores.length === 0 ? (
              <div className="empty"><Icon name="music" size={40} style={{ color: "var(--muted-foreground)" }} /><p>Nenhum louvor adicionado</p></div>
            ) : culto.louvores.map((l, i) => (
              <Card key={i} className="row-l" style={{ gap: 12 }}>
                <div className="circ-ic"><Icon name="music" size={20} style={{ color: "var(--primary)" }} /></div>
                <div><p className="b500">{l.nome}</p><p className="metric-sub">{l.hino}</p></div>
              </Card>
            ))}
          </div>
        )}

        {tab === "pessoas" && (
          <div className="stack-md">
            <PessoasSection titulo="Músicos" icon="mic-2" iconBg="color-mix(in oklch,var(--primary) 10%,transparent)" iconColor="var(--primary)"
              items={culto.musicos} locked={false} onAdd={() => onAddSub("musico")}
              render={(m) => <p className="b500 sm">{m.nome}</p>} />
            <PessoasSection titulo="Cooperadores" icon="user-check" iconBg="var(--secondary)" iconColor="var(--secondary-foreground)"
              items={culto.cooperadores} locked={false} onAdd={() => onAddSub("cooperador")}
              render={(c) => <><p className="b500 sm">{c.nome}</p><p className="metric-sub xs">{c.cargo}</p></>} />
            <PessoasSection titulo="Presbíteros" icon="user-check" iconBg="color-mix(in oklch,var(--accent) 20%,transparent)" iconColor="var(--accent-foreground)"
              items={culto.presbiteros} locked={false} onAdd={() => onAddSub("presbitero")}
              render={(p) => <p className="b500 sm">{p.nome}</p>} />
            <PessoasSection titulo="Visitantes" icon="users" iconBg="color-mix(in oklch,var(--accent) 20%,transparent)" iconColor="var(--accent-foreground)"
              items={culto.visitantes} locked={false} onAdd={() => onAddSub("visitante")}
              render={(v) => <><p className="b500 sm">{v.nome}</p><p className="metric-sub xs">{v.tel || v.telefone}</p></>} />
          </div>
        )}

        {tab === "financeiro" && (
          <div className="stack-md">
            <div className="row-between">
              <h3 className="eyebrow">Lançamentos</h3>
              <button className="priv-toggle" onClick={() => setPriv(!priv)}><Icon name={priv ? "eye-off" : "eye"} size={18} /></button>
            </div>
            <div className="grid-2">
              <div className="tot-card" style={{ background: "color-mix(in oklch,var(--success) 10%,transparent)" }}>
                <Icon name="dollar-sign" size={24} style={{ color: "var(--success)" }} />
                <p className="tot-num" style={{ color: "var(--success)" }}>{money(t.dizimos)}</p><p className="metric-sub">Dízimos</p>
              </div>
              <div className="tot-card" style={{ background: "color-mix(in oklch,var(--accent) 10%,transparent)" }}>
                <Icon name="gift" size={24} style={{ color: "var(--accent-foreground)" }} />
                <p className="tot-num" style={{ color: "var(--accent-foreground)" }}>{money(t.ofertas)}</p><p className="metric-sub">Ofertas</p>
              </div>
            </div>

            {/* Lista de Dízimos */}
            <div>
              <div className="row-between" style={{ marginBottom: 8 }}>
                <h3 className="eyebrow">Dízimos</h3>
                {can(role, "registrar_dizimo") && <button className="link-sm" disabled={finLocked} onClick={onAddDizimo}><Icon name="plus" size={14} /> Registrar</button>}
              </div>
              {culto.dizimos.length === 0 ? (
                <p className="metric-sub">Nenhum dízimo registrado neste culto</p>
              ) : culto.dizimos.map((d, i) => (
                <Card key={i} className="compact" style={{ marginBottom: 8 }}>
                  <div className="row-between" style={{ marginBottom: 4 }}>
                    <div className="row-l" style={{ gap: 10 }}>
                      <div className="avatar sm">{d.membro.charAt(0)}</div>
                      <p className="b600 sm">{d.membro}{d.membroCadastrado === false && <span className="tag-avulso">avulso</span>}</p>
                    </div>
                    <span className="val-money" style={{ color: "var(--success)" }}>{money(d.valor)}</span>
                  </div>
                  <div className="fin-item-meta">
                    <p className="metric-sub xs mono-meta">{d.forma ? d.forma.replace(/_/g, " ") : ""} · {d.data}</p>
                    {!finLocked && can(role, "registrar_dizimo") && (
                      <div className="fin-item-actions">
                        <button className="item-action" onClick={() => onEditDizimo(i)}><Icon name="pencil" size={14} /></button>
                        <button className="item-action del" onClick={() => onDeleteDizimo(i)}><Icon name="trash-2" size={14} /></button>
                      </div>
                    )}
                  </div>
                  {d.conferente && <p className="audit-line"><Icon name="shield-check" size={11} /> {d.tesoureiro} · conf. {d.conferente}</p>}
                </Card>
              ))}
            </div>

            {/* Lista de Ofertas */}
            <div>
              <div className="row-between" style={{ marginBottom: 8 }}>
                <h3 className="eyebrow">Ofertas</h3>
                {can(role, "registrar_oferta") && <button className="link-sm" disabled={finLocked} onClick={onAddOferta}><Icon name="plus" size={14} /> Registrar</button>}
              </div>
              {culto.ofertas.map((o, i) => (
                <Card key={i} className="compact" style={{ marginBottom: 8 }}>
                  <div className="row-between" style={{ marginBottom: 4 }}>
                    <div className="row-l" style={{ gap: 10 }}>
                      <div className="circ-ic sm" style={{ background: "color-mix(in oklch,var(--accent) 12%,transparent)" }}><Icon name="gift" size={16} style={{ color: "var(--accent-foreground)" }} /></div>
                      <p className="b600 sm">Oferta {o.tipo}</p>
                    </div>
                    <span className="val-money" style={{ color: "var(--accent-foreground)" }}>{money(o.valor)}</span>
                  </div>
                  <div className="fin-item-meta">
                    <p className="metric-sub xs mono-meta">{o.forma ? o.forma.replace(/_/g, " ") : ""} · {o.data}</p>
                    {!finLocked && can(role, "registrar_oferta") && (
                      <div className="fin-item-actions">
                        <button className="item-action" onClick={() => onEditOferta(i)}><Icon name="pencil" size={14} /></button>
                        <button className="item-action del" onClick={() => onDeleteOferta(i)}><Icon name="trash-2" size={14} /></button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="grand-total">
              <p className="metric-sub" style={{ color: "var(--primary-foreground)", opacity: .8 }}>Total Geral</p>
              <p className="grand-num">{priv ? "••••••••" : "R$ " + t.total.toLocaleString("pt-BR")}</p>
            </div>

            {can(role, "conferir") && (
              <Button className="full conferir-btn" disabled={finLocked}
                style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                onClick={() => finLocked ? onToast("Caixa já conferido. Use Reabrir para editar.", "warning") : onConferir()}>
                <Icon name="check-circle-2" size={20} /> {locked ? "Caixa já conferido" : "Conferir Caixa"}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, DashboardScreen, CultosScreen, CultoDetalheScreen });
