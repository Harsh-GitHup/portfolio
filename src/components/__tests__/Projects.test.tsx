import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import Projects from '../Projects'

// Mock next/image for tests
vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props} alt="mocked" />
    },
}))

vi.mock('@/data/projects', async () => {
    return {
        projects: [
            {
                id: 1,
                title: 'Test Project',
                description: 'Desc',
                image: '/images/projects/does-not-exist.jpg',
                technologies: ['React'],
                category: 'frontend',
                liveUrl: '#',
                githubUrl: '#',
                highlights: ['One', 'Two', 'Three'],
            },
        ],
        filters: [
            { id: 'all', label: 'All Projects' },
            { id: 'frontend', label: 'Frontend' },
        ],
    }
})

describe('Projects', () => {
    it('renders section header and filter buttons', () => {
        render(<Projects />)
        expect(screen.getByRole('heading', { level: 2, name: /My\s+Projects/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /All Projects/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Frontend/i })).toBeInTheDocument()
    })

    it('shows a project card', async () => {
        render(<Projects />)
        await waitFor(() => {
            expect(screen.getByText('Test Project')).toBeInTheDocument()
            expect(screen.getByText('Desc')).toBeInTheDocument()
        })
    })

    it('filters by category', async () => {
        render(<Projects />)
        fireEvent.click(screen.getByRole('button', { name: /Frontend/i }))
        await waitFor(() => {
            expect(screen.getByText('Test Project')).toBeInTheDocument()
        })
    })
})
