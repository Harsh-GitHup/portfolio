'use client'

import React, { Suspense, useEffect, useState, startTransition } from 'react'
import { Download, MapPin, Calendar, Award, Briefcase, GraduationCap, GitBranch, Terminal } from 'lucide-react'
import { experience, education, certifications } from '@/data/resume'
import ResumeSkeleton from '@/components/Suspense_Skeletons/ResumeSkeleton'

const Resume = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [visibleExperience, setVisibleExperience] = useState(experience)
  const [visibleEducation, setVisibleEducation] = useState(education)
  const [visibleCerts, setVisibleCerts] = useState(certifications)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      startTransition(() => {
        setVisibleExperience(experience)
        setVisibleEducation(education)
        setVisibleCerts(certifications)
        setIsLoading(false)
      })
    }, 250)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="resume" className="py-24 bg-slate-900/50 text-slate-100 relative overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <Suspense fallback={<ResumeSkeleton />}>
          {isLoading ? (
            <ResumeSkeleton />
          ) : (
            <>
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-400 mb-3 shadow-inner">
                  <GitBranch className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
                  <span>{"// CHRONOLOGY_LOGS :: ENGINEERING_CREDENTIALS"}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                  My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">Resume</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
                  Verified enterprise software history, systems development track record, and accredited certifications.
                </p>
                
                {/* Download CTA Button */}
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-950 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white rounded-xl font-mono text-xs font-semibold shadow-lg shadow-indigo-500/10 transition-all hover:bg-indigo-950/40 mx-auto"
                >
                  <Download size={16} className="text-indigo-400" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>

              {/* 1. Professional Experience Section */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-10 pb-3 border-b border-slate-800">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 text-indigo-400 rounded-xl shadow-inner">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Professional Experience
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      DEPLOYMENT_TIMELINE // PRODUCTION_ENVIRONMENTS
                    </p>
                  </div>
                </div>

                <div className="space-y-8 relative">
                  {visibleExperience.map((job, idx) => (
                    <div key={`${job.company}-${job.period}`} className="relative pl-6 sm:pl-10">
                      {/* Circuit line */}
                      {idx !== visibleExperience.length - 1 && (
                        <div className="absolute left-[11px] sm:left-[19px] top-8 w-0.5 h-[calc(100%+32px)] bg-slate-800" />
                      )}

                      {/* Node point */}
                      <div className="absolute left-0 sm:left-2 top-2 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] font-mono font-bold text-indigo-400 shadow-md shadow-indigo-500/20">
                        {idx + 1}
                      </div>

                      {/* Card Content */}
                      <div className="bg-slate-950/80 border border-slate-800/90 hover:border-indigo-500/40 p-6 sm:p-7 rounded-2xl shadow-xl transition-all backdrop-blur-sm group">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                              {job.title}
                            </h4>
                            <p className="text-sm font-semibold font-mono text-indigo-400 mt-0.5">
                              {job.company}
                            </p>
                          </div>
                          <div className="flex flex-wrap md:flex-col md:items-end gap-3 text-xs font-mono text-slate-400">
                            <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                              <Calendar size={13} className="text-slate-500" />
                              <span>{job.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                              <MapPin size={13} className="text-slate-500" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                          {job.description}
                        </p>

                        <div>
                          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Key Systems Deliverables:</span>
                          </h5>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <Award size={14} className="text-emerald-400 mt-1 shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Education Section */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-10 pb-3 border-b border-slate-800">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 text-emerald-400 rounded-xl shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Education
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      ACADEMIC_FOUNDATIONS // COMPUTER_SCIENCE
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {visibleEducation.map((edu) => (
                    <div
                      key={`${edu.institution}-${edu.degree}`}
                      className="bg-slate-950/80 border border-slate-800 p-6 sm:p-7 rounded-2xl shadow-xl"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-0.5">{edu.degree}</h4>
                          <p className="text-sm font-semibold font-mono text-emerald-400">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                            <Calendar size={13} className="text-slate-500" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                            <MapPin size={13} className="text-slate-500" />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{edu.details}</p>

                      <div>
                        <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Core Computer Science Curricula:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-md font-mono"
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

              {/* 3. Certifications Section */}
              <div>
                <div className="flex items-center gap-3 mb-10 pb-3 border-b border-slate-800">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 text-cyan-400 rounded-xl shadow-inner">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Certifications
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      INDUSTRY_ACCREDITATIONS // SIGNATURES
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {visibleCerts.map((cert) => (
                    <div
                      key={`${cert.issuer}-${cert.credential}`}
                      className="bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 p-6 rounded-2xl shadow-xl transition-all group"
                    >
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-semibold font-mono text-cyan-400 mb-3">{cert.issuer}</p>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-900">
                        <span>Issued: {cert.date}</span>
                        <span className="text-slate-500">ID: {cert.credential}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Suspense>
      </div>
    </section>
  )
}

export default Resume