/* global React, Icon, Input, Button, Sheet, MEMBROS, FORMAS, TIPOS_OFERTA, USER */
// =============================================================================
// Igreja Ipiranga — Modais de registro (entrada): Dízimo & Oferta
// Inclui busca de membro (cadastrado ou não) + trilha de auditoria
// (tesoureiro que registra + conferente: obreiro ou 2º tesoureiro).
// =============================================================================

function formaLabel(f) {
  return ({ DINHEIRO: "Dinheiro", PIX: "PIX", CARTAO_DEBITO: "Cartão Débito", CARTAO_CREDITO: "Cartão Crédito", TRANSFERENCIA: "Transferência", CHEQUE: "Cheque", DEPOSITO: "Depósito" })[f] || f;
}
function tipoLabel(t) {
  return ({ REGULAR: "Regular", MISSOES: "Missões", CONSTRUCAO: "Construção", ACAO_SOCIAL: "Ação Social", ESPECIAL: "Especial", GRATIDAO: "Gratidão", DEPARTAMENTO: "Departamento", OUTRO: "Outro" })[t] || t;
}
const HOJE = "01/06/2026";

// ---- Combobox: buscar membro OU registrar nome avulso --------------------
function MemberCombobox({ value, isMember, onPick, placeholder }) {
  const [q, setQ] = React.useState(value || "");
  const [open, setOpen] = React.useState(false);
  const results = MEMBROS.filter((m) => m.nome.toLowerCase().includes(q.toLowerCase()));
  const exact = MEMBROS.some((m) => m.nome.trim().toLowerCase() === q.trim().toLowerCase());
  return (
    <div className="combo">
      <div className="field-icon-l">
        <Icon name="search" size={20} />
        <Input value={q} placeholder={placeholder || "Buscar membro ou digitar nome..."}
          onChange={(e) => { setQ(e.target.value); setOpen(true); onPick(e.target.value, false); }}
          onFocus={() => setOpen(true)} />
      </div>
      {open && (q.trim() || results.length > 0) && (
        <div className="combo-list">
          {results.map((m) => (
            <button key={m.id} className="combo-opt" onClick={() => { setQ(m.nome); onPick(m.nome, true); setOpen(false); }}>
              <span className="avatar sm">{m.nome.charAt(0)}</span>
              <span className="combo-name">{m.nome}</span>
              <span className="badge badge-success">Membro</span>
            </button>
          ))}
          {q.trim() && !exact && (
            <button className="combo-opt" onClick={() => { onPick(q.trim(), false); setOpen(false); }}>
              <span className="circ-ic sm" style={{ background: "var(--secondary)" }}><Icon name="user-plus" size={16} /></span>
              <span className="combo-name">Usar “{q.trim()}”</span>
              <span className="badge badge-muted">Não cadastrado</span>
            </button>
          )}
        </div>
      )}
      {value && !open && (
        <div className="combo-selected">
          <Icon name={isMember ? "user-check" : "user"} size={14} style={{ color: isMember ? "var(--success)" : "var(--muted-foreground)" }} />
          {isMember ? "Membro cadastrado" : "Pessoa não cadastrada"}
        </div>
      )}
    </div>
  );
}

// ---- Bloco de auditoria reutilizável -------------------------------------
function AuditoriaBlock({ tesoureiro, setTesoureiro, conferente, setConferente, errTes, errConf }) {
  return (
    <>
      <p className="eyebrow" style={{ marginTop: 18 }}>Responsáveis (auditoria)</p>
      <div className="field" style={{ marginTop: 6 }}>
        <label>Tesoureiro que registra *</label>
        <Input value={tesoureiro} error={errTes} placeholder="Ex: Maria Silva" onChange={(e) => setTesoureiro(e.target.value)} />
        {errTes && <p className="field-err">Informe quem está registrando</p>}
      </div>
      <div className="field" style={{ marginTop: 12 }}>
        <label>Conferente — obreiro ou 2º tesoureiro *</label>
        <Input value={conferente} error={errConf} placeholder="Ex: João Costa" onChange={(e) => setConferente(e.target.value)} />
        {errConf && <p className="field-err">Informe o conferente</p>}
      </div>
      <div className="audit-note">
        <Icon name="shield-check" size={16} style={{ color: "var(--primary)" }} />
        <span>Ambos os nomes ficam guardados na auditoria deste lançamento.</span>
      </div>
    </>
  );
}

