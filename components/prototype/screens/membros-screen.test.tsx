import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MembrosScreen } from './membros-screen'

describe('MembrosScreen', () => {
  const defaultProps = {
    onNavigate: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<MembrosScreen {...defaultProps} />)
    expect(screen.getByText('Membros')).toBeInTheDocument()
  })

  it('displays the header', () => {
    render(<MembrosScreen {...defaultProps} />)
    expect(screen.getByText('Membros')).toBeInTheDocument()
  })

  it('shows search input', () => {
    render(<MembrosScreen {...defaultProps} />)
    expect(screen.getByPlaceholderText('Buscar membro...')).toBeInTheDocument()
  })

  it('displays filter buttons', () => {
    render(<MembrosScreen {...defaultProps} />)
    expect(screen.getByText('Todos')).toBeInTheDocument()
    expect(screen.getByText('Ativos')).toBeInTheDocument()
    expect(screen.getByText('Inativos')).toBeInTheDocument()
  })

  it('shows all members by default', () => {
    render(<MembrosScreen {...defaultProps} />)
    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('Pedro Oliveira')).toBeInTheDocument()
    expect(screen.getByText('Ana Costa')).toBeInTheDocument()
    expect(screen.getByText('Carlos Gomes')).toBeInTheDocument()
  })

  it('shows member status badges', () => {
    render(<MembrosScreen {...defaultProps} />)
    // 4 active + 1 inactive
    const ativoLabels = screen.getAllByText('Ativo')
    expect(ativoLabels.length).toBe(4)
    const inativoLabels = screen.getAllByText('Inativo')
    expect(inativoLabels.length).toBe(1)
  })

  it('shows phone numbers', () => {
    render(<MembrosScreen {...defaultProps} />)
    expect(screen.getByText('(11) 98765-4321')).toBeInTheDocument()
    expect(screen.getByText('(11) 98765-4323')).toBeInTheDocument()
  })

  it('filters members by search term', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText('Buscar membro...')
    await user.type(searchInput, 'João')
    
    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.queryByText('Maria Santos')).not.toBeInTheDocument()
    expect(screen.queryByText('Pedro Oliveira')).not.toBeInTheDocument()
  })

  it('filters members by status - Ativos', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    await user.click(screen.getByText('Ativos'))
    
    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.queryByText('Pedro Oliveira')).not.toBeInTheDocument() // INATIVO
  })

  it('filters members by status - Inativos', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    await user.click(screen.getByText('Inativos'))
    
    expect(screen.getByText('Pedro Oliveira')).toBeInTheDocument()
    expect(screen.queryByText('João Silva')).not.toBeInTheDocument()
    expect(screen.queryByText('Maria Santos')).not.toBeInTheDocument()
  })

  it('shows empty state when no members match', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText('Buscar membro...')
    await user.type(searchInput, 'xyz123nonexistent')
    
    expect(screen.getByText('Nenhum membro encontrado')).toBeInTheDocument()
    expect(screen.getByText('Tente outro termo de busca')).toBeInTheDocument()
  })

  it('combines search and filter', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    // Filter by inactive first
    await user.click(screen.getByText('Inativos'))
    // Then search
    const searchInput = screen.getByPlaceholderText('Buscar membro...')
    await user.type(searchInput, 'Pedro')
    
    expect(screen.getByText('Pedro Oliveira')).toBeInTheDocument()
  })

  it('calls onNavigate when a member card is clicked', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    await user.click(screen.getByText('João Silva'))
    expect(defaultProps.onNavigate).toHaveBeenCalledWith('membro-detalhe')
  })

  it('renders without onNavigate prop', () => {
    render(<MembrosScreen />)
    expect(screen.getByText('Membros')).toBeInTheDocument()
  })

  it('search is case-insensitive', async () => {
    const user = userEvent.setup()
    render(<MembrosScreen {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText('Buscar membro...')
    await user.type(searchInput, 'joão')
    
    expect(screen.getByText('João Silva')).toBeInTheDocument()
  })
})
