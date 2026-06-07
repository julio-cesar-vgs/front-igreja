/* global React, Icon, Button, Input, Sheet, STATUS_MEMBRO_OPTS */
// =============================================================================
// Igreja Ipiranga — Formulários de Membro (Novo / Editar / Status / Excluir)
// Campos extraídos dos contratos v1.0 (§13)
// =============================================================================

// ---- toggle switch --------------------------------------------------------
function Toggle({ value, onChange }) {
  return (
    <button className={"toggle" + (value ? " on" : "")} onClick={() => onChange(!value)} type="button">
      <span className="toggle-thumb" />
    </button>
  );
}

// ============================================================ MEMBRO FORM ==
function MembroFormModal({ membro, onClose, onSave }) {
  const editing = !!membro;
  const [form, setForm] = React.useState({
    nome: membro?.nome || "",
    status: membro?.status || "ATIVO",
    email: membro?.email || "",
    telefone: membro?.tel || "",
    cpf: membro?.cpf || "",
    dataNascimento: membro?.nascimento || "",
    dataMembresia: membro?.membresia || "",
    endereco: membro?.endereco || "",
    dizimista: membro?.dizimista || false,
    observacoes: membro?.obs || "",
  });
  const [touched, setTouched] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validateCPF(v) {
    if (!v) return null;
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) ? null : "CPF com formato inválido";
  }
  function validateTel(v) {
    if (!v) return null;
    return /^[\d\s()+\-]*$/.test(v) ? null : "Telefone com formato inválido";
  }
  function validateEmail(v) {
    if (!v) return null;
    return /\S+@\S+\.\S+/.test(v) ? null : "E-mail inválido";
  }

  const errs = {
    nome: !form.nome.trim() ? "O nome é obrigatório" : form.nome.trim().length < 2 ? "O nome deve ter entre 2 e 150 caracteres" : form.nome.length > 150 ? "O nome deve ter entre 2 e 150 caracteres" : null,
    status: !form.status ? "O status é obrigatório" : null,
    email: validateEmail(form.email),
    telefone: validateTel(form.telefone),
    cpf: validateCPF(form.cpf),
    dataNascimento: isFuturePT(form.dataNascimento) ? "A data de nascimento deve ser no passado" : null,
    dataMembresia: isFuturePT(form.dataMembresia) ? "A data de membresia não pode ser futura" : null,
    endereco: form.endereco.length > 255 ? "Máximo 255 caracteres" : null,
    observacoes: form.observacoes.length > 500 ? "A observação deve ter no máximo 500 caracteres" : null,
  };
  const valid = !Object.values(errs).some(Boolean);
  const e = (k) => touched ? errs[k] : null;

  const save = () => {
    if (!valid) { setTouched(true); return; }
    onSave({
      id: membro?.id || Date.now(),
      nome: form.nome.trim(),
      status: form.status,
      email: form.email.trim(),
      tel: form.telefone.trim(),
      cpf: form.cpf.trim(),
      nascimento: form.dataNascimento,
      membresia: form.dataMembresia,
      endereco: form.endereco.trim(),
      dizimista: form.dizimista,
      obs: form.observacoes.trim(),
      dizimosAno: membro?.dizimosAno || 0,
      totalDizimos: membro?.totalDizimos || "R$ 0,00",
    });
  };

  return (
    <Sheet variant="full" onClose={onClose}>
      <div className="sheet-screen">
        <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
          <button className="hdr-back" onClick={onClose}><Icon name="arrow-left" size={22} /></button>
          <div className="row-l" style={{ gap: 8 }}>
            <Icon name="users" size={20} style={{ color: "var(--primary-foreground)" }} />
            <h1 className="hdr-name" style={{ fontSize: 18 }}>{editing ? "Editar Membro" : "Novo Membro"}</h1>
          </div>
        </header>
        <div className="sheet-body">
          <p className="eyebrow">Dados Pessoais</p>
          <div className="field mt6">
            <label>Nome completo *</label>
            <Input value={form.nome} error={!!e("nome")} onChange={set("nome")} placeholder="Ex: João Silva Santos" />
            {e("nome") && <p className="field-err">{e("nome")}</p>}
          </div>
          <div className="grid-2 mt12">
            <div className="field">
              <label>Status *</label>
              <select className="inp select" value={form.status} onChange={set("status")}>
                {STATUS_MEMBRO_OPTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              {e("status") && <p className="field-err">{e("status")}</p>}
            </div>
            <div className="field">
              <label>CPF <span className="opt">000.000.000-00</span></label>
              <Input value={form.cpf} error={!!e("cpf")} onChange={set("cpf")} placeholder="000.000.000-00" />
              {e("cpf") && <p className="field-err">{e("cpf")}</p>}
            </div>
          </div>
          <div className="grid-2 mt12">
            <div className="field">
              <label>Data de Nascimento</label>
              <Input value={form.dataNascimento} error={!!e("dataNascimento")} onChange={set("dataNascimento")} placeholder="dd/MM/aaaa" />
              {e("dataNascimento") && <p className="field-err">{e("dataNascimento")}</p>}
            </div>
            <div className="field">
              <label>Membro desde</label>
              <Input value={form.dataMembresia} error={!!e("dataMembresia")} onChange={set("dataMembresia")} placeholder="dd/MM/aaaa" />
              {e("dataMembresia") && <p className="field-err">{e("dataMembresia")}</p>}
            </div>
          </div>

          <p className="eyebrow mt18">Contato</p>
          <div className="field mt6">
            <label>E-mail</label>
            <Input value={form.email} error={!!e("email")} onChange={set("email")} placeholder="email@exemplo.com" autoComplete="email" />
            {e("email") && <p className="field-err">{e("email")}</p>}
          </div>
          <div className="field mt12">
            <label>Telefone <span className="opt">máx. 20 chars</span></label>
            <Input value={form.telefone} error={!!e("telefone")} onChange={set("telefone")} placeholder="(11) 98765-4321" />
            {e("telefone") && <p className="field-err">{e("telefone")}</p>}
          </div>
          <div className="field mt12">
            <label>Endereço <span className="opt">máx. 255 chars</span></label>
            <Input value={form.endereco} error={!!e("endereco")} onChange={set("endereco")} placeholder="Rua, número, bairro — São Paulo, SP" />
            {e("endereco") && <p className="field-err">{e("endereco")}</p>}
          </div>

          <p className="eyebrow mt18">Financeiro</p>
          <div className="dizimista-row">
            <div>
              <p className="b600" style={{ margin: 0 }}>É dizimista?</p>
              <p className="metric-sub" style={{ margin: "2px 0 0" }}>Altera o marcador na lista de membros</p>
            </div>
            <Toggle value={form.dizimista} onChange={(v) => setForm((f) => ({ ...f, dizimista: v }))} />
          </div>

          <p className="eyebrow mt18">Observações</p>
          <div className="field mt6">
            <textarea className="textarea" rows={3} value={form.observacoes}
              onChange={(ev) => setForm((f) => ({ ...f, observacoes: ev.target.value }))}
              placeholder="Informações adicionais sobre o membro..."></textarea>
            <span className="char-count">{form.observacoes.length}/500</span>
            {e("observacoes") && <p className="field-err">{e("observacoes")}</p>}
          </div>
        </div>
        <div className="sheet-actions">
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, opacity: valid || !touched ? 1 : .6 }} onClick={save}>
            {editing ? "Salvar Alterações" : "Cadastrar Membro"}
          </Button>
        </div>
      </div>
    </Sheet>
  );
}

