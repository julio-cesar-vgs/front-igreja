import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConferenciaScreen } from './conferencia-screen'

describe('ConferenciaScreen', () => {
  const defaultProps = {
    onBack: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByText('Conferência Financeira')).toBeInTheDocument()
  })

  it('displays the header with title', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByText('Conferência Financeira')).toBeInTheDocument()
  })

  it('displays calculated values section', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByText('Valores Calculados')).toBeInTheDocument()
    expect(screen.getByText('Dízimos')).toBeInTheDocument()
    expect(screen.getByText('Ofertas')).toBeInTheDocument()
    // "Total Calculado" appears both in the values section and the details section
    const totalCalcElements = screen.getAllByText('Total Calculado')
    expect(totalCalcElements.length).toBeGreaterThanOrEqual(1)
  })

  it('shows currency formatted values', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    // R$ 12.450,50 for dizimos (pt-BR formatting)
    expect(screen.getByText(/R\$\s*12\.450,50/)).toBeInTheDocument()
    // R$ 3.200,00 for ofertas
    expect(screen.getByText(/R\$\s*3\.200,00/)).toBeInTheDocument()
  })

  it('shows "Conferência OK" when value matches total', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    // Default value is 15650.50 which matches the total
    expect(screen.getByText('Conferência OK')).toBeInTheDocument()
    expect(screen.getByText('Os valores conferem perfeitamente.')).toBeInTheDocument()
  })

  it('shows "Confirmar" button when values match', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByText('Confirmar')).toBeInTheDocument()
  })

  it('shows divergence when value does not match', async () => {
    const user = userEvent.setup()
    render(<ConferenciaScreen {...defaultProps} />)
    
    const input = screen.getByPlaceholderText('0,00')
    await user.clear(input)
    await user.type(input, '10000')
    
    expect(screen.getByText('Divergência Detectada')).toBeInTheDocument()
    expect(screen.getByText('Conferir Mesmo Assim')).toBeInTheDocument()
  })

  it('displays the input field for valor conferido', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByPlaceholderText('0,00')).toBeInTheDocument()
    expect(screen.getByText(/Valor Conferido/)).toBeInTheDocument()
  })

  it('displays observations textarea', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByText(/Observações/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Faltaram alguns trocados/)).toBeInTheDocument()
  })

  it('calls onBack when back button is clicked', async () => {
    const user = userEvent.setup()
    render(<ConferenciaScreen {...defaultProps} />)
    
    // The cancel button also calls onBack
    const cancelBtn = screen.getByText('Cancelar')
    await user.click(cancelBtn)
    expect(defaultProps.onBack).toHaveBeenCalledTimes(1)
  })

  it('shows the conference details section', () => {
    render(<ConferenciaScreen {...defaultProps} />)
    expect(screen.getByText('Detalhes da Conferência')).toBeInTheDocument()
    expect(screen.getByText('Total Conferido')).toBeInTheDocument()
  })

  it('shows falta/excesso label when divergent', async () => {
    const user = userEvent.setup()
    render(<ConferenciaScreen {...defaultProps} />)
    
    const input = screen.getByPlaceholderText('0,00')
    await user.clear(input)
    await user.type(input, '20000')

    // valor > total → "Excesso"
    expect(screen.getByText('Excesso')).toBeInTheDocument()
  })
})
