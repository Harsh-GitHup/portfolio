import React from 'react'

const SkillsSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-gray-200 rounded-lg w-12 h-12" />
      <div className="h-6 w-40 bg-gray-200 rounded" />
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="h-5 w-32 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2" />
        </div>
      ))}
    </div>
  </div>
)

export default SkillsSkeleton
