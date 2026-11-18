import { describe, it, expect } from 'vitest'
import { t, formatCurrencyByLocale, formatDateTimeByZone } from './i18n'

describe('i18n & localização multirregião', () => {
  it('resolve chaves traduzidas em pt-BR, en e es com fallback seguro', () => {
    expect(t('navCultos', 'pt-BR')).toBe('Cultos')
    expect(t('navCultos', 'en')).toBe('Services')
    expect(t('navCultos', 'es')).toBe('Cultos')
    expect(t('chave.inexistente', 'en')).toBe('chave.inexistente')
  })

  it('formata moeda e data respeitando timezone informado', () => {
    expect(formatCurrencyByLocale(250.5, 'pt-BR', 'BRL')).toContain('250,50')
    const sp = formatDateTimeByZone('2026-05-10T22:00:00Z', 'pt-BR', 'America/Sao_Paulo')
    const utc = formatDateTimeByZone('2026-05-10T22:00:00Z', 'en', 'UTC')
    expect(sp).toContain('19:00')
    expect(utc).toContain('10:00')
  })
})
