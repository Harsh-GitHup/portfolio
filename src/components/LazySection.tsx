"use client"

import React, { useEffect, useRef, useState } from "react"
import Loader from "./Loader"

type LazySectionProps = {
    children: React.ReactNode
    label?: string
    rootMargin?: string
    minDelayMs?: number
}

// Renders a loader until the section scrolls into view, then mounts children.
const LazySection: React.FC<LazySectionProps> = ({
    children,
    label = "Loading...",
    rootMargin = "200px",
    minDelayMs = 200,
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        let timer: NodeJS.Timeout | null = null

        const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            for (const entry of entries) {
                if (entry.isIntersecting && !ready) {
                    // small delay so loader is visible briefly
                    timer = globalThis.setTimeout(() => setReady(true), minDelayMs)
                    observer.disconnect()
                }
            }
        }

        const observer = new IntersectionObserver(
            (entries) => handleIntersection(entries, observer),
            { root: null, rootMargin, threshold: 0.01 }
        )

        observer.observe(el)
        return () => {
            observer.disconnect()
            if (timer) globalThis.clearTimeout(timer)
        }
    }, [ready, rootMargin, minDelayMs])

    return (
        <div ref={ref}>
            {ready ? children : <Loader label={label} className="min-h-[30vh]" />}
        </div>
    )
}

export default LazySection
