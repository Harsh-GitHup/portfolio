import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Resume from '@/components/Resume'

describe('Resume', () => {
  it('renders resume sections', async () => {
    render(<Resume />)
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /resume/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /professional experience/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /certifications/i })).toBeInTheDocument()
    })
  })
})
