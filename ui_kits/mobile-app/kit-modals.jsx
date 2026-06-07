/* global React, Icon, Button, Input, Sheet, brl, cultoTotais */
// =============================================================================
// Igreja Ipiranga — Modais (V2): Conferência, Reabertura, Novo Culto, Sessão
// =============================================================================

// ------------------------------------------------ MODAL: CONFERÊNCIA --------
function ConferenciaModal({ culto, onClose, onConfirm }) {
  const t = cultoTotais(culto);
  const [diz, setDiz] = React.useState(String(t.dizimos).replace(".", ","));
  const [ofe, setOfe] = React.useState(String(t.ofertas).replace(".", ","));
  const num = (s) => parseFloat(String(s).replace(/\./g, "").replace(",", ".")) || 0;
  const dizC = num(diz), ofeC = num(ofe);
  const [totalManual, setTotalManual] = React.useState(null);
  const totalC = totalManual != null ? num(totalManual) : dizC + ofeC;
  const dif = totalC - t.total;
  const ok = Math.abs(dif) < 0.01;
  const [conferenteNome, setConferenteNome] = React.useState("");
  const [conferenteIsUser, setConferenteIsUser] = React.useState(false);
  const [outrosParticipantes, setOutrosParticipantes] = React.useState("");
  const [obs, setObs] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const confErr = !conferenteNome.trim() ? "O nome do conferente é obrigatório"
    : conferenteNome.trim().length < 2 ? "O nome do conferente deve ter entre 2 e 100 caracteres" : null;
  const canSave = !confErr;

  return (
    <Sheet variant="full" onClose={onClose}>
      <div className="sheet-screen">
        <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
          <button className="hdr-back" onClick={onClose}><Icon name="arrow-left" size={22} /></button>
          <div>
            <h1 className="hdr-name" style={{ fontSize: 18 }}>Conferência Financeira</h1>
            <p className="hdr-greet">{culto.tema} · {culto.data}</p>
          </div>
        </header>
        <div className="sheet-body">
          {/* Bloco 1 — Sistema */}
          <p className="eyebrow">Valores Calculados pelo Sistema</p>
          <Card style={{ background: "color-mix(in oklch,var(--muted) 50%,var(--card))" }}>
            <div className="kv"><span className="row-l" style={{ gap: 8 }}><Icon name="dollar-sign" size={20} style={{ color: "var(--success)" }} /> Dízimos</span><span className="b600">{brl(t.dizimos)}</span></div>
            <div className="kv"><span className="row-l" style={{ gap: 8 }}><Icon name="gift" size={20} style={{ color: "var(--accent-foreground)" }} /> Ofertas</span><span className="b600">{brl(t.ofertas)}</span></div>
            <div className="kv-total"><span className="b600">Total Sistema</span><span className="b700" style={{ color: "var(--primary)", fontSize: 18 }}>{brl(t.total)}</span></div>
          </Card>

          {/* Bloco 2 — Contagem física */}
          <p className="eyebrow" style={{ marginTop: 16 }}>Valores Contados Fisicamente</p>
          <div className="stack-sm">
            <div className="field"><label>Total de Dízimos contados</label>
              <Input className="conf-num" value={diz} onChange={(e) => setDiz(e.target.value)} placeholder="R$ 0,00" inputMode="decimal" /></div>
            <div className="field"><label>Total de Ofertas contadas</label>
              <Input className="conf-num" value={ofe} onChange={(e) => setOfe(e.target.value)} placeholder="R$ 0,00" inputMode="decimal" /></div>
            <div className="field"><label>Total Geral contado</label>
              <Input className="conf-num" value={totalManual != null ? totalManual : String(totalC).replace(".", ",")}
                onChange={(e) => setTotalManual(e.target.value)} placeholder="R$ 0,00" inputMode="decimal" /></div>
          </div>

          {/* Bloco 3 — Comparação */}
          <p className="eyebrow" style={{ marginTop: 16 }}>Comparação</p>
          <Card>
            <div className="comp-head"><span></span><span>Sistema</span><span>Contado</span></div>
            <div className="comp-row"><span>Dízimos</span><span className="mono-meta">{brl(t.dizimos)}</span><span className="mono-meta">{brl(dizC)}</span></div>
            <div className="comp-row"><span>Ofertas</span><span className="mono-meta">{brl(t.ofertas)}</span><span className="mono-meta">{brl(ofeC)}</span></div>
            <div className="comp-row total"><span className="b600">Total</span><span className="b600 mono-meta">{brl(t.total)}</span><span className="b600 mono-meta">{brl(totalC)}</span></div>
            <div className="comp-row"><span className="b600" style={{ color: ok ? "var(--success)" : "var(--warning)" }}>Diferença</span><span></span><span className="b700 mono-meta" style={{ color: ok ? "var(--success)" : "var(--warning)" }}>{dif >= 0 ? "+" : ""}{brl(dif)}</span></div>
          </Card>

          {/* Status dinâmico */}
          <div className={"alert " + (ok ? "alert-ok" : "alert-warn")} style={{ marginTop: 12 }}>
            <Icon name={ok ? "check-circle-2" : "alert-circle"} size={20} style={{ color: ok ? "var(--success)" : "var(--warning)" }} />
            <div>
              <p className="b600" style={{ color: ok ? "var(--success)" : "var(--warning)", margin: 0 }}>{ok ? "Conferência OK" : "Divergência de " + brl(Math.abs(dif))}</p>
              <p className="metric-sub" style={{ margin: 0 }}>{ok ? "Os valores conferem perfeitamente." : "Os valores não conferem."}</p>
            </div>
          </div>

          {/* Bloco 4 — Responsáveis (§11.1: princípio dos 4 olhos) */}
          <p className="eyebrow" style={{ marginTop: 16 }}>Responsáveis pela Conferência</p>
          <p className="metric-sub" style={{ marginBottom: 10, fontSize: 12.5 }}>Duas pessoas devem estar presentes na contagem.</p>
          <div className="conf-responsavel-card">
            <div className="conf-resp-row">
              <div className="circ-ic sm" style={{ background: "color-mix(in oklch,var(--primary) 10%,transparent)" }}><Icon name="user" size={16} style={{ color: "var(--primary)" }} /></div>
              <div style={{ flex: 1 }}>
                <p className="eyebrow" style={{ margin: 0 }}>Tesoureiro (usuário logado)</p>
                <p className="b600" style={{ margin: "2px 0 0" }}>{USER.nome}</p>
              </div>
              <Icon name="lock" size={16} style={{ color: "var(--muted-foreground)" }} />
            </div>
          </div>
          <div className="field" style={{ marginTop: 12 }}>
            <label>Nome do Conferente *</label>
            <Input value={conferenteNome} error={touched && !!confErr}
              onChange={(e) => setConferenteNome(e.target.value)}
              placeholder="Nome de quem conferiu junto" />
            {touched && confErr && <p className="field-err">{confErr}</p>}
            <p className="metric-sub" style={{ fontSize: 12, marginTop: 4 }}>Obreiro, diácono ou 2º tesoureiro presente na contagem</p>
          </div>
          <div className="dizimista-row" style={{ marginTop: 10 }}>
            <div><p className="b600" style={{ margin: 0, fontSize: 14 }}>Conferente é usuário do sistema?</p><p className="metric-sub" style={{ margin: "2px 0 0", fontSize: 12 }}>Opcional</p></div>
            <button className={"toggle" + (conferenteIsUser ? " on" : "")} onClick={() => setConferenteIsUser(!conferenteIsUser)}><span className="toggle-thumb" /></button>
          </div>
          <div className="field" style={{ marginTop: 12 }}>
            <label>Outros participantes <span className="opt">(opcional)</span></label>
            <Input value={outrosParticipantes} onChange={(e) => setOutrosParticipantes(e.target.value)} placeholder="Ex: Pr. José, Diácono Paulo" />
          </div>

          {/* Bloco 5 — Observações */}
          <p className="eyebrow" style={{ marginTop: 16 }}>Observações (Opcional)</p>
          <textarea className="textarea" rows={2} value={obs} onChange={(e) => setObs(e.target.value)} placeholder="Ex: Alguns trocados separados para troco..."></textarea>

          {/* Aviso: bloqueia só o financeiro */}
          <div className="warn-lock">
            <Icon name="alert-circle" size={18} style={{ color: "var(--warning)" }} />
            <div>
              <span><b>Atenção:</b> ao confirmar, a <b>seção financeira</b> deste culto será bloqueada para edições.</span>
              <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--muted-foreground)" }}>Louvores, músicos e demais participantes continuam editáveis. Para reabrir o caixa, será necessário informar um motivo — a ação fica registrada no log de auditoria.</p>
            </div>
          </div>
        </div>
        <div className="sheet-actions">
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, background: ok ? "var(--success)" : "var(--warning)", color: "#fff", opacity: canSave ? 1 : .65 }}
            onClick={() => { if (!canSave) { setTouched(true); return; } onConfirm({ status: ok ? "CONFERIDO" : "DIVERGENTE", totalSistema: t.total, totalContado: totalC, diferenca: dif, tesoureiro: USER.nome, conferenteNome: conferenteNome.trim(), observacao: obs.trim() }); }}>
            {ok ? "Confirmar" : "Conferir Mesmo Assim"}
          </Button>
        </div>
      </div>
    </Sheet>
  );
}

// ------------------------------------------------ MODAL: REABERTURA ---------
function ReaberturaModal({ culto, onClose, onConfirm }) {
  const [motivo, setMotivo] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const conf = culto.conferencia;
  const invalid = touched && !motivo.trim();
  return (
    <Sheet variant="bottom" onClose={onClose}>
      <div className="sheet-bottom">
        <div className="sheet-grab" />
        <div className="reabrir-ic"><Icon name="lock-open" size={28} style={{ color: "var(--warning)" }} /></div>
        <h2 className="reabrir-title">Reabrir Culto Conferido</h2>
        <p className="reabrir-info">
          Este culto foi conferido em <b>{conf.data}</b>.<br />
          Total conferido: <b>{brl(conf.totalContado)}</b><br />
          Tesoureiro: <b>{conf.tesoureiro}</b>
        </p>
        <p className="reabrir-warn">Ao reabrir, a conferência será <b>REMOVIDA</b> e o caixa voltará a aceitar novos lançamentos. <b>Esta ação fica registrada no log de auditoria</b> com o motivo informado abaixo.</p>
        <p className="eyebrow" style={{ margin: "4px 0 6px" }}>Motivo (obrigatório para auditoria)</p>
        <textarea className={"textarea" + (invalid ? " textarea-err" : "")} rows={3} value={motivo}
          onChange={(e) => setMotivo(e.target.value)} placeholder="Descreva o motivo da reabertura..."></textarea>
        {invalid && <p className="field-err">Informe o motivo da reabertura</p>}
        <div className="row" style={{ gap: 8, marginTop: 16 }}>
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, background: "var(--destructive)", color: "#fff", opacity: motivo.trim() ? 1 : .5 }}
            onClick={() => { if (!motivo.trim()) { setTouched(true); return; } onConfirm(); }}>
            Confirmar Reabertura
          </Button>
        </div>
      </div>
    </Sheet>
  );
}

