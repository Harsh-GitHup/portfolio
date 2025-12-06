import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders social links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
