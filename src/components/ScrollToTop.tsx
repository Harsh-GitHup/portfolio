'use client'

import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          const currentScroll = window.scrollY

          setIsVisible(currentScroll > 280)
          if (totalHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)))
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Radius = 18, circumference = 2 * PI * 18 ≈ 113.1
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to top [SYSTEM_ROOT]"
        className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900/90 hover:bg-slate-800/95 border border-slate-800 hover:border-emerald-500/50 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0e14]"
      >
        {/* SVG Circular Progress Track */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          {/* Background circle */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-emerald-400 transition-[stroke-dashoffset] duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center Arrow Icon */}
        <ArrowUp className="w-4 h-4 text-emerald-400 group-hover:text-cyan-300 transition-all duration-200 group-hover:-translate-y-0.5 relative z-10" />

        {/* Subtle Terminal Badge on hover */}
        <span className="absolute -top-8 right-0 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          ^ TOP
        </span>
      </button>
    </div>
  )
}