// ============================================ ALTERAR STATUS DO MEMBRO =====
function AlterarStatusModal({ membro, onClose, onSave }) {
  const [status, setStatus] = React.useState(membro.status);
  const STATUS_COLOR = { ATIVO: "var(--success)", INATIVO: "var(--muted-foreground)", TRANSFERIDO: "var(--primary)", FALECIDO: "var(--destructive)", CONGREGADO: "var(--accent-foreground)" };
  return (
    <Sheet variant="bottom" onClose={onClose}>
      <div className="sheet-bottom">
        <div className="sheet-grab" />
        <div className="row-l" style={{ gap: 10, marginBottom: 16 }}>
          <Icon name="user-check" size={22} style={{ color: "var(--primary)" }} />
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Alterar Status</h2>
        </div>
        <p className="metric-sub" style={{ marginBottom: 14 }}>{membro.nome}</p>
        <div className="stack-sm">
          {STATUS_MEMBRO_OPTS.map((opt) => (
            <button key={opt.value} className={"status-opt" + (status === opt.value ? " on" : "")}
              onClick={() => setStatus(opt.value)}>
              <span className="status-dot" style={{ background: STATUS_COLOR[opt.value] || "var(--muted-foreground)" }} />
              <span>{opt.label}</span>
              {status === opt.value && <Icon name="check" size={18} style={{ color: "var(--primary)", marginLeft: "auto" }} />}
            </button>
          ))}
        </div>
        <div className="row" style={{ gap: 8, marginTop: 18 }}>
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1 }} onClick={() => onSave(status)}>Confirmar</Button>
        </div>
      </div>
    </Sheet>
  );
}

function isFuturePT(d) {
  if (!d || !d.includes("/")) return false;
  const parts = d.split("/");
  if (parts.length !== 3) return false;
  return new Date(parts[2], parts[1] - 1, parts[0]) > new Date();
}

Object.assign(window, { MembroFormModal, AlterarStatusModal });
