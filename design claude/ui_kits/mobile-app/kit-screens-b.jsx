/* global React, Icon, Button, Input, Badge, Card, brl */
// =============================================================================
// Igreja Ipiranga — Screens B: Membros, Membro Detalhe, Financeiro, Conferência
// =============================================================================

const MEMBROS = [
  { id: 1, nome: "João Silva", status: "ATIVO", dizimista: true, tel: "(11) 98765-4321" },
  { id: 2, nome: "Maria Santos", status: "ATIVO", dizimista: true, tel: "(11) 98765-4322" },
  { id: 3, nome: "Pedro Oliveira", status: "INATIVO", dizimista: false, tel: "(11) 98765-4323" },
  { id: 4, nome: "Ana Costa", status: "ATIVO", dizimista: true, tel: "(11) 98765-4324" },
  { id: 5, nome: "Carlos Gomes", status: "ATIVO", dizimista: false, tel: "(11) 98765-4325" },
];

// -------------------------------------------------------------- MEMBROS -----
function MembrosScreen({ onNavigate, onToast }) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("TODOS");
  const list = MEMBROS.filter((m) => m.nome.toLowerCase().includes(q.toLowerCase()) && (filter === "TODOS" || m.status === filter));
  const filters = [["TODOS", "Todos"], ["ATIVO", "Ativos"], ["INATIVO", "Inativos"]];
  return (
    <div className="screen has-nav">
      <header className="hdr-primary">
        <h1 className="hdr-name" style={{ marginBottom: 12 }}>Membros</h1>
        <div className="row" style={{ gap: 8 }}>
          <div className="field-icon-l onprimary" style={{ flex: 1 }}>
            <Icon name="search" size={20} />
            <Input placeholder="Buscar membro..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <button className="icon-btn-light" onClick={() => onToast("Filtros avançados")}><Icon name="filter" size={20} /></button>
        </div>
      </header>
      <div className="filter-strip">
        {filters.map(([val, lbl]) => (
          <button key={val} className={"pill" + (filter === val ? " on" : "")} onClick={() => setFilter(val)}>{lbl}</button>
        ))}
      </div>
      <div className="list">
        {list.length === 0 ? (
          <div className="empty"><Icon name="user" size={48} style={{ color: "var(--muted-foreground)" }} /><p>Nenhum membro encontrado</p></div>
        ) : list.map((m) => (
          <Card key={m.id} className="tap row-between" onClick={() => onNavigate("membro-detalhe")}>
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
            <div className="avatar"><Icon name="user" size={24} style={{ color: "var(--primary)" }} /></div>
          </Card>
        ))}
      </div>
      <button className="fab" onClick={() => onToast("Cadastrar membro — em breve")}><Icon name="plus" size={24} /></button>
    </div>
  );
}

