import React from 'react'

const ProjectCardSkeleton = () => {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse shadow-lg">
            <div className="w-full h-48 bg-slate-800" />
            <div className="p-6">
                <div className="h-5 bg-slate-800 rounded w-2/3 mb-3" />
                <div className="h-4 bg-slate-800 rounded w-full mb-2" />
                <div className="h-4 bg-slate-800 rounded w-5/6 mb-4" />
                <div className="flex gap-2">
                    <div className="h-6 w-16 bg-slate-800 rounded-md" />
                    <div className="h-6 w-20 bg-slate-800 rounded-md" />
                    <div className="h-6 w-12 bg-slate-800 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSkeleton