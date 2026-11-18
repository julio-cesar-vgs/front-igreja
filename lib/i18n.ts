/**
 * Módulo leve de internacionalização (i18n) e localização multirregião (pt-BR, en, es).
 * Formata moeda, datas e fusos horários por congregação sem dependências pesadas.
 */

export type SupportedLocale = 'pt-BR' | 'en' | 'es'

const MESSAGES: Record<SupportedLocale, Record<string, string>> = {
  'pt-BR': {
    offlineBanner: 'Sem conexão com a internet — sincronização automática ao reconectar.',
    loading: 'Carregando...',
    conflictWarning: 'Registro modificado por outro usuário. Recarregue para revisar.',
    navHome: 'Início',
    navCultos: 'Cultos',
    navMembros: 'Membros',
    navFinanceiro: 'Financeiro',
  },
  en: {
    offlineBanner: 'No internet connection — changes will sync automatically when back online.',
    loading: 'Loading...',
    conflictWarning: 'Record updated by another user. Reload to review.',
    navHome: 'Home',
    navCultos: 'Services',
    navMembros: 'Members',
    navFinanceiro: 'Finance',
  },
  es: {
    offlineBanner: 'Sin conexión a internet — sincronización automática al reconectar.',
    loading: 'Cargando...',
    conflictWarning: 'Registro modificado por otro usuario. Recargue para revisar.',
    navHome: 'Inicio',
    navCultos: 'Cultos',
    navMembros: 'Miembros',
    navFinanceiro: 'Finanzas',
  },
}

export function t(key: string, locale: SupportedLocale = 'pt-BR'): string {
  return MESSAGES[locale]?.[key] ?? MESSAGES['pt-BR'][key] ?? key
}

export function formatCurrencyByLocale(
  value: number,
  locale: SupportedLocale = 'pt-BR',
  currency = 'BRL',
): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
}

export function formatDateTimeByZone(
  isoDate: string | Date,
  locale: SupportedLocale = 'pt-BR',
  timeZone = 'America/Sao_Paulo',
): string {
  const date = typeof isoDate === 'string' ? new Date(isoDate) : isoDate
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone,
  }).format(date)
}
