import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import About from '@/components/About'
import { highlights } from '@/data/about'

describe('About', () => {
  it('renders About section heading and highlights', async () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    // Ensure at least one highlight card renders by checking a known title
    const sampleTitle = highlights[0]?.title || /problem/i
    await screen.findByText(sampleTitle)
  })
})
