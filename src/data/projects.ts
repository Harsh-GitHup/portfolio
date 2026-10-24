export type Project = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'backend' | 'frontend' | 'fullstack' | 'data' | 'ai' | 'devops'
  liveUrl: string
  githubUrl: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce API Platform',
    description:
      'A scalable e-commerce backend API built with FastAPI and PostgreSQL. Features include user authentication, product catalog management, order processing with transactions, and Stripe payment integration.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Stripe'],
    category: 'backend',
    liveUrl: 'https://demo-ecommerce-api.com',
    githubUrl: 'https://github.com/Harsh-GitHup/ecommerce-api',
    highlights: [
      'RESTful API with 50+ endpoints & OpenAPI documentation',
      'Cryptographic JWT authentication & role-based access control',
      'Redis in-memory caching layer achieving 95%+ cache hit rate',
      'Atomic database transactions for order processing & inventory',
    ],
  },
  {
    id: 2,
    title: 'Team Task Manager Backend & WebSockets',
    description:
      'A real-time backend service powering collaborative task management with Socket.io WebSockets, Node.js Express REST endpoints, and normalized MySQL relational persistence.',
    image: '/images/projects/task-dashboard.jpg',
    technologies: ['Node.js', 'Express', 'Socket.io', 'MySQL', 'WebSockets', 'JWT'],
    category: 'backend',
    liveUrl: 'https://team-task-manager-frontend-pi.vercel.app',
    githubUrl: 'https://github.com/Harsh-GitHup/team-task-manager-backend',
    highlights: [
      'Duplex real-time synchronization via Socket.io channels',
      'Normalized relational MySQL database architecture with foreign keys',
      'Room-based Pub/Sub broadcasting for instant card state updates',
      'CORS & secure JWT authentication session middleware',
    ],
  },
  {
    id: 3,
    title: 'AI Career Intelligence Engine',
    description:
      'Intelligent career platform backend built with Django REST Framework, asynchronous Celery queues, Redis broker, and Google Gemini API integration for automated resume scoring.',
    image: '/images/projects/chatbot.jpg',
    technologies: ['Python', 'Django', 'Django REST Framework', 'Gemini API', 'Celery', 'Redis'],
    category: 'ai',
    liveUrl: 'https://demo-career-intelligence.com',
    githubUrl: 'https://github.com/Harsh-GitHup/AI-Career_Portal',
    highlights: [
      'Asynchronous task workers with Celery & Redis for LLM generation',
      'Automated resume skill gap analysis and scoring algorithms',
      'Scalable REST endpoints supporting voice mock interview analysis',
      'Token-bucket rate limiting for AI API cost governance',
    ],
  },
  {
    id: 4,
    title: 'Flask Portfolio Web App & API',
    description:
      'A robust full-stack personal portfolio and contact processing application built with Python Flask, SQLAlchemy ORM, and SQLite database storage.',
    image: '/images/projects/devops.jpg',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Jinja2', 'REST APIs'],
    category: 'fullstack',
    liveUrl: 'https://flask-portfolio-demo.com',
    githubUrl: 'https://github.com/Harsh-GitHup/flask-portfolio',
    highlights: [
      'Dynamic project showcase with SQLite relational persistence',
      'SQLAlchemy ORM models & automated database migrations',
      'Automated contact form dispatch & backend payload sanitization',
      'Lightweight WSGI production architecture',
    ],
  },
  {
    id: 5,
    title: 'Python Automated File Organizer',
    description:
      'A system-level background automation daemon built in Python that monitors filesystem events and categorizes files into structured directory schemas based on metadata and MIME types.',
    image: '/images/projects/devops.jpg',
    technologies: ['Python', 'OS API', 'Watchdog', 'Automation', 'CLI'],
    category: 'devops',
    liveUrl: '#',
    githubUrl: 'https://github.com/Harsh-GitHup/file-organizer',
    highlights: [
      'Real-time filesystem monitoring using the Watchdog daemon',
      'Custom rule-based file extension sorting & archive management',
      'Robust error handling with rotating file-based logging',
      'Portable cross-platform CLI tool for Windows & Linux environments',
    ],
  },
  {
    id: 6,
    title: 'Campus Placement ML Prediction Service',
    description:
      'A predictive machine learning service utilizing Scikit-learn and Python to analyze historical placement datasets and forecast student career outcomes with 70% accuracy.',
    image: '/images/projects/analytics.jpg',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Flask API'],
    category: 'data',
    liveUrl: 'https://drive.google.com/file/d/1Z9OWd9YMUzs53Qd30eq3RlkDbjOQ3Je4/view?usp=share_link',
    githubUrl: 'https://github.com/Harsh-GitHup/Engineering_placement_prediction',
    highlights: [
      'Engineered machine learning classification model with 70% accuracy',
      'Isolated top 5 key placement factors through feature importance scoring',
      'REST endpoint delivering real-time placement probability predictions',
      'Presented solution to IBM mentors during Hack Challenge 2023',
    ],
  },
]

export const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'backend', label: 'Backend APIs' },
  { id: 'ai', label: 'AI & Services' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'devops', label: 'DevOps & CLI' },
  { id: 'data', label: 'Data & ML' },
]