// ------------------------------------------------------- MEMBRO DETALHE -----
function MembroDetalheScreen({ onBack }) {
  const [fav, setFav] = React.useState(false);
  const m = {
    nome: "João Silva Santos", email: "joao.silva@email.com", tel: "(11) 98765-4321",
    endereco: "Rua Principal, 123 - São Paulo, SP", nascimento: "15/06/1980", membresia: "10/01/2015",
    obs: "Membro ativo e comprometido. Participa do louvor.", dizimosAno: 12, totalDizimos: "R$ 6.240,00",
  };
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
            <span className="chip-light">Ativo</span>
            <span className="chip-gold">Dizimista</span>
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
          <Card><p className="eyebrow">Observações</p><p className="sm" style={{ marginTop: 8, lineHeight: 1.5 }}>{m.obs}</p></Card>
        </div>
        <div style={{ padding: "0 16px 24px" }}>
          <Button variant="default" className="full"><Icon name="pencil" size={20} /> Editar</Button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------- FINANCEIRO -----
const TXS = [
  { id: 1, tipo: "DIZIMO", quem: "João Silva", valor: 250, data: "11/05/2026", forma: "PIX" },
  { id: 2, tipo: "OFERTA", quem: "Oferta - Ação Social", valor: 150, data: "10/05/2026", forma: "DINHEIRO" },
  { id: 3, tipo: "DIZIMO", quem: "Maria Santos", valor: 300, data: "09/05/2026", forma: "TRANSFERENCIA" },
  { id: 4, tipo: "OFERTA", quem: "Oferta - Missões", valor: 500, data: "08/05/2026", forma: "CARTAO_DEBITO" },
];
function FinanceiroScreen({ onNavigate, onToast }) {
  const [show, setShow] = React.useState(true);
  const diz = 12450.5, ofe = 3200;
  const mask = (v) => (show ? brl(v) : "••••••••");
  return (
    <div className="screen has-nav">
      <header className="hdr-primary flat">
        <div className="row-between" style={{ marginBottom: 12 }}>
          <h1 className="hdr-name" style={{ fontSize: 24 }}>Financeiro</h1>
          <button className="hdr-back" onClick={() => setShow(!show)}><Icon name={show ? "eye" : "eye-off"} size={20} /></button>
        </div>
        <p className="hdr-greet">Última conferência: 11/05/2026</p>
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
        <div className="grid-2">
          <Button variant="default" onClick={() => onToast("Adicionar dízimo")}>Adicionar Dízimo</Button>
          <Button variant="outline" onClick={() => onToast("Adicionar oferta")}>Adicionar Oferta</Button>
        </div>
        <h2 className="sec-head-solo">Transações Recentes</h2>
        <div className="stack-sm">
          {TXS.map((t) => {
            const isDiz = t.tipo === "DIZIMO";
            return (
              <Card key={t.id} className="row-between compact">
                <div className="row-l" style={{ gap: 12 }}>
                  <div className="tx-ic" style={{ background: isDiz ? "color-mix(in oklch,var(--success) 20%,transparent)" : "color-mix(in oklch,var(--accent) 20%,transparent)" }}>
                    <Icon name={isDiz ? "dollar-sign" : "gift"} size={24} style={{ color: isDiz ? "var(--success)" : "var(--accent-foreground)" }} />
                  </div>
                  <div><p className="b600 sm">{t.quem}</p><p className="metric-sub xs">{t.data} • {t.forma.replace(/_/g, " ")}</p></div>
                </div>
                <p className="b600 sm">{show ? brl(t.valor) : "••••••"}</p>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="fin-fab">
        <Button variant="default" className="full" onClick={() => onNavigate("conferencia")}>Conferir Financeiro</Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------- CONFERÊNCIA -----
function ConferenciaScreen({ onBack, onToast }) {
  const [valor, setValor] = React.useState("15650.50");
  const dados = { diz: 12450.5, ofe: 3200, total: 15650.5 };
  const v = parseFloat(valor.replace(",", ".")) || 0;
  const dif = v - dados.total;
  const ok = Math.abs(dif) < 0.01;
  return (
    <div className="screen">
      <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
        <button className="hdr-back" onClick={onBack}><Icon name="arrow-left" size={24} /></button>
        <h1 className="hdr-name" style={{ fontSize: 18 }}>Conferência Financeira</h1>
      </header>
      <div className="detail-scroll" style={{ padding: 16 }}>
        <div className={"alert " + (ok ? "alert-ok" : "alert-warn")}>
          <Icon name={ok ? "check-circle-2" : "alert-circle"} size={20} style={{ color: ok ? "var(--success)" : "var(--warning)" }} />
          <div>
            <p className="b600" style={{ color: ok ? "var(--success)" : "var(--warning)" }}>{ok ? "Conferência OK" : "Divergência Detectada"}</p>
            <p className="metric-sub">{ok ? "Os valores conferem perfeitamente." : "Diferença de " + brl(Math.abs(dif))}</p>
          </div>
        </div>
        <p className="eyebrow" style={{ margin: "16px 0 8px" }}>Valores Calculados</p>
        <Card>
          <div className="kv"><span className="row-l" style={{ gap: 8 }}><Icon name="dollar-sign" size={20} style={{ color: "var(--success)" }} /> Dízimos</span><span className="b600">{brl(dados.diz)}</span></div>
          <div className="kv"><span className="row-l" style={{ gap: 8 }}><Icon name="gift" size={20} style={{ color: "var(--accent-foreground)" }} /> Ofertas</span><span className="b600">{brl(dados.ofe)}</span></div>
          <div className="kv-total"><span className="b600">Total Calculado</span><span className="b700" style={{ color: "var(--primary)", fontSize: 18 }}>{brl(dados.total)}</span></div>
        </Card>
        <p className="eyebrow" style={{ margin: "16px 0 8px" }}>Valor Conferido (total do dinheiro contado)</p>
        <div className="field-icon-l conf-input">
          <Icon name="dollar-sign" size={20} />
          <Input value={valor} onChange={(e) => setValor(e.target.value)} placeholder="0,00" />
        </div>
        <p className="metric-sub xs" style={{ marginTop: 6 }}>Use ponto ou vírgula como separador decimal</p>
        <Card style={{ marginTop: 16 }}>
          <p className="eyebrow">Detalhes da Conferência</p>
          <div className="stack-sm" style={{ marginTop: 8 }}>
            <div className="kv-plain"><span>Total Calculado</span><span className="b600">{brl(dados.total)}</span></div>
            <div className="kv-plain"><span>Total Conferido</span><span className="b600">{brl(v)}</span></div>
            <div className="kv-total"><span className="b700" style={{ color: dif >= 0 ? "var(--success)" : "var(--destructive)" }}>{dif >= 0 ? "Excesso" : "Falta"}</span>
              <span className="b700" style={{ color: dif >= 0 ? "var(--success)" : "var(--destructive)", fontSize: 18 }}>{dif >= 0 ? "+" : ""}{brl(dif)}</span></div>
          </div>
        </Card>
        <p className="eyebrow" style={{ margin: "16px 0 8px" }}>Observações (Opcional)</p>
        <textarea className="textarea" rows={3} placeholder="Ex: Faltaram alguns trocados, valor já descontado..."></textarea>
      </div>
      <div className="fin-fab row" style={{ gap: 8 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={onBack}>Cancelar</Button>
        <Button style={{ flex: 1, background: ok ? "var(--success)" : "var(--warning)", color: "#fff" }} onClick={() => onToast("Conferência registrada")}>
          {ok ? "Confirmar" : "Conferir Mesmo Assim"}
        </Button>
      </div>
    </div>
  );
}

Object.assign(window, { MembrosScreen, MembroDetalheScreen, FinanceiroScreen, ConferenciaScreen });
