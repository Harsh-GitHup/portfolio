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
      'A scalable e-commerce backend API built with FastAPI and PostgreSQL. Features include user authentication, product management, order processing, and payment integration.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'JWT'],
    category: 'backend',
    liveUrl: 'https://demo-ecommerce-api.com',
    githubUrl: 'https://github.com/harsh/ecommerce-api',
    highlights: [
      'RESTful API with 50+ endpoints',
      'JWT-based authentication',
      'Real-time inventory management',
      'Stripe payment integration',
    ],
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description:
      'A modern task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    image: '/images/projects/task-dashboard.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'WebSocket'],
    category: 'fullstack',
    liveUrl: 'https://taskmaster-pro.vercel.app',
    githubUrl: 'https://github.com/harsh/task-manager',
    highlights: ['Real-time collaboration', 'Drag & drop interface', 'Advanced filtering & search', 'Mobile responsive design'],
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description:
      'Interactive dashboard for data visualization and analytics with Python backend processing and React frontend for dynamic charts and reports.',
    image: '/images/projects/analytics.jpg',
    technologies: ['Python', 'Django', 'Pandas', 'React', 'D3.js', 'PostgreSQL'],
    category: 'data',
    liveUrl: 'https://analytics-dashboard-demo.com',
    githubUrl: 'https://github.com/harsh/analytics-dashboard',
    highlights: ['Interactive data visualization', 'Real-time data processing', 'Custom report generation', 'Multi-tenant architecture'],
  },
  {
    id: 4,
    title: 'Social Media Frontend',
    description:
      'Modern social media application frontend with infinite scroll, real-time messaging, and responsive design built with React and TypeScript.',
    image: '/images/projects/social.jpg',
    technologies: ['React', 'TypeScript', 'Redux', 'Socket.io', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://social-app-demo.netlify.app',
    githubUrl: 'https://github.com/harsh/social-frontend',
    highlights: ['Infinite scroll feed', 'Real-time messaging', 'Image/video upload', 'Progressive Web App'],
  },
  {
    id: 5,
    title: 'AI Chatbot Service',
    description:
      'Intelligent chatbot service using natural language processing, built with Python, integrated with multiple messaging platforms and custom training capabilities.',
    image: '/images/projects/chatbot.jpg',
    technologies: ['Python', 'NLP', 'TensorFlow', 'Flask', 'MongoDB', 'WebSocket'],
    category: 'ai',
    liveUrl: 'https://chatbot-service-demo.com',
    githubUrl: 'https://github.com/harsh/ai-chatbot',
    highlights: ['Natural language processing', 'Multi-platform integration', 'Custom model training', 'Analytics dashboard'],
  },
  {
    id: 6,
    title: 'DevOps Monitoring Tool',
    description:
      'Comprehensive monitoring and alerting system for DevOps teams with custom dashboards, automated deployments, and performance tracking.',
    image: '/images/projects/devops.jpg',
    technologies: ['Python', 'Django', 'Docker', 'Kubernetes', 'Grafana', 'Prometheus'],
    category: 'devops',
    liveUrl: 'https://devops-monitor-demo.com',
    githubUrl: 'https://github.com/harsh/devops-monitor',
    highlights: ['Real-time system monitoring', 'Automated alerting', 'Custom dashboards', 'CI/CD integration'],
  },
]

export const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'devops', label: 'DevOps' },
]
