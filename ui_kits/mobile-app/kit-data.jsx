/* global React */
// =============================================================================
// Igreja Ipiranga — Dados mock canônicos (Brief V2) + roles/permissões
// =============================================================================

// ---- Roles & permissões ----------------------------------------------------
const ROLE_RANK = { MEMBRO: 0, COOPERADOR: 1, TESOUREIRO: 2, ADMIN: 3, SUPER_ADMIN: 4 };
const ROLE_LABEL = { MEMBRO: "Membro", COOPERADOR: "Cooperador", TESOUREIRO: "Tesoureiro", ADMIN: "Admin", SUPER_ADMIN: "Super Admin" };
// Rank mínimo por ação — alinhado com contratos v1.0
const ACTION_MIN = {
  criar_culto: 3,           // ADMIN+
  editar_culto: 3,          // ADMIN+
  excluir_culto: 3,         // ADMIN+
  add_participante: 1,      // COOPERADOR+
  registrar_dizimo: 2,      // TESOUREIRO+
  registrar_oferta: 1,      // COOPERADOR+ (oferta ≠ dízimo)
  ver_financeiro: 1,        // COOPERADOR+
  conferir: 2,              // TESOUREIRO+
  reabrir: 3,               // ADMIN+
  ver_auditoria: 3,         // ADMIN+
  cadastrar_membro: 1,      // COOPERADOR+
  editar_membro: 1,         // COOPERADOR+
  excluir_membro: 3,        // ADMIN+
  alterar_status_membro: 3, // ADMIN+
  alterar_dizimista: 2,     // TESOUREIRO+
  relatorios: 2,            // TESOUREIRO+
};
function can(role, action) {
  return (ROLE_RANK[role] ?? 0) >= (ACTION_MIN[action] ?? 99);
}

const USER = { nome: "Pastor João", email: "admin@igreja.com", igreja: "Igreja Matriz Ipiranga" };

// ---- Cultos (estado inicial; a App clona e muta conferência em runtime) ----
function makeCultos() {
  return [
    {
      id: "1", tema: "A Graça que Transforma", dataHora: "31/05/2026 19:00", data: "31/05/2026",
      status: "EM_ANDAMENTO", pessoas: 120,
      palavraInicial: "Pr. João Silva", palavraFinal: "Pr. Pedro Santos",
      louvores: [
        { nome: "Ana Costa", hino: "Grande é o Senhor" },
        { nome: "Roberto Lima", hino: "Quão Grande és Tu" },
      ],
      musicos: [{ nome: "Carlos Teclado" }, { nome: "Paulo Violão" }],
      cooperadores: [{ nome: "Marcos Silva", cargo: "Portaria" }, { nome: "Lúcia Alves", cargo: "Recepção" }],
      presbiteros: [{ nome: "Pr. José Alves" }, { nome: "Pr. Manuel Costa" }],
      visitantes: [{ nome: "Fernando Souza", tel: "(11) 98765-4321" }],
      dizimos: [
        { membro: "João Silva", valor: 200, forma: "PIX", data: "31/05/2026" },
        { membro: "Maria Santos", valor: 150, forma: "DINHEIRO", data: "31/05/2026" },
        { membro: "Pedro Alves", valor: 100, forma: "TRANSFERENCIA", data: "31/05/2026" },
      ],
      ofertas: [
        { tipo: "Regular", valor: 150, forma: "DINHEIRO", data: "31/05/2026" },
        { tipo: "Missões", valor: 80, forma: "PIX", data: "31/05/2026" },
      ],
      conferencia: null,
    },
    {
      id: "2", tema: "Culto da Família", dataHora: "24/05/2026 19:00", data: "24/05/2026",
      status: "FINALIZADO", pessoas: 95,
      palavraInicial: "Pr. João Silva", palavraFinal: "Pr. Pedro Santos",
      louvores: [{ nome: "Ana Costa", hino: "Tua Graça me Basta" }],
      musicos: [{ nome: "Carlos Teclado" }],
      cooperadores: [{ nome: "Marcos Silva", cargo: "Portaria" }],
      presbiteros: [{ nome: "Pr. José Alves" }],
      visitantes: [],
      dizimos: [
        { membro: "Ana Costa", valor: 1200, forma: "PIX", data: "24/05/2026" },
        { membro: "Carlos Gomes", valor: 900, forma: "DINHEIRO", data: "24/05/2026" },
      ],
      ofertas: [
        { tipo: "Regular", valor: 600, forma: "DINHEIRO", data: "24/05/2026" },
        { tipo: "Construção", valor: 300, forma: "PIX", data: "24/05/2026" },
      ],
      conferencia: { status: "CONFERIDO", totalSistema: 3000, totalContado: 3000, diferenca: 0, tesoureiro: "Maria Silva", data: "24/05/2026" },
    },
    {
      id: "3", tema: "Pregação Especial", dataHora: "17/05/2026 19:00", data: "17/05/2026",
      status: "FINALIZADO", pessoas: 88,
      palavraInicial: "Ev. Maria Santos", palavraFinal: "Pr. João Silva",
      louvores: [{ nome: "Roberto Lima", hino: "Eu Navegarei" }],
      musicos: [{ nome: "Paulo Violão" }],
      cooperadores: [{ nome: "Lúcia Alves", cargo: "Recepção" }],
      presbiteros: [{ nome: "Pr. Manuel Costa" }],
      visitantes: [],
      dizimos: [
        { membro: "João Silva", valor: 1000, forma: "PIX", data: "17/05/2026" },
        { membro: "Maria Santos", valor: 800, forma: "DINHEIRO", data: "17/05/2026" },
      ],
      ofertas: [{ tipo: "Regular", valor: 700, forma: "DINHEIRO", data: "17/05/2026" }],
      conferencia: { status: "DIVERGENTE", totalSistema: 2500, totalContado: 2455, diferenca: -45, tesoureiro: "Maria Silva", data: "17/05/2026" },
    },
    {
      id: "4", tema: "Culto de Oração", dataHora: "10/05/2026 19:00", data: "10/05/2026",
      status: "FINALIZADO", pessoas: 64,
      palavraInicial: "Pr. Pedro Santos", palavraFinal: "Pr. José Alves",
      louvores: [],
      musicos: [], cooperadores: [{ nome: "Marcos Silva", cargo: "Portaria" }], presbiteros: [], visitantes: [],
      dizimos: [{ membro: "Ana Costa", valor: 800, forma: "PIX", data: "10/05/2026" }],
      ofertas: [{ tipo: "Regular", valor: 200, forma: "DINHEIRO", data: "10/05/2026" }],
      conferencia: null, // pendente (data passada, não conferido)
    },
  ];
}

