'use client'

import React from 'react'
import { Download, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react'
import { experience, education, certifications } from '@/data/resume'

const Resume = () => {

  return (
    <section id="resume" className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional experience and educational background
            </p>
            <button className="btn-primary flex items-center gap-2 mx-auto">
              <Download size={20} />
              Download Full Resume (PDF)
            </button>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((job) => (
                <div key={`${job.company}-${job.period}`} className="relative">
                  {/* Timeline Line */}
                  {experience.indexOf(job) !== experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        {experience.indexOf(job) + 1}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h4>
                          <p className="text-lg font-semibold text-primary-600 mb-2">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Calendar size={16} />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2">
                              <Award size={16} className="text-primary-500 mt-0.5 shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary-100 text-secondary-600 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={`${edu.institution}-${edu.degree}`} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-lg font-semibold text-secondary-600 mb-2">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{edu.details}</p>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={`${cert.issuer}-${cert.credential}`} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-purple-600 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Issued: {cert.date}</span>
                    <span>ID: {cert.credential}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume