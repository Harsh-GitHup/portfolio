import React from 'react'

const ProjectCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-6">
                <div className="h-5 bg-gray-200 rounded w-2/3 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
                <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-full" />
                    <div className="h-6 w-20 bg-gray-200 rounded-full" />
                    <div className="h-6 w-12 bg-gray-200 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSkeleton