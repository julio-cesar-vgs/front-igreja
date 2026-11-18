import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BottomNavigation } from './bottom-navigation'
import { DashboardScreen } from './screens/dashboard-screen'
import { CultoDetalheScreen } from './screens/culto-detalhe-screen'
import { MembrosScreen } from './screens/membros-screen'
import { MembroDetalheScreen } from './screens/membro-detalhe-screen'
import { FinanceiroScreen } from './screens/financeiro-screen'
import { ConferenciaScreen } from './screens/conferencia-screen'

/**
 * Garante que todos os botões renderizados em tela tenham nome acessível
 * (texto visível, aria-label ou title), requisito essencial para WCAG 2.2 AA e leitores de tela.
 */
function assertAllButtonsHaveAccessibleName(container: HTMLElement) {
  const buttons = container.querySelectorAll('button')
  buttons.forEach((btn) => {
    const label = btn.getAttribute('aria-label') || btn.getAttribute('title') || btn.textContent?.trim()
    expect(label, `Botão sem nome acessível encontrado: ${btn.outerHTML}`).toBeTruthy()
  })
}

describe('Acessibilidade WCAG 2.2 AA — Telas do Protótipo', () => {
  it('BottomNavigation marca rota ativa com aria-current="page" e rótulos acessíveis', () => {
    const { container } = render(
      <BottomNavigation activeTab="cultos" onTabChange={vi.fn()} />
    )
    expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cultos' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Inicio' })).not.toHaveAttribute('aria-current')
    assertAllButtonsHaveAccessibleName(container)
  })

  it('DashboardScreen possui botão de notificações e cards interativos acessíveis por teclado', () => {
    const { container } = render(<DashboardScreen onNavigate={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Notificações' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Abrir lista de Membros Ativos' })).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('button', { name: 'Abrir módulo Financeiro' })).toHaveAttribute('tabindex', '0')
    assertAllButtonsHaveAccessibleName(container)
  })

  it('CultoDetalheScreen possui botão de voltar acessível', () => {
    const { container } = render(<CultoDetalheScreen onBack={vi.fn()} onNavigate={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument()
    assertAllButtonsHaveAccessibleName(container)
  })

  it('MembrosScreen possui botão de filtro, FAB acessível e cards operáveis por teclado', () => {
    const { container } = render(<MembrosScreen onNavigate={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Filtrar membros' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Novo membro' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Abrir perfil de João Silva' })).toHaveAttribute('tabindex', '0')
    assertAllButtonsHaveAccessibleName(container)
  })

  it('MembroDetalheScreen possui botões de voltar e favoritar acessíveis', () => {
    const { container } = render(<MembroDetalheScreen onBack={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Favoritar membro' })).toBeInTheDocument()
    assertAllButtonsHaveAccessibleName(container)
  })

  it('FinanceiroScreen possui botão de privacidade acessível', () => {
    const { container } = render(<FinanceiroScreen onNavigate={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Ocultar valores financeiros' })).toBeInTheDocument()
    assertAllButtonsHaveAccessibleName(container)
  })

  it('ConferenciaScreen possui botão de voltar acessível', () => {
    const { container } = render(<ConferenciaScreen onBack={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument()
    assertAllButtonsHaveAccessibleName(container)
  })
})
