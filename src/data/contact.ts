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
        value: 'harshkesharwani037@gmail.com',
        link: 'mailto:harshkesharwani037@gmail.com',
    },
    {
        id: 'phone', 
        label: 'Phone',
        value: '+917987024525',
        link: 'tel:+917987024525',
    },
    {
        id: 'location',
        label: 'Location',
        value: 'Sagar, Madhya Pradesh, INDIA',
        link: null,
    },
]