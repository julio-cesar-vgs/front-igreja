import { useEffect, useState } from 'react'

/**
 * Hook de debounce genérico para controlar frequência de buscas/autocompletes na UI,
 * evitando rajadas de requisições em digitação rápida ou conexões lentas.
 *
 * @param value   Valor reativo atual (ex: termo de busca)
 * @param delayMs Atraso em milissegundos antes de propagar (padrão 350ms)
 */
export function useDebouncedValue<T>(value: T, delayMs = 350): T {
  const [debounced, setDebounced] = useState<T>(value)

  useEffect(() => {
    const handle = setTimeout(() => setDebounced(value), delayMs)
    return () => clearTimeout(handle)
  }, [value, delayMs])

  return debounced
}
