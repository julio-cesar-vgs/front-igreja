import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FinanceiroScreen } from './financeiro-screen'

describe('FinanceiroScreen', () => {
  const defaultProps = {
    onNavigate: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('Financeiro')).toBeInTheDocument()
  })

  it('displays the header', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('Financeiro')).toBeInTheDocument()
    expect(screen.getByText(/Última conferência/)).toBeInTheDocument()
  })

  it('shows currency values when showValues is true (default)', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    // Values appear in multiple places (summary cards + Total Recebido breakdown)
    const dizimosValues = screen.getAllByText(/R\$\s*12\.450,50/)
    expect(dizimosValues.length).toBeGreaterThanOrEqual(1)
    const ofertasValues = screen.getAllByText(/R\$\s*3\.200,00/)
    expect(ofertasValues.length).toBeGreaterThanOrEqual(1)
  })

  it('shows total recebido', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('Total Recebido')).toBeInTheDocument()
    // 12450.50 + 3200.00 = 15650.50
    expect(screen.getByText(/R\$\s*15\.650,50/)).toBeInTheDocument()
  })

  it('hides values when eye icon is clicked', async () => {
    const user = userEvent.setup()
    render(<FinanceiroScreen {...defaultProps} />)
    
    // Find the eye toggle button (the button in the header next to title)
    const toggleButtons = screen.getAllByRole('button')
    // The eye toggle is the first button in the header area
    const eyeToggle = toggleButtons[0]
    await user.click(eyeToggle)
    
    // Values should be masked
    const maskedValues = screen.getAllByText('••••••••')
    expect(maskedValues.length).toBeGreaterThan(0)
  })

  it('displays action buttons', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('Adicionar Dizimo')).toBeInTheDocument()
    expect(screen.getByText('Adicionar Oferta')).toBeInTheDocument()
  })

  it('shows recent transactions heading', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('Transações Recentes')).toBeInTheDocument()
  })

  it('displays recent transactions', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('Oferta - Ação Social')).toBeInTheDocument()
    expect(screen.getByText('Oferta - Missões')).toBeInTheDocument()
  })

  it('displays payment methods for transactions', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText(/PIX/)).toBeInTheDocument()
    expect(screen.getByText(/DINHEIRO/)).toBeInTheDocument()
    expect(screen.getByText(/TRANSFERENCIA/)).toBeInTheDocument()
    expect(screen.getByText(/CARTAO DEBITO/)).toBeInTheDocument()
  })

  it('shows trend indicators', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('+12.5% este mês')).toBeInTheDocument()
    expect(screen.getByText('+5.2% este mês')).toBeInTheDocument()
  })

  it('displays Conferir Financeiro button', () => {
    render(<FinanceiroScreen {...defaultProps} />)
    expect(screen.getByText('Conferir Financeiro')).toBeInTheDocument()
  })

  it('calls onNavigate with "conferencia" when Conferir Financeiro is clicked', async () => {
    const user = userEvent.setup()
    render(<FinanceiroScreen {...defaultProps} />)
    
    await user.click(screen.getByText('Conferir Financeiro'))
    expect(defaultProps.onNavigate).toHaveBeenCalledWith('conferencia')
  })

  it('renders without onNavigate prop', () => {
    render(<FinanceiroScreen />)
    expect(screen.getByText('Financeiro')).toBeInTheDocument()
  })
})
