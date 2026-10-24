'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Terminal, Cpu } from 'lucide-react'
import { navItems } from '@/data/links'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-3.5">
          {/* Logo / Terminal Hostname */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-white hover:text-emerald-400 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors shadow-inner">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                <span>harsh@backend</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              </div>
              <span className="text-[10px] text-slate-500 font-mono">SYS_ARCH: v2.4</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 font-mono text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-emerald-400 border border-emerald-500/40 font-semibold shadow-sm shadow-emerald-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <span className="text-slate-600 mr-1">{isActive ? '>' : '/'}</span>
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Telemetry pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>P99: <span className="text-emerald-400 font-semibold">18ms</span></span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400">READY</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-800/80">
            <div className="flex flex-col space-y-1 font-mono text-xs">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-slate-900 text-emerald-400 border border-emerald-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span className="text-slate-600 mr-2">{isActive ? '>' : '/'}</span>
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation