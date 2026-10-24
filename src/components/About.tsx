'use client'

import React, { Suspense } from 'react'
import { Code, Coffee, Lightbulb, Heart, Server, ShieldCheck, Zap, Activity } from 'lucide-react'
import { highlights as aboutHighlights } from '@/data/about'
import AboutSkeleton from '@/components/Suspense_Skeletons/AboutSkeleton'

const iconMap: Record<string, JSX.Element> = {
  Code: <Code className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
}

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-inner">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>{"// ARCHITECTURE_CORE :: BIOGRAPHY"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Systems-focused backend software engineer building fault-tolerant microservices, high-throughput message brokers, and low-latency cloud infrastructure.
          </p>
        </div>

        <Suspense fallback={<AboutSkeleton />}>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cybernetic Terminal Dossier */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
              {/* Terminal Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-slate-500">spec://profile.dossier.json</span>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold">STATUS: ONLINE</span>
              </div>

              {/* Dossier Body */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Server className="w-5 h-5 text-emerald-400" />
                    <span>My Story &amp; Systems Philosophy</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                    Hello! I&apos;m Harsh, a backend engineer and systems architect with over 3 years of hands-on experience designing robust server-side infrastructures. My fascination began with understanding how databases guarantee ACID compliance and how networks route massive traffic spikes without collapsing.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                    I specialize in Python, FastAPI, Django REST Framework, PostgreSQL shard topologies, and in-memory Redis caching layers. I write clean, benchmarked, and containerized code where error boundaries, asynchronous workers (Celery), and connection pool optimizations are treated as first-class citizens.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    When not tuning database queries or profiling endpoints, I explore distributed consensus algorithms, contribute to open-source tooling, and continuously architect higher-availability systems.
                  </p>
                </div>

                {/* Live Telemetry Server Metrics */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Operational SLA Benchmarks</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                    <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-400">99.98%</div>
                      <div className="text-[11px] text-slate-400 mt-1">Uptime SLA</div>
                    </div>
                    <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-bold text-cyan-400">18ms</div>
                      <div className="text-[11px] text-slate-400 mt-1">P99 Latency</div>
                    </div>
                    <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-bold text-indigo-400">50+</div>
                      <div className="text-[11px] text-slate-400 mt-1">Repos &amp; APIs</div>
                    </div>
                    <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-center">
                      <div className="text-xl sm:text-2xl font-bold text-amber-400">3+ Yrs</div>
                      <div className="text-[11px] text-slate-400 mt-1">Production</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Highlights Pods */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {aboutHighlights.map((highlight) => {
                return (
                  <div
                    key={highlight.title}
                    className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-500/5 group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2.5 bg-slate-950 border border-slate-800 text-emerald-400 rounded-lg group-hover:border-emerald-500/40 group-hover:bg-emerald-950/30 transition-colors">
                        {iconMap[highlight.icon] || <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 group-hover:text-emerald-300 transition-colors text-sm sm:text-base">
                          {highlight.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500">SUBSYSTEM_VERIFIED</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </Suspense>
      </div>
    </section>
  )
}

export default About