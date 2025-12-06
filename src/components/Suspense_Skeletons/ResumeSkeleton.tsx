import React from 'react'

const ResumeSkeleton = () => (
  <div className="animate-pulse">
    <div className="text-center mb-16">
      <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4" />
      <div className="h-5 w-96 bg-gray-200 rounded mx-auto mb-8" />
      <div className="h-10 w-56 bg-gray-200 rounded mx-auto" />
    </div>

    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gray-200 rounded-lg w-12 h-12" />
        <div className="h-6 w-48 bg-gray-200 rounded" />
      </div>
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between mb-4">
                <div className="h-5 w-40 bg-gray-200 rounded" />
                <div className="h-5 w-32 bg-gray-200 rounded" />
              </div>
              <div className="h-4 w-full bg-gray-200 rounded mb-3" />
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((__, j) => (
                  <div key={j} className="h-4 w-3/4 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gray-200 rounded-lg w-12 h-12" />
        <div className="h-6 w-48 bg-gray-200 rounded" />
      </div>
      <div className="space-y-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between mb-4">
              <div className="h-5 w-40 bg-gray-200 rounded" />
              <div className="h-5 w-32 bg-gray-200 rounded" />
            </div>
            <div className="h-4 w-full bg-gray-200 rounded mb-3" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((__, j) => (
                <div key={j} className="h-6 w-24 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gray-200 rounded-lg w-12 h-12" />
        <div className="h-6 w-48 bg-gray-200 rounded" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <div className="h-5 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-40 bg-gray-200 rounded mb-2" />
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default ResumeSkeleton