// ---- MODAL: Registrar Dízimo (também usado para Editar) -------------------
function RegistrarDizimoModal({ item, onClose, onSave }) {
  const editing = !!item;
  const [nome, setNome] = React.useState(item?.membro || "");
  const [isMember, setIsMember] = React.useState(item ? item.membroCadastrado !== false : false);
  const [valor, setValor] = React.useState(item ? String(item.valor).replace(".", ",") : "");
  const [forma, setForma] = React.useState(item?.forma || "DINHEIRO");
  const [obs, setObs] = React.useState(item?.obs || "");
  const [tesoureiro, setTesoureiro] = React.useState(item?.tesoureiro || USER.nome);
  const [conferente, setConferente] = React.useState(item?.conferente || "");
  const [t, setT] = React.useState(false);
  const num = parseFloat(String(valor).replace(/\./g, "").replace(",", ".")) || 0;
  const errs = { nome: !nome.trim(), valor: num <= 0, tes: !tesoureiro.trim(), conf: !conferente.trim() };
  const valid = !errs.nome && !errs.valor && !errs.tes && !errs.conf;

  const save = () => {
    if (!valid) { setT(true); return; }
    onSave({ membro: nome.trim(), membroCadastrado: isMember, valor: num, forma, data: HOJE, obs: obs.trim(), tesoureiro: tesoureiro.trim(), conferente: conferente.trim() });
  };

  return (
    <Sheet variant="full" onClose={onClose}>
      <div className="sheet-screen">
        <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
          <button className="hdr-back" onClick={onClose}><Icon name="arrow-left" size={22} /></button>
          <div className="row-l" style={{ gap: 8 }}>
            <Icon name="dollar-sign" size={20} style={{ color: "var(--primary-foreground)" }} />
            <h1 className="hdr-name" style={{ fontSize: 18 }}>{editing ? "Editar Dízimo" : "Registrar Dízimo"}</h1>
          </div>
        </header>
        <div className="sheet-body">
          <p className="eyebrow">Dizimista</p>
          <div className="field" style={{ marginTop: 6 }}>
            <label>Membro ou pessoa</label>
            <MemberCombobox value={nome} isMember={isMember} onPick={(n, m) => { setNome(n); setIsMember(m); }} />
            {t && errs.nome && <p className="field-err">Selecione um membro ou digite um nome</p>}
          </div>

          <p className="eyebrow" style={{ marginTop: 18 }}>Lançamento</p>
          <div className="field" style={{ marginTop: 6 }}>
            <label>Valor *</label>
            <Input className="conf-num" value={valor} inputMode="decimal" placeholder="R$ 0,00" onChange={(e) => setValor(e.target.value)} />
            {t && errs.valor && <p className="field-err">Informe um valor válido</p>}
          </div>
          <div className="grid-2" style={{ marginTop: 12 }}>
            <div className="field"><label>Data *</label><Input value={HOJE} readOnly /></div>
            <div className="field"><label>Forma de Pagamento</label>
              <select className="inp select" value={forma} onChange={(e) => setForma(e.target.value)}>
                {FORMAS.map((f) => <option key={f} value={f}>{formaLabel(f)}</option>)}
              </select>
            </div>
          </div>
          <div className="field" style={{ marginTop: 12 }}><label>Observação</label>
            <textarea className="textarea" rows={2} value={obs} placeholder="Opcional..." onChange={(e) => setObs(e.target.value)}></textarea>
          </div>

          <AuditoriaBlock tesoureiro={tesoureiro} setTesoureiro={setTesoureiro} conferente={conferente} setConferente={setConferente}
            errTes={t && errs.tes} errConf={t && errs.conf} />
        </div>
        <div className="sheet-actions">
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, opacity: valid ? 1 : .6 }} onClick={save}>{editing ? "Salvar Alterações" : "Salvar Dízimo"}</Button>
        </div>
      </div>
    </Sheet>
  );
}

