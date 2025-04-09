import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
  it('renders a subheading', () => {
    render(<Hero / >)

    const subheading = screen.getByText(/You're on a mission to build exceptional tech teams/i);
    expect(subheading).toBeInTheDocument();
  })
  it('renders a CTA button', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('button', {name: /Start now/i })
    expect(ctaButton).toBeInTheDocument();  
})
  it('renders a hero visual image', () => {
    render(<Hero />);
    const heroVisual = screen.getByTestId('image')
    expect(heroVisual).toBeInTheDocument();
  })
})
