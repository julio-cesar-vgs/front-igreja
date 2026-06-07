# Prototype Field Contracts — Igreja Ipiranga
> Contrato completo de campos para prototipação. Cobre todos os formulários, respostas, mensagens de erro, sucesso e comportamentos de intermitência.
> **Fonte da verdade:** DTOs e entidades do backend (extraídos em 01/06/2026).

---

## Índice

1. [Padrão de Resposta de Erro](#1-padrão-de-resposta-de-erro)
2. [Erros Globais e Intermitências](#2-erros-globais-e-intermitências)
3. [Autenticação](#3-autenticação)
4. [Igreja](#4-igreja)
5. [Culto](#5-culto)
6. [Culto — Louvores](#6-culto--louvores)
7. [Culto — Músicos](#7-culto--músicos)
8. [Culto — Cooperadores](#8-culto--cooperadores)
9. [Culto — Presbíteros](#9-culto--presbíteros)
10. [Culto — Visitantes](#10-culto--visitantes)
11. [Culto — Conferência Financeira](#11-culto--conferência-financeira)
12. [Culto — Reabertura](#12-culto--reabertura)
13. [Membros](#13-membros)
14. [Dízimos](#14-dízimos)
15. [Ofertas](#15-ofertas)
16. [Auditoria](#16-auditoria)
17. [Enums — Referência Completa](#17-enums--referência-completa)
18. [Permissões por Role](#18-permissões-por-role)

---

## 1. Padrão de Resposta de Erro

Todos os erros da API retornam este formato:

```json
{
  "timestamp": "2026-05-31T19:00:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Descrição legível do erro",
  "path": "/api/v1/cultos"
}
```

Erros de validação de campo retornam lista de campos com problema:
```json
{
  "timestamp": "2026-05-31T19:00:00",
  "status": 400,
  "error": "Validation Failed",
  "message": "O nome é obrigatório; O email é inválido",
  "path": "/api/v1/membros"
}
```

---

## 2. Erros Globais e Intermitências

Estes erros podem ocorrer em **qualquer tela** do app:

| Situação | HTTP | Mensagem ao Usuário | Ação no App |
|---|---|---|---|
| Sessão expirada | 401 | "Sua sessão expirou. Faça login novamente." | Bottom sheet → redirecionar para Login |
| Sem permissão para esta ação | 403 | "Você não tem permissão para realizar esta ação." | Toast vermelho |
| Registro não encontrado | 404 | "Registro não encontrado." | Toast vermelho |
| Conflito de edição simultânea | 409 | "Este registro foi alterado por outro usuário. Recarregue e tente novamente." | Toast âmbar + recarregar |
| Violação de unicidade (email/CPF duplicado) | 409 | "Já existe um registro com este dado." | Toast vermelho |
| Muitas tentativas de login | 429 | "Muitas tentativas. Aguarde um momento antes de tentar novamente." | Bloquear botão por 60s |
| Erro interno no servidor | 500 | "Ocorreu um erro inesperado. Tente novamente." | Toast vermelho + botão "Tentar novamente" |
| Sem conexão / timeout | — | "Sem conexão com o servidor. Verifique sua internet." | Toast âmbar persistente |
| Requisição muito lenta (> 10s) | — | "A operação está demorando mais que o esperado..." | Spinner + mensagem |

---

## 3. Autenticação

### 3.1 Login

**Endpoint:** `POST /api/v1/auth/login`

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `email` | E-mail | text/email | ✅ | Formato de e-mail válido |
| `password` | Senha | password | ✅ | Mínimo 6 caracteres |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `email` | Vazio | "Digite seu e-mail" |
| `email` | Formato inválido | "E-mail inválido" |
| `password` | Vazio | "Digite sua senha" |
| `password` | Menos de 6 chars | "Senha deve ter pelo menos 6 caracteres" |
| Geral | Credenciais incorretas (401) | "E-mail ou senha incorretos." |
| Geral | Rate limit (429) | "Muitas tentativas. Aguarde um momento." |

#### Resposta de Sucesso

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2g...",
  "expiresIn": 86400000
}
```

**Toast:** nenhum — redirecionar direto para Dashboard.

---

### 3.2 Registro

**Endpoint:** `POST /api/v1/auth/register`

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome completo | text | ✅ | Não pode ser vazio |
| `email` | E-mail | text/email | ✅ | Formato de e-mail válido |
| `senha` | Senha | password | ✅ | Não pode ser vazia |
| `igrejaId` | Igreja | select (UUID) | ✅ | Deve ser um ID válido |
| `role` | Perfil | select (enum) | ✅ | Ver [Roles](#17-enums--referência-completa) |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome é obrigatório" |
| `email` | Vazio | "O e-mail é obrigatório" |
| `email` | Formato inválido | "E-mail inválido" |
| `email` | Já cadastrado (409) | "Este e-mail já está em uso." |
| `senha` | Vazio | "A senha é obrigatória" |
| `igrejaId` | Nulo | "O ID da igreja é obrigatório" |
| `role` | Nulo | "O perfil (role) é obrigatório" |

**Toast de sucesso:** "Conta criada com sucesso!"

---

### 3.3 Renovar Token

**Endpoint:** `POST /api/v1/auth/refresh`

| Campo | Label | Tipo | Obrigatório |
|---|---|---|---|
| `refreshToken` | — (enviado automaticamente) | string | ✅ |

**Erros:** Se refresh token inválido ou expirado → 401 → redirecionar para Login.

---

### 3.4 Logout

**Endpoint:** `POST /api/v1/auth/logout`

Sem body. Token JWT no header `Authorization: Bearer {token}`.

**Toast de sucesso:** nenhum — redirecionar para Login.

---

## 4. Igreja

### 4.1 Criar / Editar Igreja

**Endpoints:** `POST /api/v1/igrejas` | `PUT /api/v1/igrejas/{id}`

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome da Igreja | text | ✅ | 2–150 caracteres |
| `tipo` | Tipo | select (enum) | ✅ | `MATRIZ` ou `FILIAL` |
| `endereco` | Endereço | text | não | máx. 255 caracteres |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome da igreja é obrigatório" |
| `nome` | Menos de 2 chars | "O nome deve ter entre 2 e 150 caracteres" |
| `tipo` | Nulo | "O tipo da igreja é obrigatório" |

**Toast de sucesso (criar):** "Igreja cadastrada com sucesso!"
**Toast de sucesso (editar):** "Igreja atualizada com sucesso!"
**Toast de sucesso (excluir):** "Igreja removida."

---

## 5. Culto

### 5.1 Criar Culto

**Endpoint:** `POST /api/v1/cultos` *(Requer ADMIN ou SUPER_ADMIN)*

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `dataHora` | Data e Hora | datetime | ✅ | Não pode ser nulo |
| `status` | Status | select (enum) | ✅ | `EM_ANDAMENTO` ou `FINALIZADO` |
| `tema` | Tema | text | não | máx. 200 caracteres |
| `palavraInicialPor` | Palavra Inicial por | text | não | máx. 100 caracteres |
| `palavraFinalPor` | Palavra Final por | text | não | máx. 100 caracteres |
| `totalPessoas` | Total de Pessoas | number | não | ≥ 0 (inteiro) |
| `descricao` | Descrição / Observações | textarea | não | máx. 500 caracteres |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `dataHora` | Nulo | "A data e hora do culto são obrigatórias" |
| `status` | Nulo | "O status do culto é obrigatório" |
| `tema` | Mais de 200 chars | "O tema deve ter no máximo 200 caracteres" |
| `palavraInicialPor` | Mais de 100 chars | "O nome deve ter no máximo 100 caracteres" |
| `palavraFinalPor` | Mais de 100 chars | "O nome deve ter no máximo 100 caracteres" |
| `totalPessoas` | Negativo | "O total de pessoas deve ser zero ou positivo" |
| `descricao` | Mais de 500 chars | "A descrição deve ter no máximo 500 caracteres" |
| Sem permissão | Role < ADMIN | "Você não tem permissão para criar cultos." |

**Toast de sucesso:** "Culto criado com sucesso!"

---

### 5.2 Editar Culto

**Endpoint:** `PUT /api/v1/cultos/{id}`

Mesmos campos do Criar, com adição de:

| Campo | Label | Tipo | Obrigatório | Observação |
|---|---|---|---|---|
| `version` | — (controle interno) | number | ✅ | Enviado automaticamente pelo app; previne conflitos de edição simultânea |

**Erro extra:** Se `version` desatualizada (409) → "Este culto foi alterado por outro usuário. Recarregue e tente novamente."

**Toast de sucesso:** "Culto atualizado com sucesso!"

---

### 5.3 Excluir Culto

**Endpoint:** `DELETE /api/v1/cultos/{id}`

Sem body.

| Condição | Mensagem |
|---|---|
| Sucesso | "Culto removido." |
| Culto já conferido (409) | "Não é possível excluir um culto já conferido." |
| Sem permissão (403) | "Você não tem permissão para excluir cultos." |

---

### 5.4 Listar Cultos

**Endpoint:** `GET /api/v1/cultos`

#### Filtros Disponíveis (query params)

| Parâmetro | Label | Tipo | Observação |
|---|---|---|---|
| `status` | Status | select (enum) | `EM_ANDAMENTO`, `FINALIZADO` |
| `dataInicio` | Data inicial | date | Formato `YYYY-MM-DD` |
| `dataFim` | Data final | date | Formato `YYYY-MM-DD` |
| `tema` | Buscar por tema | text | Busca parcial |
| `page` | Página | number | Padrão: 0 |
| `size` | Itens por página | number | Padrão: 20 |

---

### 5.5 Dashboard do Culto

**Endpoint:** `GET /api/v1/cultos/{cultoId}/dashboard` *(Cache 10 min)*

#### Dados Retornados

| Campo | Tipo | Descrição |
|---|---|---|
| `culto` | objeto | Dados completos do culto |
| `louvores` | lista | Lista de louvores |
| `cooperadores` | lista | Lista de cooperadores |
| `musicos` | lista | Lista de músicos |
| `presbiteros` | lista | Lista de presbíteros |
| `visitantes` | lista | Lista de visitantes |
| `dizimos` | lista | Lista de dízimos |
| `ofertas` | lista | Lista de ofertas |
| `totalDizimos` | decimal | Soma dos dízimos |
| `totalOfertas` | decimal | Soma das ofertas |
| `totalGeral` | decimal | Soma total |
| `totalPessoas` | inteiro | Total de pessoas |
| `conferencia` | objeto/null | Dados da conferência (null se não conferido) |

---

## 6. Culto — Louvores

**Endpoint base:** `/api/v1/cultos/{cultoId}/louvores`

### 6.1 Adicionar Louvor

**Endpoint:** `POST /api/v1/cultos/{cultoId}/louvores`

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `pessoaNome` | Nome da pessoa | text | ✅ | 2–100 caracteres |
| `hinoOpcional` | Hino / Música | text | não | máx. 150 caracteres |

#### Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `pessoaNome` | Vazio | "O nome da pessoa é obrigatório" |
| `pessoaNome` | Menos de 2 chars | "O nome deve ter entre 2 e 100 caracteres" |
| `hinoOpcional` | Mais de 150 chars | "O nome do hino deve ter no máximo 150 caracteres" |
| Culto conferido | — | "Este culto já foi conferido. Alterações bloqueadas." |

**Toast de sucesso:** "Louvor adicionado!"
**Toast de sucesso (editar):** "Louvor atualizado!"
**Toast de sucesso (remover):** "Louvor removido."

---

## 7. Culto — Músicos

**Endpoint base:** `/api/v1/cultos/{cultoId}/musicos`

### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome do músico | text | ✅ | 2–100 caracteres |

#### Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome do músico é obrigatório" |
| `nome` | Fora do range | "O nome deve ter entre 2 e 100 caracteres" |
| Culto conferido | — | "Este culto já foi conferido. Alterações bloqueadas." |

**Toast de sucesso (adicionar):** "Músico adicionado!"
**Toast de sucesso (remover):** "Músico removido."

---

## 8. Culto — Cooperadores

**Endpoint base:** `/api/v1/cultos/{cultoId}/cooperadores`

### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome do cooperador | text | ✅ | 2–100 caracteres |
| `cargo` | Cargo / Função | text | não | máx. 50 caracteres |

#### Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome do cooperador é obrigatório" |
| `nome` | Fora do range | "O nome deve ter entre 2 e 100 caracteres" |
| `cargo` | Mais de 50 chars | "O cargo deve ter no máximo 50 caracteres" |
| Culto conferido | — | "Este culto já foi conferido. Alterações bloqueadas." |

**Toast de sucesso (adicionar):** "Cooperador adicionado!"
**Toast de sucesso (remover):** "Cooperador removido."

---

## 9. Culto — Presbíteros

**Endpoint base:** `/api/v1/cultos/{cultoId}/presbiteros`

### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome do presbítero | text | ✅ | 2–100 caracteres |

#### Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome do presbítero é obrigatório" |
| `nome` | Fora do range | "O nome deve ter entre 2 e 100 caracteres" |
| Culto conferido | — | "Este culto já foi conferido. Alterações bloqueadas." |

**Toast de sucesso (adicionar):** "Presbítero adicionado!"
**Toast de sucesso (remover):** "Presbítero removido."

---

## 10. Culto — Visitantes

**Endpoint base:** `/api/v1/cultos/{cultoId}/visitantes`

### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome do visitante | text | ✅ | 2–100 caracteres |
| `telefone` | Telefone | text | não | máx. 20 chars; apenas dígitos, espaços e `() + -` |

#### Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome do visitante é obrigatório" |
| `nome` | Fora do range | "O nome deve ter entre 2 e 100 caracteres" |
| `telefone` | Formato inválido | "Telefone inválido" |
| Culto conferido | — | "Este culto já foi conferido. Alterações bloqueadas." |

**Toast de sucesso (adicionar):** "Visitante registrado!"
**Toast de sucesso (remover):** "Visitante removido."

---

## 11. Culto — Conferência Financeira

**Endpoint:** `POST /api/v1/cultos/{cultoId}/conferencia` *(Requer TESOUREIRO, ADMIN ou SUPER_ADMIN)*

### 11.1 Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `tesoureiroId` | — (enviado automaticamente) | UUID | ✅ | ID do usuário logado |
| `nomesTesoureiros` | Nome(s) do(s) tesoureiro(s) | text | não | Texto livre |
| `totalDizimosInformado` | Total de Dízimos contado | decimal | não | ≥ 0; máx. 10 dígitos e 2 casas |
| `totalOfertasInformado` | Total de Ofertas contado | decimal | não | ≥ 0; máx. 10 dígitos e 2 casas |
| `totalConferido` | Total Geral contado | decimal | ✅ | ≥ 0; calculado automaticamente (editável) |
| `observacao` | Observações | textarea | não | Texto livre |

### 11.2 Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `tesoureiroId` | Nulo | "O ID do tesoureiro é obrigatório" |
| `totalConferido` | Nulo | "O total conferido é obrigatório" |
| `totalConferido` | Negativo | "O total geral deve ser zero ou positivo" |
| `totalDizimosInformado` | Negativo | "O total de dízimos deve ser zero ou positivo" |
| `totalOfertasInformado` | Negativo | "O total de ofertas deve ser zero ou positivo" |
| Culto já conferido (409) | — | "Este culto já foi conferido. Alterações bloqueadas." |
| Sem permissão (403) | — | "Você não tem permissão para conferir o caixa." |

### 11.3 Resposta — Dados Calculados pelo Sistema

| Campo | Descrição |
|---|---|
| `totalDizimosSistema` | Soma de todos os dízimos registrados |
| `totalOfertasSistema` | Soma de todas as ofertas registradas |
| `totalGeralSistema` | totalDizimos + totalOfertas |
| `divergenciaValor` | totalConferido − totalGeralSistema (pode ser negativo) |
| `status` | `CONFERIDO` (divergência = 0) ou `DIVERGENTE` |
| `dataConferencia` | Timestamp da conferência |

### 11.4 Toast de Feedback

| Status | Toast |
|---|---|
| `CONFERIDO` | ✅ "Conferência realizada! Valores conferem." |
| `DIVERGENTE` | ⚠️ "Conferência salva com divergência de R$ X,XX." |

**Efeito colateral:** Após confirmar, o culto fica **bloqueado** para novas alterações. Banner exibido em toda a tela de detalhe.

---

## 12. Culto — Reabertura

**Endpoint:** `POST /api/v1/cultos/{cultoId}/reabrir` *(Requer ADMIN ou SUPER_ADMIN)*

### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `motivo` | Motivo da reabertura | textarea | ✅ | 10–500 caracteres |

### Mensagens de Erro

| Campo | Condição | Mensagem |
|---|---|---|
| `motivo` | Vazio | "O motivo da reabertura é obrigatório" |
| `motivo` | Menos de 10 chars | "O motivo deve ter entre 10 e 500 caracteres" |
| Sem permissão (403) | — | "Apenas Administradores podem reabrir um culto conferido." |

**Toast de sucesso:** "Culto reaberto com sucesso!"
**Efeito colateral:** Conferência anterior é removida; culto volta a aceitar alterações.

---

## 13. Membros

### 13.1 Criar / Editar Membro

**Endpoints:** `POST /api/v1/membros` *(Requer COOPERADOR+)* | `PUT /api/v1/membros/{id}`

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `nome` | Nome completo | text | ✅ | 2–150 caracteres |
| `status` | Status | select (enum) | ✅ | Ver [StatusMembro](#17-enums--referência-completa) |
| `email` | E-mail | text/email | não | Formato válido; único no sistema; máx. 150 chars |
| `telefone` | Telefone | text | não | máx. 20 chars; apenas `[0-9 ()+-]` |
| `cpf` | CPF | text | não | Formato `000.000.000-00`; único no sistema |
| `dataNascimento` | Data de nascimento | date | não | Data no passado |
| `dataMembresia` | Membro desde | date | não | Passado ou hoje |
| `endereco` | Endereço | text | não | máx. 255 caracteres |
| `dizimista` | É dizimista? | toggle/checkbox | não | Padrão: `false` |
| `observacoes` | Observações | textarea | não | máx. 500 caracteres |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `nome` | Vazio | "O nome é obrigatório" |
| `nome` | Fora do range | "O nome deve ter entre 2 e 150 caracteres" |
| `status` | Nulo | "O status é obrigatório" |
| `email` | Formato inválido | "E-mail inválido" |
| `email` | Já cadastrado (409) | "Já existe um membro com este e-mail." |
| `telefone` | Caracteres inválidos | "Telefone com formato inválido" |
| `cpf` | Formato inválido | "CPF com formato inválido" |
| `cpf` | Já cadastrado (409) | "Já existe um membro com este CPF." |
| `dataNascimento` | Data futura | "A data de nascimento deve ser no passado" |
| `dataMembresia` | Data futura | "A data de membresia não pode ser futura" |

**Toast de sucesso (criar):** "Membro cadastrado com sucesso!"
**Toast de sucesso (editar):** "Dados do membro atualizados!"

---

### 13.2 Alterar Status do Membro

**Endpoint:** `PATCH /api/v1/membros/{id}/status?status={StatusMembro}` *(Requer ADMIN+)*

| Parâmetro | Tipo | Valores |
|---|---|---|
| `status` | query param (enum) | `ATIVO`, `INATIVO`, `TRANSFERIDO`, `FALECIDO`, `CONGREGADO` |

**Toast de sucesso:** "Status atualizado para [STATUS]."
**Erro sem permissão:** "Apenas administradores podem alterar o status de membros."

---

### 13.3 Alterar Flag Dizimista

**Endpoint:** `PATCH /api/v1/membros/{id}/dizimista?dizimista={true|false}` *(Requer TESOUREIRO+)*

**Toast de sucesso:** "Membro marcado como dizimista." / "Membro desmarcado como dizimista."

---

### 13.4 Excluir Membro

**Endpoint:** `DELETE /api/v1/membros/{id}` *(Requer ADMIN+)*

**Toast de sucesso:** "Membro removido."
**Erro sem permissão:** "Apenas administradores podem excluir membros."

---

### 13.5 Listar Membros

**Endpoint:** `GET /api/v1/membros`

#### Filtros Disponíveis

| Parâmetro | Label | Tipo | Observação |
|---|---|---|---|
| `nome` | Buscar por nome | text | Busca parcial |
| `status` | Status | select (enum) | Ver [StatusMembro](#17-enums--referência-completa) |
| `dizimista` | Somente dizimistas | toggle | `true` ou `false` |
| `page` | Página | number | Padrão: 0 |
| `size` | Itens por página | number | Padrão: 20 |

---

## 14. Dízimos

### 14.1 Registrar Dízimo

**Endpoint:** `POST /api/v1/cultos/{cultoId}/dizimos` *(Requer TESOUREIRO+)*

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `membroNome` | Nome do dizimista | text | ✅ | Não pode ser vazio |
| `valor` | Valor (R$) | decimal | ✅ | Positivo; máx. 10 dígitos e 2 casas decimais |
| `data` | Data | date | ✅ | Passado ou hoje |
| `formaPagamento` | Forma de Pagamento | select (enum) | não | Ver [FormaPagamento](#17-enums--referência-completa) |
| `observacao` | Observações | text | não | máx. 255 caracteres |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `membroNome` | Vazio | "O nome do membro é obrigatório" |
| `valor` | Nulo | "O valor é obrigatório" |
| `valor` | Zero ou negativo | "O valor deve ser positivo" |
| `data` | Nula | "A data é obrigatória" |
| `data` | Data futura | "A data não pode ser futura" |
| Culto conferido (409) | — | "Este culto já foi conferido. Alterações bloqueadas." |
| Sem permissão (403) | — | "Você não tem permissão para registrar dízimos." |

**Toast de sucesso:** "Dízimo registrado com sucesso!"
**Toast de sucesso (editar):** "Dízimo atualizado!"
**Toast de sucesso (remover):** "Dízimo removido."

---

### 14.2 Relatório de Dízimos

**Endpoint:** `GET /api/v1/dizimos/relatorio` *(Requer TESOUREIRO+)*

| Parâmetro | Label | Tipo | Obrigatório |
|---|---|---|---|
| `inicio` | Data inicial | date | ✅ |
| `fim` | Data final | date | ✅ |

---

## 15. Ofertas

### 15.1 Registrar Oferta

**Endpoint:** `POST /api/v1/cultos/{cultoId}/ofertas`

#### Campos de Input

| Campo | Label | Tipo | Obrigatório | Validação |
|---|---|---|---|---|
| `valor` | Valor (R$) | decimal | ✅ | Positivo; máx. 10 dígitos e 2 casas decimais |
| `data` | Data | date | ✅ | Passado ou hoje |
| `tipoOferta` | Tipo da Oferta | select (enum) | ✅ | Ver [TipoOferta](#17-enums--referência-completa) |
| `formaPagamento` | Forma de Pagamento | select (enum) | ✅ | Ver [FormaPagamento](#17-enums--referência-completa) |
| `ofertanteNome` | Nome do ofertante | text | não | máx. 100 caracteres |
| `observacao` | Observações | text | não | máx. 255 caracteres |

#### Mensagens de Erro por Campo

| Campo | Condição | Mensagem |
|---|---|---|
| `valor` | Nulo | "O valor é obrigatório" |
| `valor` | Zero ou negativo | "O valor deve ser positivo" |
| `data` | Nula | "A data é obrigatória" |
| `data` | Data futura | "A data não pode ser futura" |
| `tipoOferta` | Nulo | "O tipo da oferta é obrigatório" |
| `formaPagamento` | Nulo | "A forma de pagamento é obrigatória" |
| Culto conferido (409) | — | "Este culto já foi conferido. Alterações bloqueadas." |

**Toast de sucesso:** "Oferta registrada com sucesso!"
**Toast de sucesso (editar):** "Oferta atualizada!"
**Toast de sucesso (remover):** "Oferta removida."

---

### 15.2 Relatório de Ofertas

**Endpoint:** `GET /api/v1/ofertas/relatorio` *(Requer TESOUREIRO+)*

| Parâmetro | Label | Tipo | Obrigatório |
|---|---|---|---|
| `inicio` | Data inicial | date | ✅ |
| `fim` | Data final | date | ✅ |
| `tipo` | Tipo de oferta | select (enum) | não |

---

## 16. Auditoria

**Endpoints:** `GET /api/v1/audit/logs` *(Requer ADMIN+)*

### Dados Retornados por Registro de Log

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | UUID | ID do log |
| `entidadeTipo` | text | Ex: `Culto`, `Dizimo`, `Membro` |
| `entidadeId` | UUID | ID do registro alterado |
| `acao` | text | `INSERT`, `UPDATE`, `DELETE` |
| `usuarioId` | UUID | ID do usuário que fez a ação |
| `timestamp` | datetime | Data e hora da alteração |
| `valorAntigo` | JSON | Estado anterior (quando aplicável) |
| `valorNovo` | JSON | Novo estado (quando aplicável) |

> Auditoria é somente leitura no app. Não há formulário de input — apenas visualização de histórico.

---

## 17. Enums — Referência Completa

### StatusCulto

| Valor | Label no App | Cor |
|---|---|---|
| `EM_ANDAMENTO` | Em Andamento | Dourado (`#eab308`) |
| `FINALIZADO` | Finalizado | Verde (`#22c55e`) |

> Nota: O status `AGENDADO` aparece no design brief mas não existe no código atual. Usar apenas `EM_ANDAMENTO` e `FINALIZADO`.

---

### StatusMembro

| Valor | Label no App | Uso |
|---|---|---|
| `ATIVO` | Ativo | Membro participante |
| `INATIVO` | Inativo | Não frequenta mais |
| `TRANSFERIDO` | Transferido | Foi para outra congregação |
| `FALECIDO` | Falecido | In memoriam |
| `CONGREGADO` | Congregado | Em processo de filiação |

---

### FormaPagamento (Dízimos e Ofertas)

| Valor | Label no App |
|---|---|
| `DINHEIRO` | Dinheiro |
| `PIX` | PIX |
| `CARTAO_DEBITO` | Cartão de Débito |
| `CARTAO_CREDITO` | Cartão de Crédito |
| `TRANSFERENCIA` | Transferência (TED/DOC) |
| `CHEQUE` | Cheque |
| `DEPOSITO` | Depósito Bancário |

---

### TipoOferta

| Valor | Label no App |
|---|---|
| `REGULAR` | Oferta Regular |
| `MISSOES` | Missões |
| `CONSTRUCAO` | Construção / Reforma |
| `ACAO_SOCIAL` | Ação Social |
| `ESPECIAL` | Oferta Especial |
| `GRATIDAO` | Gratidão |
| `DEPARTAMENTO` | Departamento |
| `OUTRO` | Outro |

---

### StatusConferencia

| Valor | Significado | Cor |
|---|---|---|
| `CONFERIDO` | Valores batem exatamente | Verde |
| `DIVERGENTE` | Há diferença entre sistema e contagem física | Âmbar |
| `APROVADO` | Conferência aprovada por superior | Verde (variante) |
| `PENDENTE` | Aguardando revisão | Âmbar |

---

### Role (Perfis de Usuário)

| Valor | Label no App | Descrição |
|---|---|---|
| `ROLE_SUPER_ADMIN` | Super Admin | Pastor sede — acesso global a todas as igrejas |
| `ROLE_ADMIN` | Administrador | Pastor local — acesso total à sua igreja |
| `ROLE_TESOUREIRO` | Tesoureiro | Acesso a funcionalidades financeiras |
| `ROLE_COOPERADOR` | Cooperador | Cadastros não-financeiros |
| `ROLE_MEMBRO` | Membro | Apenas visualização |

### TipoIgreja

| Valor | Label no App |
|---|---|
| `MATRIZ` | Sede / Matriz |
| `FILIAL` | Filial / Congregação |

---

## 18. Permissões por Role

Tabela resumida de quem pode fazer o quê:

| Ação | MEMBRO | COOPERADOR | TESOUREIRO | ADMIN | SUPER_ADMIN |
|---|:---:|:---:|:---:|:---:|:---:|
| Ver cultos | ✅ | ✅ | ✅ | ✅ | ✅ |
| Criar culto | ❌ | ❌ | ❌ | ✅ | ✅ |
| Editar culto | ❌ | ❌ | ❌ | ✅ | ✅ |
| Excluir culto | ❌ | ❌ | ❌ | ✅ | ✅ |
| Adicionar louvor/músico/cooperador/presbítero/visitante | ❌ | ✅ | ✅ | ✅ | ✅ |
| Registrar dízimo | ❌ | ❌ | ✅ | ✅ | ✅ |
| Registrar oferta | ❌ | ✅ | ✅ | ✅ | ✅ |
| Ver totais financeiros | ❌ | ✅ | ✅ | ✅ | ✅ |
| Conferir caixa | ❌ | ❌ | ✅ | ✅ | ✅ |
| Reabrir culto conferido | ❌ | ❌ | ❌ | ✅ | ✅ |
| Ver relatórios financeiros | ❌ | ❌ | ✅ | ✅ | ✅ |
| Cadastrar membro | ❌ | ✅ | ✅ | ✅ | ✅ |
| Editar membro | ❌ | ✅ | ✅ | ✅ | ✅ |
| Excluir membro | ❌ | ❌ | ❌ | ✅ | ✅ |
| Alterar status de membro | ❌ | ❌ | ❌ | ✅ | ✅ |
| Alterar flag dizimista | ❌ | ❌ | ✅ | ✅ | ✅ |
| Ver auditoria (logs) | ❌ | ❌ | ❌ | ✅ | ✅ |

---

*Gerado em 01/06/2026 — extraído diretamente dos DTOs, entidades e controllers do backend.*
*Versão 1.0 — Igreja Ipiranga.*
