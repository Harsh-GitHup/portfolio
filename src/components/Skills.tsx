'use client'

import React, { Suspense, useEffect, useMemo, useState, startTransition } from 'react'
import { skillCategories } from '@/data/skills'
import { Code, Database, Server, Wrench, Brain, Cloud, Terminal, Cpu } from 'lucide-react'
import SkillsSkeleton from '@/components/Suspense_Skeletons/SkillsSkeleton'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]?.id || 'frameworks')
  const [visibleSkills, setVisibleSkills] = useState(
    skillCategories.find(c => c.id === activeCategory)?.skills || skillCategories[0]?.skills || []
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      startTransition(() => {
        const nextSkills = skillCategories.find(c => c.id === activeCategory)?.skills || []
        setVisibleSkills(nextSkills)
        setIsLoading(false)
      })
    }, 250)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const iconFor = (iconId: string) => {
    const cls = 'w-5 h-5'
    switch (iconId) {
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
      case 'code':
      default:
        return <Code className={cls} />
    }
  }

  const activeCategoryMeta = useMemo(() => (
    skillCategories.find(c => c.id === activeCategory)
  ), [activeCategory])
  const skeletonCount = activeCategoryMeta?.skills.length || 6

  return (
    <section id="skills" className="py-24 bg-slate-900/60 text-slate-100 relative overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 mb-3 shadow-inner">
            <Cpu className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>{"// STACK_MATRIX :: RUNTIME_CAPABILITIES"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise backend architectures, high-performance in-memory caching, distributed databases, and container orchestrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Terminal Selectors */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SUBSYSTEMS</span>
                </span>
                <span className="text-[10px] text-slate-500">SELECT LAYER</span>
              </div>
              <div className="space-y-1.5">
                {skillCategories.map((category) => {
                  const isActive = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left font-mono text-xs transition-all duration-200 ${
                        isActive
                          ? 'bg-slate-900 border border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-500/10'
                          : 'bg-slate-950/60 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-900 text-slate-500'}`}>
                          {iconFor(category.iconId)}
                        </div>
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <span className={`text-[11px] ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-600'}`}>
                        {isActive ? '●' : '○'}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Skills Interactive Runtime Inspector */}
          <div className="lg:col-span-8">
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Terminal Window Bar */}
              <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-slate-400 font-semibold">
                    cat /proc/modules/{activeCategoryMeta?.id}.spec
                  </span>
                </div>
                <span className="text-emerald-400 text-[11px] font-mono">STATUS: COMPILED</span>
              </div>

              {/* Skills Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 rounded-xl shadow-inner">
                    {iconFor(activeCategoryMeta?.iconId || 'code')}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeCategoryMeta?.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      Production proficiencies and battle-tested operational knowledge
                    </p>
                  </div>
                </div>

                <Suspense fallback={<SkillsSkeleton count={skeletonCount} />}>
                  {isLoading ? (
                    <SkillsSkeleton count={skeletonCount} />
                  ) : (
                    <div className="grid md:grid-cols-2 gap-5">
                      {visibleSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-4 bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/30 rounded-xl transition-all space-y-2.5 group"
                        >
                          <div className="flex justify-between items-center font-mono">
                            <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-xs font-bold text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress track */}
                          <div className="w-full bg-slate-950 rounded-full h-2 p-0.5 border border-slate-800">
                            <div
                              className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-700 ease-out shadow-sm shadow-cyan-500/30"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                            <span>RUNTIME: PRODUCTION</span>
                            <span className="text-emerald-400 font-semibold">[READY]</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills