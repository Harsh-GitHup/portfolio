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
        title: 'Python Developer & Automation Engineer',
        company: 'Software Engineering & Open-Source Projects',
        location: 'Sagar, MP (Open to Relocate / Remote)',
        period: '2023 - Present',
        type: 'Projects & Production',
        description:
            'Engineered desktop automation applications, database-driven workflows, and voice-assisted systems in Python, integrating core logic with relational databases to solve real-world operational challenges.',
        achievements: [
            'Built File Organizer desktop application utilizing OS and Shutil modules to categorize files by type, reducing manual organization time by 40%',
            'Engineered Voice Assistant app using speech recognition and pyttsx3 for voice-driven task automation, cutting manual input time by 40%',
            'Designed structured Library Management and ATM Management systems with OOPs principles and secure MySQL/SQLite storage',
            'Implemented comprehensive unit testing suites to ensure robust, secure, and error-free database transactions',
            'Participated in IBM Hack Challenge 2023, building a predictive ML model for student placement classification',
        ],
    },
    {
        title: 'Full Stack Python & Backend Trainee',
        company: 'Naresh i Technologies & TechSimPlus',
        location: 'Bhopal / Remote, India',
        period: '2022 - 2023',
        type: 'Certification & Apprenticeship',
        description:
            'Completed rigorous hands-on training across Core & Advanced Python, Django, Flask, MySQL, browser automation, and image processing.',
        achievements: [
            'Developed modular REST APIs with Flask and Django with relational database connectivity',
            'Built browser automation scripts and image processing pipelines using Python at TechSimPlus',
            'Automated CI/CD build checks via GitHub Actions and deployed applications to Railway and Render',
            'Completed NPTEL Online Soft Skills Training on Interview Readiness with distinction',
        ],
    },
]

export const education: Education[] = [
    {
        degree: 'B. Tech in Computer Science & Engineering',
        institution: 'Corporate Institute of Science & Technology',
        location: 'Bhopal, Madhya Pradesh',
        period: '2020 – 2024',
        details:
            'Graduated with 7.9 CGPA. Strong focus on Object-Oriented Programming (OOPs), Data Structures, Relational Database Systems, and Systems Architecture.',
        courses: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming (OOPs)',
            'Relational Database Systems (MySQL & SQLite)',
            'Operating Systems & Automation',
            'Computer Networks & Protocols',
            'Software Engineering & Unit Testing',
            'REST APIs & Web Architectures',
        ],
    },
]

export const certifications: Certification[] = [
    {
        name: 'Full Stack Python Development',
        issuer: 'Naresh i Technologies',
        date: '2023',
        credential: 'NIT-FSPD-CERT',
    },
    {
        name: 'Browser Automation & Image Processing with Python',
        issuer: 'TechSimPlus',
        date: '2023',
        credential: 'TSP-BAIP-PY',
    },
    {
        name: 'Python Fundamentals for Beginners',
        issuer: 'Udemy',
        date: '2023',
        credential: 'UDEMY-PY-FUND',
    },
    {
        name: 'Online Soft Skills Training on Interview Readiness',
        issuer: 'NPTEL',
        date: '2023',
        credential: 'NPTEL-IR-2023',
    },
]

