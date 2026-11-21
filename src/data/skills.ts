export type Skill = { name: string; level: number }
export type SkillCategory = {
  id: 'programming' | 'frameworks' | 'databases' | 'tools' | 'practices'
  title: string
  iconId: 'server' | 'database' | 'cloud' | 'brain' | 'code' | 'wrench'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Scripting',
    iconId: 'code',
    skills: [
      { name: 'Python (Core & Advanced)', level: 95 },
      { name: 'Object-Oriented Programming (OOPs)', level: 92 },
      { name: 'System Automation (OS, Shutil)', level: 90 },
      { name: 'Voice Automation (pyttsx3, SpeechRecognition)', level: 88 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Bash & Scripting', level: 82 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    iconId: 'server',
    skills: [
      { name: 'Django / Django REST Framework', level: 90 },
      { name: 'Flask', level: 88 },
      { name: 'FastAPI', level: 85 },
      { name: 'NumPy & Pandas', level: 86 },
      { name: 'Matplotlib & Seaborn', level: 84 },
      { name: 'RESTful API Engineering', level: 92 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data Management',
    iconId: 'database',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'SQLite', level: 92 },
      { name: 'MongoDB (NoSQL)', level: 82 },
      { name: 'Database Normalization & Queries', level: 88 },
      { name: 'Transaction Integrity & ACID', level: 85 },
      { name: 'Redis Caching Basics', level: 80 },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Cloud Platforms',
    iconId: 'cloud',
    skills: [
      { name: 'Git & GitHub Version Control', level: 92 },
      { name: 'VS Code & PyCharm', level: 95 },
      { name: 'Postman (API Testing)', level: 90 },
      { name: 'Jupyter Notebook', level: 88 },
      { name: 'GitHub Actions (CI/CD)', level: 82 },
      { name: 'Cloud Deployment (Railway, Render)', level: 88 },
    ],
  },
  {
    id: 'practices',
    title: 'Testing, Deployment & Soft Skills',
    iconId: 'brain',
    skills: [
      { name: 'Testing & Unit Test Debugging', level: 88 },
      { name: 'Analytical Thinking', level: 90 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Browser Automation (TechSimPlus)', level: 85 },
      { name: 'Interview Readiness (NPTEL Certified)', level: 90 },
      { name: 'Collaborative Engineering', level: 90 },
    ],
  },
]

