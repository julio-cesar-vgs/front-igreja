import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDebouncedValue } from './use-debounced-value'

describe('useDebouncedValue', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('atrasa a atualização do valor até o término do intervalo de debounce', () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(
      ({ val }) => useDebouncedValue(val, 350),
      { initialProps: { val: '' } },
    )

    expect(result.current).toBe('')
    rerender({ val: 'J' })
    rerender({ val: 'Jo' })
    rerender({ val: 'João' })

    act(() => { vi.advanceTimersByTime(300) })
    expect(result.current).toBe('')

    act(() => { vi.advanceTimersByTime(50) })
    expect(result.current).toBe('João')
  })
})
