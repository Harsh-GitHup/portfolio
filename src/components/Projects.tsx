'use client'

import React, { useEffect, useState, Suspense, startTransition } from 'react'
import ImageWithFallback from './ui/ImageWithFallback'
import { ExternalLink, Filter, Terminal, Server, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { projects, filters } from '@/data/projects'
import ProjectCardSkeleton from '@/components/Suspense_Skeletons/ProjectCardSkeleton'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(project => project.category === activeFilter)
  }, [activeFilter])

  // Simulate async loading so skeletons appear
  const [visibleProjects, setVisibleProjects] = useState<typeof filteredProjects>([])
  useEffect(() => {
    setVisibleProjects([])
    const id = setTimeout(() => {
      startTransition(() => setVisibleProjects(filteredProjects))
    }, 250)
    return () => clearTimeout(id)
  }, [filteredProjects])

  return (
    <section id="projects" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-inner">
            <Server className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>// DEPLOYED_MICROSERVICES :: REPOSITORY_CATALOG</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            High-concurrency backend services, asynchronous Celery pipelines, real-time WebSocket brokers, and production APIs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14 font-mono text-xs">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-emerald-300 border border-emerald-500/60 shadow-lg shadow-emerald-500/15'
                    : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <Filter size={13} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
                <span>{filter.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <Suspense
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="loading projects">
              {Array.from({ length: filteredProjects.length || 6 }).map((_, i) => (
                <ProjectCardSkeleton key={`skeleton-${i}`} />
              ))}
            </div>
          }
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(visibleProjects.length ? visibleProjects : []).map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group backdrop-blur-sm"
              >
                {/* Microservice Header Bar */}
                <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block animate-pulse" />
                    <span className="text-slate-300 font-semibold truncate max-w-[150px]">
                      svc://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                    </span>
                  </div>
                  <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded text-[10px]">
                    200 OK
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden bg-slate-950 h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay quick actions */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-emerald-500 text-slate-950 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-slate-900 border border-slate-700 text-slate-200 rounded-xl hover:bg-slate-800 hover:text-white transition-colors shadow-lg"
                        aria-label="View Source Code"
                      >
                        <GitHubLogoIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architectural Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-slate-800/80">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Key Architecture:
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                        {project.highlights.slice(0, 2).map((highlight) => (
                          <li key={highlight} className="flex items-start gap-1.5">
                            <span className="text-emerald-400 font-bold shrink-0">▸</span>
                            <span className="line-clamp-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-cyan-400 text-[11px] rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2.5 mt-auto pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-center py-2.5 rounded-xl transition-all duration-200 text-xs font-mono shadow-md shadow-emerald-500/10 flex items-center justify-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-center py-2.5 rounded-xl transition-colors text-xs font-mono flex items-center justify-center gap-1.5"
                    >
                      <span>Source Code</span>
                      <GitHubLogoIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {visibleProjects.length === 0 && (
              <>
                {Array.from({ length: filteredProjects.length || 6 }).map((_, i) => (
                  <ProjectCardSkeleton key={`inline-skeleton-${i}`} />
                ))}
              </>
            )}
          </div>
        </Suspense>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 max-w-3xl mx-auto">
          <Terminal className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-2">Interested in Distributed System Collaboration?</h4>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            I build highly resilient architectures, optimize slow database queries, and design scalable REST/gRPC backend microservices.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
          >
            <span>Initialize Contact Channel</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects