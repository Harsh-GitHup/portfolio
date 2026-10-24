'use client'

import React, { useState } from 'react'
import { Terminal, Server, Database, Cpu, Activity, ArrowDown, ExternalLink, Download, ArrowUpRight } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

interface CommandResult {
  command: string
  output: string | React.ReactNode
}

const Hero = () => {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<CommandResult[]>([
    {
      command: 'whoami',
      output:
        'Harsh Kesharwani | Backend Software Engineer & Systems Architect specializing in Python (FastAPI, Django), PostgreSQL, Redis caching, Docker containerization, and high-concurrency microservices.',
    },
    {
      command: 'curl -s https://api.harsh.dev/v1/health',
      output: (
        <span className="text-emerald-400">
          {'{ "status": "200_OK", "service": "cluster-mesh", "uptime": "99.98%", "latency_p99": "18ms", "active_workers": 8 }'}
        </span>
      ),
    },
  ])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    let output: string | React.ReactNode = ''
    if (trimmed === 'help') {
      output = 'Available commands: whoami, stack, health, projects, architecture, clear'
    } else if (trimmed === 'whoami') {
      output =
        'Harsh Kesharwani | Backend Software Engineer & Systems Architect specializing in Python (FastAPI, Django), PostgreSQL, Redis, and distributed systems.'
    } else if (trimmed === 'stack' || trimmed === 'cat stack.json') {
      output = (
        <span className="text-cyan-300">
          {`{
  "languages": ["Python", "TypeScript", "SQL", "Bash"],
  "frameworks": ["FastAPI", "Django REST Framework", "Express.js", "Flask"],
  "databases": ["PostgreSQL", "Redis", "MySQL", "MongoDB"],
  "infra_devops": ["Docker", "Linux", "Nginx", "GitHub Actions", "Celery", "WebSockets"]
}`}
        </span>
      )
    } else if (trimmed === 'health' || trimmed.includes('curl')) {
      output = (
        <span className="text-emerald-400">
          {'{ "status": "healthy", "cluster": "us-east-prod", "db_pool": "32/40 active", "redis_hit_rate": "95.4%" }'}
        </span>
      )
    } else if (trimmed === 'projects') {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      output = 'Navigating to backend projects...'
    } else if (trimmed === 'architecture') {
      const el = document.getElementById('architecture')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      output = 'Navigating to distributed system architecture...'
    } else {
      output = `zsh: command not found: ${trimmed}. Type "help" for available commands.`
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
    setInputVal('')
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen pt-28 pb-20 relative overflow-hidden flex flex-col justify-center">
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Radial Neon Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* System Health Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 rounded-xl bg-gray-900/80 border border-gray-800 text-xs font-mono text-gray-400 mb-8 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS OPERATIONAL</span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">Uptime: 99.98%</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> P99: 18ms
            </span>
            <span className="flex items-center gap-1.5 hidden md:flex">
              <Database className="w-3.5 h-3.5 text-amber-400" /> PostgreSQL & Redis
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" /> 8 Cluster Nodes
            </span>
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <Server className="w-3.5 h-3.5" /> Distributed Systems • High-Concurrency APIs • Cloud Pipelines
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 leading-tight">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Resilient Backends</span> & Distributed APIs
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I specialize in designing low-latency RESTful & WebSocket backends using Python (FastAPI, Django), Node.js, PostgreSQL with connection pooling, Redis in-memory caching, and Docker microservices.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <button
              onClick={() => scrollTo('api-console')}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" /> Live API Console
            </button>

            <button
              onClick={() => scrollTo('architecture')}
              className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <Server className="w-4 h-4 text-emerald-400" /> View Architecture Diagram
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-transparent hover:bg-gray-900 text-gray-400 hover:text-white font-medium text-xs transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>

        {/* Interactive Cyber Terminal Window */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-gray-800 bg-[#0d1117] shadow-2xl overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-gray-400 ml-2">bash - harsh@cluster-mesh:~</span>
            </div>
            <div className="flex items-center gap-2">
              {['curl health', 'stack', 'whoami', 'clear'].map((quickCmd) => (
                <button
                  key={quickCmd}
                  onClick={() => handleCommand(quickCmd === 'curl health' ? 'curl -s https://api.harsh.dev/v1/health' : quickCmd)}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800/80 text-gray-300 hover:text-emerald-400 hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  {quickCmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output Body */}
          <div className="p-5 font-mono text-xs text-gray-300 min-h-[200px] max-h-[300px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-gray-500">harsh@cluster:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-gray-300 pl-4 border-l border-gray-800 leading-relaxed whitespace-pre-wrap">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleCommand(inputVal)
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-emerald-400">harsh@cluster:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'stack', or 'curl health'..."
                className="flex-1 bg-transparent text-gray-100 placeholder-gray-600 focus:outline-none font-mono text-xs"
              />
            </form>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <button
            onClick={() => scrollTo('api-console')}
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>Scroll to API Console & System Architecture</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero