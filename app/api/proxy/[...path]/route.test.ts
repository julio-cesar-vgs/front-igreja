import { describe, it, expect } from 'vitest'
import { resolveAllowedBackendPath } from './route'

describe('BFF Proxy Allowlist (anti-SSRF / path traversal)', () => {
  it('permite rotas válidas da API de domínio e /auth/me', () => {
    expect(resolveAllowedBackendPath(['cultos', 'resumo'])).toBe('cultos/resumo')
    expect(resolveAllowedBackendPath(['membros', '123', 'dizimista'])).toBe('membros/123/dizimista')
    expect(resolveAllowedBackendPath(['auth', 'me'])).toBe('auth/me')
    expect(resolveAllowedBackendPath(['lgpd', 'meus-dados'])).toBe('lgpd/meus-dados')
  })

  it('bloqueia path traversal, URLs externas e endpoints administrativos sensíveis não listados', () => {
    expect(resolveAllowedBackendPath(['..', 'actuator', 'env'])).toBeNull()
    expect(resolveAllowedBackendPath(['actuator', 'health'])).toBeNull()
    expect(resolveAllowedBackendPath(['http://evil.com'])).toBeNull()
    expect(resolveAllowedBackendPath(['auth', 'login'])).toBeNull()
    expect(resolveAllowedBackendPath([])).toBeNull()
  })
})
