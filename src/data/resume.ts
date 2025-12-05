export type Experience = {
    title: string
    company: string
    location: string
    period: string
    type: string
    description: string
    achievements: string[]
}

export type Education = {
    degree: string
    institution: string
    location: string
    period: string
    details: string
    courses: string[]
}

export type Certification = {
    name: string
    issuer: string
    date: string
    credential: string
}

export const experience: Experience[] = [
    {
        title: 'Senior Full-Stack Developer',
        company: 'TechCorp Solutions',
        location: 'San Francisco, CA',
        period: '2022 - Present',
        type: 'Full-time',
        description:
            'Lead development of scalable web applications using Python, Django, and React. Mentored junior developers and implemented CI/CD pipelines.',
        achievements: [
            'Reduced application load time by 40% through optimization',
            'Led team of 5 developers on microservices architecture',
            'Implemented automated testing, increasing code coverage to 90%',
            'Designed and deployed cloud infrastructure on AWS',
        ],
    },
    {
        title: 'Python Developer',
        company: 'StartupXYZ',
        location: 'Remote',
        period: '2021 - 2022',
        type: 'Full-time',
        description:
            'Developed RESTful APIs and web applications using FastAPI and React. Worked closely with product team to implement new features.',
        achievements: [
            'Built high-performance APIs handling 10k+ requests/minute',
            'Integrated third-party services and payment gateways',
            'Collaborated with UI/UX team on responsive designs',
            'Maintained 99.9% uptime for production applications',
        ],
    },
    {
        title: 'Junior Full-Stack Developer',
        company: 'WebDev Agency',
        location: 'New York, NY',
        period: '2020 - 2021',
        type: 'Full-time',
        description:
            'Created custom websites and web applications for clients using various technologies including Django, Flask, and JavaScript frameworks.',
        achievements: [
            'Delivered 15+ successful client projects',
            'Improved development workflow with automated deployment',
            'Learned advanced Python patterns and best practices',
            'Contributed to open-source projects',
        ],
    },
]

export const education: Education[] = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        location: 'California',
        period: '2016 - 2020',
        details:
            'Graduated Magna Cum Laude with focus on Software Engineering and Data Structures',
        courses: [
            'Data Structures & Algorithms',
            'Database Systems',
            'Software Engineering',
            'Web Development',
        ],
    },
]

export const certifications: Certification[] = [
    {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2023',
        credential: 'SAA-C03',
    },
    {
        name: 'Professional Scrum Master I',
        issuer: 'Scrum.org',
        date: '2022',
        credential: 'PSM-I',
    },
    {
        name: 'Python Institute PCPP',
        issuer: 'Python Institute',
        date: '2021',
        credential: 'PCPP-32-101',
    },
]