const MEMBROS = [
  { id: 1, nome: "João Silva Santos", status: "ATIVO", dizimista: true, tel: "(11) 98765-4321", email: "joao.silva@email.com", endereco: "Rua Principal, 123 - São Paulo, SP", nascimento: "15/06/1980", membresia: "10/01/2015", obs: "Membro ativo e comprometido. Participa do louvor.", dizimosAno: 12, totalDizimos: "R$ 6.240,00" },
  { id: 2, nome: "Maria Santos", status: "ATIVO", dizimista: true, tel: "(11) 98765-4322", email: "maria.santos@email.com", endereco: "Av. das Flores, 45 - São Paulo, SP", nascimento: "02/03/1975", membresia: "22/07/2012", obs: "Coordena o ministério de mulheres.", dizimosAno: 11, totalDizimos: "R$ 8.100,00" },
  { id: 3, nome: "Pedro Oliveira", status: "INATIVO", dizimista: false, tel: "(11) 98765-4323", email: "pedro.o@email.com", endereco: "Rua do Sol, 9 - São Paulo, SP", nascimento: "30/11/1990", membresia: "05/02/2019", obs: "", dizimosAno: 0, totalDizimos: "R$ 0,00" },
  { id: 4, nome: "Ana Costa", status: "ATIVO", dizimista: true, tel: "(11) 98765-4324", email: "ana.costa@email.com", endereco: "Rua Verde, 200 - São Paulo, SP", nascimento: "18/09/1985", membresia: "14/04/2016", obs: "Ministério de louvor.", dizimosAno: 12, totalDizimos: "R$ 7.320,00" },
  { id: 5, nome: "Carlos Gomes", status: "ATIVO", dizimista: false, tel: "(11) 98765-4325", email: "carlos.g@email.com", endereco: "Rua Azul, 77 - São Paulo, SP", nascimento: "25/12/1988", membresia: "09/09/2020", obs: "", dizimosAno: 3, totalDizimos: "R$ 1.450,00" },
];

