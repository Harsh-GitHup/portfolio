'use client'

import { useState } from 'react'
import { skillCategories } from '@/data/skills'
import { Code, Database, Server, Wrench, Brain, Cloud } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const iconFor = (iconId: string) => {
    const cls = 'w-6 h-6'
    switch (iconId) {
      case 'code':
        return <Code className={cls} />
      case 'server':
        return <Server className={cls} />
      case 'database':
        return <Database className={cls} />
      case 'cloud':
        return <Cloud className={cls} />
      case 'wrench':
        return <Wrench className={cls} />
      case 'brain':
        return <Brain className={cls} />
      default:
        return <Code className={cls} />
    }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
                <div className="space-y-2">
                  {skillCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {iconFor(category.iconId)}
                      <span className="font-medium">{category.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    {iconFor(skillCategories.find(c => c.id === activeCategory)?.iconId || 'code')}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {skillCategories.find(c => c.id === activeCategory)?.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories.find(c => c.id === activeCategory)?.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-linear-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills