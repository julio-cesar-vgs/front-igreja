/* global React, Icon, Button, Input, Sheet, STATUS_CULTO_OPTS */
// =============================================================================
// Igreja Ipiranga — Formulários de Culto (Novo / Editar) + sub-entidades
// Campos extraídos dos contratos v1.0 (PROTOTYPE_FIELD_CONTRACTS.md §5-10)
// =============================================================================

const HOJE = "01/06/2026";

// ---- Reutilizável: linha de erro de campo ----------------------------------
function FieldErr({ msg }) {
  return msg ? <p className="field-err">{msg}</p> : null;
}

// ---- validar data não-futura (simples) -------------------------------------
function isFuture(d) {
  if (!d) return false;
  const [day, mon, yr] = d.split("/");
  return new Date(yr, mon - 1, day) > new Date();
}

// ============================================================ CULTO FORM ===
function CultoFormModal({ culto, onClose, onSave }) {
  const editing = !!culto;
  const [form, setForm] = React.useState({
    dataHora: culto ? culto.dataHora : "07/06/2026 19:00",
    status: culto ? culto.status : "EM_ANDAMENTO",
    tema: culto ? culto.tema : "",
    palavraInicial: culto ? culto.palavraInicial : "",
    palavraFinal: culto ? culto.palavraFinal : "",
    totalPessoas: culto ? String(culto.pessoas) : "0",
    descricao: culto ? (culto.descricao || "") : "",
  });
  const [touched, setTouched] = React.useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const errs = {
    dataHora: !form.dataHora.trim() ? "A data e hora do culto são obrigatórias" : null,
    status: !form.status ? "O status do culto é obrigatório" : null,
    tema: form.tema.length > 200 ? "O tema deve ter no máximo 200 caracteres" : null,
    palavraInicial: form.palavraInicial.length > 100 ? "O nome deve ter no máximo 100 caracteres" : null,
    palavraFinal: form.palavraFinal.length > 100 ? "O nome deve ter no máximo 100 caracteres" : null,
    totalPessoas: parseInt(form.totalPessoas) < 0 ? "O total de pessoas deve ser zero ou positivo" : null,
    descricao: form.descricao.length > 500 ? "A descrição deve ter no máximo 500 caracteres" : null,
  };
  const valid = !Object.values(errs).some(Boolean);
  const e = (k) => touched ? errs[k] : null;

  const save = () => {
    if (!valid) { setTouched(true); return; }
    onSave({
      tema: form.tema || "Culto sem tema",
      dataHora: form.dataHora,
      data: form.dataHora.split(" ")[0],
      status: form.status,
      pessoas: parseInt(form.totalPessoas) || 0,
      palavraInicial: form.palavraInicial || "—",
      palavraFinal: form.palavraFinal || "—",
      descricao: form.descricao,
    });
  };

  return (
    <Sheet variant="full" onClose={onClose}>
      <div className="sheet-screen">
        <header className="hdr-primary flat row-l" style={{ gap: 12 }}>
          <button className="hdr-back" onClick={onClose}><Icon name="arrow-left" size={22} /></button>
          <div className="row-l" style={{ gap: 8 }}>
            <Icon name="church" size={20} style={{ color: "var(--primary-foreground)" }} />
            <h1 className="hdr-name" style={{ fontSize: 18 }}>{editing ? "Editar Culto" : "Novo Culto"}</h1>
          </div>
        </header>
        <div className="sheet-body">
          <div className="field">
            <label>Data e Hora *</label>
            <Input value={form.dataHora} error={!!e("dataHora")} onChange={set("dataHora")} placeholder="dd/MM/aaaa HH:mm" />
            <FieldErr msg={e("dataHora")} />
          </div>
          <div className="field mt12">
            <label>Status *</label>
            <select className="inp select" value={form.status} onChange={set("status")}>
              {STATUS_CULTO_OPTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            <FieldErr msg={e("status")} />
          </div>
          <div className="field mt12">
            <label>Tema <span className="opt">(máx. 200 chars)</span></label>
            <Input value={form.tema} error={!!e("tema")} onChange={set("tema")} placeholder="Ex: A Graça que Transforma" />
            <FieldErr msg={e("tema")} />
          </div>
          <div className="field mt12">
            <label>Palavra Inicial por <span className="opt">(máx. 100 chars)</span></label>
            <Input value={form.palavraInicial} error={!!e("palavraInicial")} onChange={set("palavraInicial")} placeholder="Ex: Pr. João Silva" />
            <FieldErr msg={e("palavraInicial")} />
          </div>
          <div className="field mt12">
            <label>Palavra Final por <span className="opt">(máx. 100 chars)</span></label>
            <Input value={form.palavraFinal} error={!!e("palavraFinal")} onChange={set("palavraFinal")} placeholder="Ex: Pr. Pedro Santos" />
            <FieldErr msg={e("palavraFinal")} />
          </div>
          <div className="field mt12">
            <label>Total de Pessoas</label>
            <Input type="number" value={form.totalPessoas} error={!!e("totalPessoas")} onChange={set("totalPessoas")} placeholder="0" min="0" />
            <FieldErr msg={e("totalPessoas")} />
          </div>
          <div className="field mt12">
            <label>Descrição / Observações <span className="opt">(máx. 500 chars)</span></label>
            <textarea className="textarea" rows={3} value={form.descricao} onChange={(ev) => setForm((f) => ({ ...f, descricao: ev.target.value }))} placeholder="Detalhes adicionais..."></textarea>
            <span className="char-count">{form.descricao.length}/500</span>
            <FieldErr msg={e("descricao")} />
          </div>
          {editing && (
            <div className="audit-note mt12">
              <Icon name="info" size={16} style={{ color: "var(--primary)" }} />
              <span>Controle de versão (<code>version</code>) é enviado automaticamente para evitar conflitos de edição simultânea.</span>
            </div>
          )}
        </div>
        <div className="sheet-actions">
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, opacity: valid || !touched ? 1 : .6 }} onClick={save}>
            {editing ? "Salvar Alterações" : "Criar Culto"}
          </Button>
        </div>
      </div>
    </Sheet>
  );
}

