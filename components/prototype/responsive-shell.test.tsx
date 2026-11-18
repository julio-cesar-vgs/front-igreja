import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ResponsiveShell } from './responsive-shell'

describe('ResponsiveShell — layout multiplataforma e status offline', () => {
  it('renderiza navegação desktop e permite alternar entre visualização Responsivo e Mobile (375px)', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    const onTab = vi.fn()

    render(
      <ResponsiveShell
        activeTab="cultos"
        onTabChange={onTab}
        previewMode="responsive"
        onTogglePreviewMode={onToggle}
      >
        <div>Conteúdo principal</div>
      </ResponsiveShell>,
    )

    expect(screen.getByRole('complementary', { name: 'Menu lateral desktop' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Responsivo/i })).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: /Mobile \(375px\)/i }))
    expect(onToggle).toHaveBeenCalledWith('mobile-frame')
  })

  it('exibe banner de aviso quando o navegador reporta estado offline', () => {
    Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: false })

    render(
      <ResponsiveShell
        activeTab="home"
        onTabChange={vi.fn()}
        previewMode="mobile-frame"
        onTogglePreviewMode={vi.fn()}
      >
        <div>Conteúdo</div>
      </ResponsiveShell>,
    )

    expect(screen.getByRole('status')).toHaveTextContent(/Sem conexão com a internet/i)
    Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: true })
  })
})
