import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('shows validation errors returned from server', async () => {
    const mockFetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      json: async () => ({
        ok: false,
        errors: {
          fieldErrors: { name: ['Name is required'], email: ['Invalid email'] },
          formErrors: ['Please correct the errors']
        }
      })
    } as unknown as Response)

    render(<Contact />)
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form') as HTMLFormElement)

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
      expect(screen.getByText(/please correct the errors/i)).toBeInTheDocument()
    })

    mockFetch.mockRestore()
  })
})