const FORMAS = ["DINHEIRO", "PIX", "CARTAO_DEBITO", "CARTAO_CREDITO", "TRANSFERENCIA", "CHEQUE", "DEPOSITO"];
const TIPOS_OFERTA = ["REGULAR", "MISSOES", "CONSTRUCAO", "ACAO_SOCIAL", "ESPECIAL", "GRATIDAO", "DEPARTAMENTO", "OUTRO"];
// StatusMembro (5 valores conforme entidade backend)
const STATUS_MEMBRO_OPTS = [
  { value: "ATIVO", label: "Ativo" },
  { value: "INATIVO", label: "Inativo" },
  { value: "TRANSFERIDO", label: "Transferido" },
  { value: "FALECIDO", label: "Falecido" },
  { value: "CONGREGADO", label: "Congregado" },
];
// StatusCulto — apenas EM_ANDAMENTO e FINALIZADO (AGENDADO não existe no backend)
const STATUS_CULTO_OPTS = [
  { value: "EM_ANDAMENTO", label: "Em Andamento" },
  { value: "FINALIZADO", label: "Finalizado" },
];

// Mock audit logs — §16
const AUDIT_LOGS = [
  { id: "a1", entidadeTipo: "Dizimo", acao: "INSERT", usuario: "Pastor João", timestamp: "01/06/2026 19:47", descricao: "Dízimo de João Silva registrado — R$ 200,00 (PIX)", culto: "A Graça que Transforma" },
  { id: "a2", entidadeTipo: "Oferta", acao: "INSERT", usuario: "Pastor João", timestamp: "01/06/2026 19:44", descricao: "Oferta Regular registrada — R$ 150,00 (Dinheiro)", culto: "A Graça que Transforma" },
  { id: "a3", entidadeTipo: "Conferencia", acao: "INSERT", usuario: "Maria Silva", timestamp: "25/05/2026 21:10", descricao: "Caixa conferido — Total R$ 3.000,00. Conferente: João Diácono", culto: "Culto da Família" },
  { id: "a4", entidadeTipo: "Culto", acao: "UPDATE", usuario: "Pastor João", timestamp: "25/05/2026 19:00", descricao: "Culto atualizado — Total Pessoas: 95", culto: "Culto da Família" },
  { id: "a5", entidadeTipo: "Membro", acao: "INSERT", usuario: "Pastor João", timestamp: "20/05/2026 10:22", descricao: "Membro cadastrado — Carlos Gomes", culto: null },
  { id: "a6", entidadeTipo: "Conferencia", acao: "DELETE", usuario: "Pastor João", timestamp: "18/05/2026 09:15", descricao: "Conferência reaberta — Motivo: Erro no lançamento do dízimo de João", culto: "Pregação Especial" },
  { id: "a7", entidadeTipo: "Dizimo", acao: "UPDATE", usuario: "Maria Silva", timestamp: "17/05/2026 20:05", descricao: "Dízimo atualizado — Maria Santos: R$ 800,00 (corrigido de R$ 600,00)", culto: "Pregação Especial" },
  { id: "a8", entidadeTipo: "Membro", acao: "UPDATE", usuario: "Pastor João", timestamp: "15/05/2026 14:30", descricao: "Status alterado — Pedro Oliveira: ATIVO → INATIVO", culto: null },
  { id: "a9", entidadeTipo: "Oferta", acao: "DELETE", usuario: "Maria Silva", timestamp: "14/05/2026 20:30", descricao: "Oferta removida — Oferta Especial R$ 200,00 (lançamento duplicado)", culto: "Culto de Oração" },
  { id: "a10", entidadeTipo: "Culto", acao: "INSERT", usuario: "Pastor João", timestamp: "10/05/2026 09:00", descricao: "Culto criado — A Graça que Transforma (31/05/2026)", culto: null },
];

const sum = (arr) => arr.reduce((a, b) => a + b.valor, 0);
function cultoTotais(c) {
  const d = sum(c.dizimos), o = sum(c.ofertas);
  return { dizimos: d, ofertas: o, total: d + o };
}

Object.assign(window, {
  ROLE_RANK, ROLE_LABEL, ACTION_MIN, can, USER,
  makeCultos, MEMBROS, FORMAS, TIPOS_OFERTA, STATUS_MEMBRO_OPTS, STATUS_CULTO_OPTS, AUDIT_LOGS, sum, cultoTotais,
});