// ---- MODAL: Registrar Oferta (também usado para Editar) ------------------
function RegistrarOfertaModal({ item, onClose, onSave }) {
  const editing = !!item;
  const [tipo, setTipo] = React.useState(item?.tipo ? item.tipo.toUpperCase().replace(/ /g, "_") : "REGULAR");
  const [valor, setValor] = React.useState(item ? String(item.valor).replace(".", ",") : "");
  const [forma, setForma] = React.useState(item?.forma || "DINHEIRO");
  const [ofertante, setOfertante] = React.useState(item?.ofertante || "");
  const [isMember, setIsMember] = React.useState(item?.ofertanteCadastrado || false);
  const [obs, setObs] = React.useState(item?.obs || "");
  const [tesoureiro, setTesoureiro] = React.useState(item?.tesoureiro || USER.nome);
  const [conferente, setConferente] = React.useState(item?.conferente || "");
  const [t, setT] = React.useState(false);
  const num = parseFloat(String(valor).replace(/\./g, "").replace(",", ".")) || 0;
  const errs = { valor: num <= 0, tes: !tesoureiro.trim(), conf: !conferente.trim() };
  const valid = !errs.valor && !errs.tes && !errs.conf;

  const save = () => {
    if (!valid) { setT(true); return; }
    onSave({ tipo: tipoLabel(tipo), valor: num, forma, data: HOJE, ofertante: ofertante.trim(), ofertanteCadastrado: isMember, obs: obs.trim(), tesoureiro: tesoureiro.trim(), conferente: conferente.trim() });
  };

  return (
    <Sheet variant="full" onClose={onClose}>
      <div className="sheet-screen">
        <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
          <button className="hdr-back" onClick={onClose}><Icon name="arrow-left" size={22} /></button>
          <div className="row-l" style={{ gap: 8 }}>
            <Icon name="gift" size={20} style={{ color: "var(--primary-foreground)" }} />
            <h1 className="hdr-name" style={{ fontSize: 18 }}>{editing ? "Editar Oferta" : "Registrar Oferta"}</h1>
          </div>
        </header>
        <div className="sheet-body">
          <p className="eyebrow">Lançamento</p>
          <div className="grid-2" style={{ marginTop: 6 }}>
            <div className="field"><label>Tipo de Oferta *</label>
              <select className="inp select" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                {TIPOS_OFERTA.map((x) => <option key={x} value={x}>{tipoLabel(x)}</option>)}
              </select>
            </div>
            <div className="field"><label>Forma de Pagamento</label>
              <select className="inp select" value={forma} onChange={(e) => setForma(e.target.value)}>
                {FORMAS.map((f) => <option key={f} value={f}>{formaLabel(f)}</option>)}
              </select>
            </div>
          </div>
          <div className="field" style={{ marginTop: 12 }}>
            <label>Valor *</label>
            <Input className="conf-num" value={valor} inputMode="decimal" placeholder="R$ 0,00" onChange={(e) => setValor(e.target.value)} />
            {t && errs.valor && <p className="field-err">Informe um valor válido</p>}
          </div>
          <div className="field" style={{ marginTop: 12 }}><label>Data *</label><Input value={HOJE} readOnly /></div>

          <p className="eyebrow" style={{ marginTop: 18 }}>Ofertante (opcional — oferta identificada)</p>
          <div className="field" style={{ marginTop: 6 }}>
            <label>Nome do ofertante</label>
            <MemberCombobox value={ofertante} isMember={isMember} placeholder="Deixe em branco p/ oferta anônima"
              onPick={(n, m) => { setOfertante(n); setIsMember(m); }} />
          </div>
          <div className="field" style={{ marginTop: 12 }}><label>Observação</label>
            <textarea className="textarea" rows={2} value={obs} placeholder="Opcional..." onChange={(e) => setObs(e.target.value)}></textarea>
          </div>

          <AuditoriaBlock tesoureiro={tesoureiro} setTesoureiro={setTesoureiro} conferente={conferente} setConferente={setConferente}
            errTes={t && errs.tes} errConf={t && errs.conf} />
        </div>
        <div className="sheet-actions">
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, opacity: valid ? 1 : .6 }} onClick={save}>{editing ? "Salvar Alterações" : "Salvar Oferta"}</Button>
        </div>
      </div>
    </Sheet>
  );
}

Object.assign(window, { RegistrarDizimoModal, RegistrarOfertaModal, formaLabel, tipoLabel });
