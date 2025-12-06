import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Skills from '@/components/Skills'

describe('Skills', () => {
    it('renders Skills section heading and at least one skill', async () => {
        render(<Skills />)
        expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
        await waitFor(() => {
            const badges = screen.getAllByText(/python|react|next|django|fastapi/i)
            expect(badges.length).toBeGreaterThan(0)
        })
    })
})
