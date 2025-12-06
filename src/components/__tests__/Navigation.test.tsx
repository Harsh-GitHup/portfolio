import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Navigation from '@/components/Navigation'

describe('Navigation', () => {
  it('renders site nav links', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    // common sections (buttons used for smooth scroll)
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument()
  })
})
