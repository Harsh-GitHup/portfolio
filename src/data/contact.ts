export type ContactItem = {
    id: 'email' | 'phone' | 'location'
    label: string
    value: string
    link?: string | null
}

export const contactInfo: ContactItem[] = [
    {
        id: 'email',
        label: 'Email',
        value: 'harsh.dev@example.com',
        link: 'mailto:harsh.dev@example.com',
    },
    {
        id: 'phone',
        label: 'Phone',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
    },
    {
        id: 'location',
        label: 'Location',
        value: 'San Francisco, CA',
        link: null,
    },
]