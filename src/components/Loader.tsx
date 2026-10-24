"use client"

import React from "react"

type LoaderProps = {
    size?: number
    label?: string
    className?: string
}

const Loader: React.FC<LoaderProps> = ({ size = 32, label = "Loading...", className = "min-h-[60vh]" }) => {
    const borderSize = Math.max(2, Math.floor(size / 16))
    return (
        <div className={`${className} flex items-center justify-center`} aria-busy="true" aria-live="polite">
            <div className="flex flex-col items-center gap-3">
                <div
                    className="rounded-full animate-spin border-emerald-500 border-t-transparent"
                    style={{ width: size, height: size, borderWidth: borderSize }}
                />
                {label && <p className="text-xs font-mono text-emerald-400 animate-pulse">{label}</p>}
            </div>
        </div>
    )
}

export default Loader