// ============================================= CONFIRMAR EXCLUIR (genérico)
function ConfirmarExcluirModal({ titulo, descricao, label = "Excluir", onClose, onConfirm }) {
  return (
    <Sheet variant="bottom" onClose={onClose}>
      <div className="sheet-bottom">
        <div className="sheet-grab" />
        <div className="reabrir-ic" style={{ background: "color-mix(in oklch,var(--destructive) 10%,transparent)" }}>
          <Icon name="trash-2" size={26} style={{ color: "var(--destructive)" }} />
        </div>
        <h2 className="reabrir-title">{titulo}</h2>
        <p className="reabrir-info">{descricao}</p>
        <div className="row" style={{ gap: 8, marginTop: 16 }}>
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1, background: "var(--destructive)", color: "#fff" }} onClick={onConfirm}>{label}</Button>
        </div>
      </div>
    </Sheet>
  );
}

// ============================================ SUB-ENTIDADE MINI-MODAIS =====
// Reutilizável genérico
function SubEntityModal({ titulo, icon, fields, locked, onClose, onSave }) {
  const [vals, setVals] = React.useState(() => Object.fromEntries(fields.map((f) => [f.key, f.default || ""])));
  const [touched, setTouched] = React.useState(false);
  const set = (k) => (e) => setVals((v) => ({ ...v, [k]: e.target.value }));

  const validate = (f) => {
    const v = vals[f.key];
    if (f.required && !v.trim()) return f.errRequired || "Campo obrigatório";
    if (f.min && v.trim().length > 0 && v.trim().length < f.min) return `Mínimo ${f.min} caracteres`;
    if (f.max && v.length > f.max) return `Máximo ${f.max} caracteres`;
    if (f.pattern && v && !f.pattern.test(v)) return f.errPattern || "Formato inválido";
    return null;
  };
  const errs = Object.fromEntries(fields.map((f) => [f.key, validate(f)]));
  const valid = !Object.values(errs).some(Boolean);

  const save = () => {
    if (!valid) { setTouched(true); return; }
    onSave(vals);
  };

  if (locked) return (
    <Sheet variant="bottom" onClose={onClose}>
      <div className="sheet-bottom" style={{ textAlign: "center" }}>
        <div className="sheet-grab" />
        <div className="reabrir-ic"><Icon name="lock" size={26} style={{ color: "var(--warning)" }} /></div>
        <h2 className="reabrir-title">Culto Conferido</h2>
        <p className="reabrir-info">Este culto já foi conferido. Alterações bloqueadas.</p>
        <Button className="full" variant="outline" onClick={onClose}>Fechar</Button>
      </div>
    </Sheet>
  );

  return (
    <Sheet variant="bottom" onClose={onClose}>
      <div className="sheet-bottom">
        <div className="sheet-grab" />
        <div className="row-l" style={{ gap: 10, marginBottom: 18 }}>
          <Icon name={icon} size={22} style={{ color: "var(--primary)" }} />
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{titulo}</h2>
        </div>
        <div className="stack-sm">
          {fields.map((f) => (
            <div className="field" key={f.key}>
              <label>{f.label}{f.required ? " *" : " "}{f.max ? <span className="opt">(máx. {f.max})</span> : null}</label>
              <Input value={vals[f.key]} error={touched && !!errs[f.key]} onChange={set(f.key)} placeholder={f.placeholder || ""} />
              {touched && errs[f.key] && <p className="field-err">{errs[f.key]}</p>}
            </div>
          ))}
        </div>
        <div className="row" style={{ gap: 8, marginTop: 18 }}>
          <Button variant="outline" style={{ flex: 1 }} onClick={onClose}>Cancelar</Button>
          <Button style={{ flex: 1 }} onClick={save}>Salvar</Button>
        </div>
      </div>
    </Sheet>
  );
}

