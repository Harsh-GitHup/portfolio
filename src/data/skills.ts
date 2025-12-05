export type Skill = { name: string; level: number }
export type SkillCategory = {
  id: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft'
  title: string
  iconId: 'code' | 'server' | 'database' | 'cloud' | 'wrench' | 'brain'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    iconId: 'code',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Redux/Zustand', level: 75 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    iconId: 'server',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'WebSockets', level: 75 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    id: 'database',
    title: 'Database & Data',
    iconId: 'database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'SQLAlchemy', level: 85 },
      { name: 'Pandas', level: 80 },
      { name: 'NumPy', level: 75 },
      { name: 'Data Analysis', level: 70 },
      { name: 'Database Design', level: 85 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    iconId: 'cloud',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'Nginx', level: 70 },
      { name: 'Monitoring', level: 65 },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    iconId: 'wrench',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'PyCharm', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Jest', level: 75 },
      { name: 'Pytest', level: 85 },
      { name: 'ESLint/Prettier', level: 80 },
      { name: 'Webpack/Vite', level: 70 },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    iconId: 'brain',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Mentoring', level: 75 },
      { name: 'Adaptability', level: 90 },
      { name: 'Critical Thinking', level: 85 },
      { name: 'Time Management', level: 85 },
    ],
  },
]

export const skills = skillCategories
