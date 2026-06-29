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
      <div className="sheet-bottom" style={{ textAlign: "center" }}>
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

// Dados mock para protótipo (simula GET /api/v1/membros/busca?nome=)
const MEMBROS_MOCK = [
  { id: "m-001", nome: "Ana Costa" },
  { id: "m-002", nome: "Carlos Teclado" },
  { id: "m-003", nome: "Marcos Silva" },
  { id: "m-004", nome: "Pr. José Alves" },
  { id: "m-005", nome: "Pedro Santos" },
  { id: "m-006", nome: "Maria Oliveira" },
  { id: "m-007", nome: "João Ferreira" },
  { id: "m-008", nome: "Lúcia Pereira" },
  { id: "m-009", nome: "Roberto Lima" },
  { id: "m-010", nome: "Fernanda Souza" },
];

// Simula busca por nome (em produção: GET /api/v1/membros/busca?nome=termo)
function buscarMembros(termo) {
  if (!termo || termo.trim().length < 2) return [];
  const q = termo.toLowerCase();
  return MEMBROS_MOCK.filter((m) => m.nome.toLowerCase().includes(q));
}

// ---- Toggle "É membro?" ---------------------------------------------------
function MembroToggle({ ehMembro, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 14px",
        background: "var(--muted)",
        borderRadius: 10,
        marginBottom: 14,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => onChange(!ehMembro)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Icon
          name={ehMembro ? "user-check" : "user-x"}
          size={18}
          style={{ color: ehMembro ? "var(--primary)" : "var(--muted-foreground)" }}
        />
        <span style={{ fontSize: 14, fontWeight: 600, color: ehMembro ? "var(--primary)" : "var(--muted-foreground)" }}>
          {ehMembro ? "É membro cadastrado" : "Não é membro"}
        </span>
      </div>
      {/* Switch visual */}
      <div style={{
        width: 44, height: 24, borderRadius: 12,
        background: ehMembro ? "var(--primary)" : "var(--border)",
        position: "relative", transition: "background .2s",
      }}>
        <div style={{
          position: "absolute",
          top: 3, left: ehMembro ? 22 : 3,
          width: 18, height: 18, borderRadius: "50%",
          background: "#fff",
          transition: "left .2s",
          boxShadow: "0 1px 4px rgba(0,0,0,.2)",
        }} />
      </div>
    </div>
  );
}

// ---- Autocomplete de membro ------------------------------------------------
function MembroBusca({ onSelect }) {
  const [termo, setTermo] = React.useState("");
  const [resultados, setResultados] = React.useState([]);
  const [selecionado, setSelecionado] = React.useState(null);

  const handleChange = (e) => {
    const v = e.target.value;
    setTermo(v);
    setSelecionado(null);
    setResultados(buscarMembros(v));
  };

  const selecionar = (m) => {
    setSelecionado(m);
    setTermo(m.nome);
    setResultados([]);
    onSelect(m);
  };

  return (
    <div>
      <label style={{ display: "block", marginBottom: 4, fontSize: 13, fontWeight: 600 }}>
        Buscar membro *
      </label>
      <div style={{ position: "relative" }}>
        <Input
          value={termo}
          onChange={handleChange}
          placeholder="Digite o nome (mín. 2 letras)…"
          style={{ paddingRight: 36 }}
        />
        <Icon name="search" size={16} style={{
          position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
          color: "var(--muted-foreground)", pointerEvents: "none",
        }} />
      </div>

      {/* Lista de resultados */}
      {resultados.length > 0 && (
        <div style={{
          border: "1px solid var(--border)", borderRadius: 8, marginTop: 4,
          maxHeight: 180, overflowY: "auto",
          background: "var(--card)", boxShadow: "0 4px 12px rgba(0,0,0,.1)",
        }}>
          {resultados.map((m) => (
            <button
              key={m.id}
              onClick={() => selecionar(m)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                width: "100%", padding: "10px 14px",
                background: "none", border: "none", cursor: "pointer",
                textAlign: "left", fontSize: 14,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "color-mix(in oklch,var(--primary) 12%,transparent)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon name="user" size={16} style={{ color: "var(--primary)" }} />
              </div>
              <span style={{ fontWeight: 500 }}>{m.nome}</span>
            </button>
          ))}
        </div>
      )}

      {/* Nenhum resultado */}
      {termo.trim().length >= 2 && resultados.length === 0 && !selecionado && (
        <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 6 }}>
          Nenhum membro encontrado para "{termo}".
        </p>
      )}

      {/* Confirmação de seleção */}
      {selecionado && (
        <div style={{
          display: "flex", alignItems: "center", gap: 8, marginTop: 8,
          padding: "8px 12px",
          background: "color-mix(in oklch,var(--primary) 10%,transparent)", borderRadius: 8,
        }}>
          <Icon name="check-circle-2" size={16} style={{ color: "var(--primary)" }} />
          <span style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600 }}>
            {selecionado.nome} selecionado
          </span>
        </div>
      )}
    </div>
  );
}

