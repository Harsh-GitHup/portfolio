import React from 'react'
import { highlights as aboutHighlights } from '@/data/about'

const AboutSkeleton = () => (
  <div className="grid lg:grid-cols-2 gap-12 items-center animate-pulse">
    <div className="space-y-4">
      <div className="h-6 w-40 bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
      <div className="h-4 w-4/6 bg-gray-200 rounded" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Array.from({ length: aboutHighlights.length || 4 }).map((_, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-6 w-24 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-full bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  </div>
)

export default AboutSkeleton