// Wrappers com campos por sub-entidade (§6-10 dos contratos)
const SUBMODALS = {
  louvor: (p) => <SubEntityModal titulo="Adicionar Louvor" icon="music" locked={p.locked} onClose={p.onClose} onSave={p.onSave}
    fields={[
      { key: "pessoaNome", label: "Nome da pessoa", required: true, min: 2, max: 100, errRequired: "O nome da pessoa é obrigatório", placeholder: "Ex: Ana Costa" },
      { key: "hinoOpcional", label: "Hino / Música", required: false, max: 150, placeholder: "Ex: Grande é o Senhor" },
    ]} />,
  musico: (p) => <SubEntityModal titulo="Adicionar Músico" icon="mic-2" locked={p.locked} onClose={p.onClose} onSave={p.onSave}
    fields={[{ key: "nome", label: "Nome do músico", required: true, min: 2, max: 100, errRequired: "O nome do músico é obrigatório", placeholder: "Ex: Carlos Teclado" }]} />,
  cooperador: (p) => <SubEntityModal titulo="Adicionar Cooperador" icon="user-check" locked={p.locked} onClose={p.onClose} onSave={p.onSave}
    fields={[
      { key: "nome", label: "Nome do cooperador", required: true, min: 2, max: 100, errRequired: "O nome do cooperador é obrigatório", placeholder: "Ex: Marcos Silva" },
      { key: "cargo", label: "Cargo / Função", required: false, max: 50, placeholder: "Ex: Portaria" },
    ]} />,
  presbitero: (p) => <SubEntityModal titulo="Adicionar Presbítero" icon="user-check" locked={p.locked} onClose={p.onClose} onSave={p.onSave}
    fields={[{ key: "nome", label: "Nome do presbítero", required: true, min: 2, max: 100, errRequired: "O nome do presbítero é obrigatório", placeholder: "Ex: Pr. José Alves" }]} />,
  visitante: (p) => <SubEntityModal titulo="Registrar Visitante" icon="users" locked={p.locked} onClose={p.onClose} onSave={p.onSave}
    fields={[
      { key: "nome", label: "Nome do visitante", required: true, min: 2, max: 100, errRequired: "O nome do visitante é obrigatório", placeholder: "Ex: Fernando Souza" },
      { key: "telefone", label: "Telefone", required: false, max: 20, pattern: /^[\d\s()+\-]*$/, errPattern: "Telefone inválido", placeholder: "Ex: (11) 98765-4321" },
    ]} />,
};

function SubEntityModalWrapper({ type, locked, onClose, onSave }) {
  const C = SUBMODALS[type];
  return C ? C({ locked, onClose, onSave }) : null;
}

Object.assign(window, { CultoFormModal, ConfirmarExcluirModal, SubEntityModalWrapper });
