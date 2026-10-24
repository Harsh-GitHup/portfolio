import React from 'react'
import { highlights as aboutHighlights } from '@/data/about'

const AboutSkeleton = () => (
  <div className="grid lg:grid-cols-12 gap-8 items-start animate-pulse">
    <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
      <div className="h-6 w-48 bg-slate-800 rounded" />
      <div className="h-4 w-full bg-slate-800 rounded" />
      <div className="h-4 w-5/6 bg-slate-800 rounded" />
      <div className="h-4 w-4/6 bg-slate-800 rounded" />
      <div className="grid grid-cols-4 gap-3 pt-4">
        <div className="h-16 bg-slate-800 rounded-xl" />
        <div className="h-16 bg-slate-800 rounded-xl" />
        <div className="h-16 bg-slate-800 rounded-xl" />
        <div className="h-16 bg-slate-800 rounded-xl" />
      </div>
    </div>
    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {Array.from({ length: aboutHighlights.length || 4 }).map((_, i) => (
        <div key={i} className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
          <div className="h-5 w-32 bg-slate-800 rounded mb-2" />
          <div className="h-4 w-full bg-slate-800 rounded" />
        </div>
      ))}
    </div>
  </div>
)

export default AboutSkeleton
