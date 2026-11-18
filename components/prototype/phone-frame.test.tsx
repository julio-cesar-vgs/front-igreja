import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhoneFrame } from './phone-frame'

describe('PhoneFrame', () => {
  it('renders children', () => {
    render(
      <PhoneFrame>
        <div data-testid="child">Hello</div>
      </PhoneFrame>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('shows the status bar by default', () => {
    render(
      <PhoneFrame>
        <div>Content</div>
      </PhoneFrame>
    )
    // The status bar shows "9:41"
    expect(screen.getByText('9:41')).toBeInTheDocument()
  })

  it('hides the status bar when showStatusBar is false', () => {
    render(
      <PhoneFrame showStatusBar={false}>
        <div>Content</div>
      </PhoneFrame>
    )
    expect(screen.queryByText('9:41')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <PhoneFrame className="custom-class">
        <div>Content</div>
      </PhoneFrame>
    )
    // The root div should contain the custom class
    const rootDiv = container.firstChild as HTMLElement
    expect(rootDiv.className).toContain('custom-class')
  })

  it('renders the notch element', () => {
    const { container } = render(
      <PhoneFrame>
        <div>Content</div>
      </PhoneFrame>
    )
    // The phone frame should have the rounded frame styling
    const rootDiv = container.firstChild as HTMLElement
    expect(rootDiv.className).toContain('rounded-[3rem]')
  })

  it('renders the home indicator', () => {
    const { container } = render(
      <PhoneFrame>
        <div>Content</div>
      </PhoneFrame>
    )
    // Find the home indicator bar (w-32 h-1 rounded-full at the bottom)
    const rootDiv = container.firstChild as HTMLElement
    const homeIndicator = rootDiv.querySelector('.rounded-full')
    expect(homeIndicator).toBeInTheDocument()
  })
})
