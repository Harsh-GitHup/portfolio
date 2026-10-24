import React from 'react'

const SkillsSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 animate-pulse shadow-xl">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-slate-800 rounded-xl w-12 h-12" />
      <div className="h-6 w-48 bg-slate-800 rounded" />
    </div>
    <div className="grid md:grid-cols-2 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-4 w-28 bg-slate-800 rounded" />
            <div className="h-4 w-10 bg-slate-800 rounded" />
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2" />
        </div>
      ))}
    </div>
  </div>
)

export default SkillsSkeleton
