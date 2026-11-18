import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CultoDetalheScreen } from './culto-detalhe-screen'

describe('CultoDetalheScreen', () => {
  const defaultProps = {
    onBack: vi.fn(),
    onNavigate: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByText('O Poder da Oracao')).toBeInTheDocument()
  })

  it('displays the header with theme and date', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByText('O Poder da Oracao')).toBeInTheDocument()
    expect(screen.getByText('13/04/2026 19:00')).toBeInTheDocument()
  })

  it('shows the "Em Andamento" badge', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByText('Em Andamento')).toBeInTheDocument()
  })

  it('displays summary cards with counts', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByText('89')).toBeInTheDocument()
    const pessoasElements = screen.getAllByText('Pessoas')
    expect(pessoasElements.length).toBeGreaterThanOrEqual(1)
    // "Dizimos" and "Ofertas" may appear in both summary cards and tab content
    const dizimosElements = screen.getAllByText('Dizimos')
    expect(dizimosElements.length).toBeGreaterThanOrEqual(1)
    const ofertasElements = screen.getAllByText('Ofertas')
    expect(ofertasElements.length).toBeGreaterThanOrEqual(1)
  })

  it('shows all tab triggers', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByRole('tab', { name: 'Resumo' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Louvores' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Pessoas' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Financeiro' })).toBeInTheDocument()
  })

  it('shows the resumo tab content by default', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByText('Palavra Inicial')).toBeInTheDocument()
    expect(screen.getByText('Pr. Joao Silva')).toBeInTheDocument()
    expect(screen.getByText('Palavra Final')).toBeInTheDocument()
    expect(screen.getByText('Ev. Maria Santos')).toBeInTheDocument()
  })

  it('shows conferencia pending status in resumo tab', () => {
    render(<CultoDetalheScreen {...defaultProps} />)
    expect(screen.getByText('Conferencia')).toBeInTheDocument()
    expect(screen.getByText('Pendente')).toBeInTheDocument()
    expect(screen.getByText('Conferir')).toBeInTheDocument()
  })

  it('switches to louvores tab and shows content', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    await user.click(screen.getByRole('tab', { name: 'Louvores' }))
    
    expect(screen.getByText('Adicionar Louvor')).toBeInTheDocument()
    expect(screen.getByText('Ana Paula')).toBeInTheDocument()
    expect(screen.getByText('Grande e o Senhor')).toBeInTheDocument()
    expect(screen.getByText('Carlos Eduardo')).toBeInTheDocument()
    expect(screen.getByText('Quao Grande es Tu')).toBeInTheDocument()
  })

  it('switches to pessoas tab and shows cooperadores and visitantes', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    await user.click(screen.getByRole('tab', { name: 'Pessoas' }))
    
    expect(screen.getByText('Cooperadores')).toBeInTheDocument()
    expect(screen.getByText('Jose Carlos')).toBeInTheDocument()
    expect(screen.getByText('Porteiro')).toBeInTheDocument()
    expect(screen.getByText('Visitantes')).toBeInTheDocument()
    expect(screen.getByText('Roberto Lima')).toBeInTheDocument()
    expect(screen.getByText('(11) 99999-0001')).toBeInTheDocument()
  })

  it('switches to financeiro tab and shows financial data', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    await user.click(screen.getByRole('tab', { name: 'Financeiro' }))
    
    expect(screen.getByText('Total Dizimos')).toBeInTheDocument()
    expect(screen.getByText('Total Ofertas')).toBeInTheDocument()
    expect(screen.getByText('Registrar Dizimo')).toBeInTheDocument()
    expect(screen.getByText('Registrar Oferta')).toBeInTheDocument()
    expect(screen.getByText('Total Geral')).toBeInTheDocument()
  })

  it('calls onBack when back button is clicked', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    // The back button is the first button in the header
    const backButton = screen.getByRole('button', { name: 'Voltar' })
    await user.click(backButton)
    expect(defaultProps.onBack).toHaveBeenCalledTimes(1)
  })

  it('calls onNavigate with "conferencia" when Conferir button is clicked', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    await user.click(screen.getByText('Conferir'))
    expect(defaultProps.onNavigate).toHaveBeenCalledWith('conferencia')
  })

  it('calls onNavigate with "adicionar-louvor" when Adicionar Louvor is clicked', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    await user.click(screen.getByRole('tab', { name: 'Louvores' }))
    await user.click(screen.getByText('Adicionar Louvor'))
    expect(defaultProps.onNavigate).toHaveBeenCalledWith('adicionar-louvor')
  })

  it('calls onNavigate with "registrar-dizimo" from financeiro tab', async () => {
    const user = userEvent.setup()
    render(<CultoDetalheScreen {...defaultProps} />)
    
    await user.click(screen.getByRole('tab', { name: 'Financeiro' }))
    await user.click(screen.getByText('Registrar Dizimo'))
    expect(defaultProps.onNavigate).toHaveBeenCalledWith('registrar-dizimo')
  })
})