// ------------------------------------------------ MODAL: NOVO CULTO ---------
function NovoCultoModal({ onClose, onCreate }) {
  const [tema, setTema] = React.useState("");
  return (
    <Sheet variant="full" onClose={onClose}>
      <div className="sheet-screen">
        <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
          <button className="hdr-back" onClick={onClose}><Icon name="arrow-left" size={22} /></button>
          <h1 className="hdr-name" style={{ fontSize: 18 }}>Novo Culto</h1>
        </header>
        <div className="sheet-body">
          <div className="field"><label>Data e Hora *</label><Input type="text" defaultValue="07/06/2026 19:00" /></div>
          <div className="field" style={{ marginTop: 14 }}><label>Tema</label><Input value={tema} onChange={(e) => setTema(e.target.value)} placeholder="Ex: A Graça que Transforma" maxLength={200} /></div>
          <div className="field" style={{ marginTop: 14 }}><label>Palavra Inicial Por</label><Input placeholder="Ex: Pr. João Silva" maxLength={100} /></div>
          <div className="field" style={{ marginTop: 14 }}><label>Palavra Final Por</label><Input placeholder="Ex: Pr. Pedro Santos" maxLength={100} /></div>
          <div className="field" style={{ marginTop: 14 }}><label>Total de Pessoas</label><Input type="number" placeholder="0" /></div>
          <div className="field" style={{ marginTop: 14 }}><label>Descrição</label><textarea className="textarea" rows={3} placeholder="Detalhes do culto..." maxLength={500}></textarea></div>
          <div className="field" style={{ marginTop: 14 }}><label>Status *</label>
            <select className="inp select"><option>EM_ANDAMENTO</option><option>FINALIZADO</option></select></div>
        </div>
        <div className="sheet-actions">
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1 }} onClick={() => onCreate(tema || "Novo Culto")}>Salvar</Button>
        </div>
      </div>
    </Sheet>
  );
}

// ------------------------------------------------ SHEET: SESSÃO EXPIRADA ----
function SessaoExpiradaModal({ onLogin }) {
  return (
    <Sheet variant="bottom" onClose={() => {}}>
      <div className="sheet-bottom" style={{ textAlign: "center" }}>
        <div className="sheet-grab" />
        <div className="reabrir-ic" style={{ background: "color-mix(in oklch,var(--destructive) 10%,transparent)" }}><Icon name="log-out" size={26} style={{ color: "var(--destructive)" }} /></div>
        <h2 className="reabrir-title">Sessão expirada</h2>
        <p className="reabrir-info">Sua sessão expirou. Faça login novamente para continuar.</p>
        <Button className="full" style={{ marginTop: 8 }} onClick={onLogin}>Entrar novamente</Button>
      </div>
    </Sheet>
  );
}

Object.assign(window, { ConferenciaModal, ReaberturaModal, NovoCultoModal, SessaoExpiradaModal });
