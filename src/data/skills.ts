export type Skill = { name: string; level: number }
export type SkillCategory = {
  id: 'backend' | 'database' | 'devops' | 'architecture' | 'frontend' | 'tools'
  title: string
  iconId: 'server' | 'database' | 'cloud' | 'brain' | 'code' | 'wrench'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Frameworks & Runtime',
    iconId: 'server',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 92 },
      { name: 'Django / DRF', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Node.js & Express', level: 85 },
      { name: 'RESTful API Design', level: 95 },
      { name: 'WebSockets & Socket.io', level: 85 },
      { name: 'Microservices Architecture', level: 88 },
    ],
  },
  {
    id: 'database',
    title: 'Databases & In-Memory Caching',
    iconId: 'database',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis (Caching & Pub/Sub)', level: 92 },
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQLAlchemy / ORM', level: 90 },
      { name: 'Database Indexing & Queries', level: 88 },
      { name: 'Connection Pooling', level: 85 },
      { name: 'Data Migrations (Alembic)', level: 85 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps, Cloud & Infrastructure',
    iconId: 'cloud',
    skills: [
      { name: 'Docker & Docker Compose', level: 90 },
      { name: 'Linux / Bash Scripting', level: 88 },
      { name: 'Nginx Reverse Proxy', level: 82 },
      { name: 'CI/CD (GitHub Actions)', level: 85 },
      { name: 'Celery Task Workers', level: 85 },
      { name: 'Environment Governance', level: 90 },
    ],
  },
  {
    id: 'architecture',
    title: 'Security, Testing & Architecture',
    iconId: 'brain',
    skills: [
      { name: 'JWT & OAuth2 Authentication', level: 92 },
      { name: 'Bcrypt Password Hashing', level: 95 },
      { name: 'Rate Limiting & CORS', level: 90 },
      { name: 'Unit Testing (Vitest / PyTest)', level: 88 },
      { name: 'OpenAPI / Swagger Docs', level: 95 },
      { name: 'Async Event Loops', level: 88 },
    ],
  },
  {
    id: 'frontend',
    title: 'Supporting Full-Stack & UI',
    iconId: 'code',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Angular', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
]