// ---- Modal com toggle membro/não-membro + campos extras --------------------
// Usado por: louvor, músico, cooperador, presbítero
function MemberPickerModal({ titulo, icon, extraFields, locked, onClose, onSave }) {
  const [ehMembro, setEhMembro] = React.useState(true);
  const [membroSelecionado, setMembroSelecionado] = React.useState(null);
  const [nomeManual, setNomeManual] = React.useState("");
  const [extras, setExtras] = React.useState(() =>
    Object.fromEntries((extraFields || []).map((f) => [f.key, f.default || ""]))
  );
  const [touched, setTouched] = React.useState(false);

  const setExtra = (k) => (e) => setExtras((v) => ({ ...v, [k]: e.target.value }));

  // Validação do campo de nome
  const erroNome = touched
    ? ehMembro
      ? !membroSelecionado ? "Selecione um membro da lista" : null
      : !nomeManual.trim() ? "O nome é obrigatório"
        : nomeManual.trim().length < 2 ? "Mínimo 2 caracteres"
          : nomeManual.length > 100 ? "Máximo 100 caracteres"
            : null
    : null;

  // Validação dos campos extras
  const errosExtras = Object.fromEntries(
    (extraFields || []).map((f) => {
      const v = extras[f.key];
      if (f.required && !v.trim()) return [f.key, f.errRequired || "Campo obrigatório"];
      if (f.max && v.length > f.max) return [f.key, `Máximo ${f.max} caracteres`];
      if (f.pattern && v && !f.pattern.test(v)) return [f.key, f.errPattern || "Formato inválido"];
      return [f.key, null];
    })
  );

  const valid = !erroNome && !Object.values(errosExtras).some(Boolean);

  const save = () => {
    setTouched(true);
    if (ehMembro && !membroSelecionado) return;
    if (!valid) return;
    onSave({
      ehMembro,
      membroId: ehMembro ? membroSelecionado.id : null,
      nomeManual: ehMembro ? null : nomeManual.trim(),
      ...extras,
    });
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

        {/* Toggle membro / não-membro */}
        <MembroToggle ehMembro={ehMembro} onChange={(v) => {
          setEhMembro(v);
          setMembroSelecionado(null);
          setNomeManual("");
          setTouched(false);
        }} />

        <div className="stack-sm">
          {ehMembro ? (
            /* Busca por membro cadastrado */
            <div>
              <MembroBusca onSelect={setMembroSelecionado} />
              {touched && erroNome && <p className="field-err" style={{ marginTop: 6 }}>{erroNome}</p>}
            </div>
          ) : (
            /* Nome digitado manualmente */
            <div className="field">
              <label>Nome * <span className="opt">(máx. 100)</span></label>
              <Input
                value={nomeManual}
                error={touched && !!erroNome}
                onChange={(e) => setNomeManual(e.target.value)}
                placeholder="Digite o nome completo…"
              />
              {touched && erroNome && <p className="field-err">{erroNome}</p>}
            </div>
          )}

          {/* Campos extras (hino, cargo, etc.) */}
          {(extraFields || []).map((f) => (
            <div className="field" key={f.key}>
              <label>
                {f.label}{f.required ? " *" : " "}
                {f.max ? <span className="opt">(máx. {f.max})</span> : null}
              </label>
              <Input
                value={extras[f.key]}
                error={touched && !!errosExtras[f.key]}
                onChange={setExtra(f.key)}
                placeholder={f.placeholder || ""}
              />
              {touched && errosExtras[f.key] && <p className="field-err">{errosExtras[f.key]}</p>}
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

// Reutilizável genérico (usado apenas por visitante)
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

// Wrappers por sub-entidade
const SUBMODALS = {
  // ── Louvor: toggle membro + hino opcional
  louvor: (p) => (
    <MemberPickerModal
      titulo="Adicionar Louvor"
      icon="music"
      locked={p.locked}
      onClose={p.onClose}
      onSave={p.onSave}
      extraFields={[
        { key: "hinoOpcional", label: "Hino / Música", required: false, max: 150, placeholder: "Ex: Grande é o Senhor" },
      ]}
    />
  ),

  // ── Músico: toggle membro
  musico: (p) => (
    <MemberPickerModal
      titulo="Adicionar Músico"
      icon="mic-2"
      locked={p.locked}
      onClose={p.onClose}
      onSave={p.onSave}
    />
  ),

  // ── Cooperador: toggle membro + cargo opcional
  cooperador: (p) => (
    <MemberPickerModal
      titulo="Adicionar Cooperador"
      icon="user-check"
      locked={p.locked}
      onClose={p.onClose}
      onSave={p.onSave}
      extraFields={[
        { key: "cargo", label: "Cargo / Função", required: false, max: 50, placeholder: "Ex: Portaria" },
      ]}
    />
  ),

  // ── Presbítero: toggle membro
  presbitero: (p) => (
    <MemberPickerModal
      titulo="Adicionar Presbítero"
      icon="user-check"
      locked={p.locked}
      onClose={p.onClose}
      onSave={p.onSave}
    />
  ),

  // ── Visitante: campos simples (sem toggle — visitante nunca é membro)
  visitante: (p) => (
    <SubEntityModal
      titulo="Registrar Visitante"
      icon="users"
      locked={p.locked}
      onClose={p.onClose}
      onSave={p.onSave}
      fields={[
        { key: "nome", label: "Nome do visitante", required: true, min: 2, max: 100, errRequired: "O nome do visitante é obrigatório", placeholder: "Ex: Fernando Souza" },
        { key: "telefone", label: "Telefone", required: false, max: 20, pattern: /^[\d\s()+\-]*$/, errPattern: "Telefone inválido", placeholder: "Ex: (11) 98765-4321" },
      ]}
    />
  ),
};

function SubEntityModalWrapper({ type, locked, onClose, onSave }) {
  const C = SUBMODALS[type];
  return C ? C({ locked, onClose, onSave }) : null;
}

Object.assign(window, { CultoFormModal, ConfirmarExcluirModal, SubEntityModalWrapper });
