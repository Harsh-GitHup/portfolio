'use client'

import { Code, Coffee, Lightbulb, Heart } from 'lucide-react'
import { highlights as aboutHighlights } from '@/data/about'

const iconMap: Record<string, JSX.Element> = {
  Code: <Code className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
}

const About = () => {

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover my journey as a developer and what drives my passion for creating digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">My Story</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hello! I&apos;m Harsh, a passionate full-stack Python developer with over 3 years of experience
                  creating digital solutions that make a difference. My journey started with curiosity about
                  how things work behind the scenes, and it quickly evolved into a love for building applications
                  that solve real-world problems.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I specialize in Python backend development using Django and FastAPI, coupled with modern
                  frontend technologies like React and Next.js. I&apos;m passionate about writing clean, scalable
                  code and creating seamless user experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community. I believe in continuous learning
                  and staying curious about emerging technologies.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutHighlights.map((highlight) => {
                return <div
                  key={highlight.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                      {iconMap[highlight.icon]}
                    </div>
                    <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About