"use client"

import React, { useMemo, useState } from 'react'
import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src'> & {
    src: ImageProps['src']
    fallbackSrc?: string
}

const FALLBACK_DUMMYIMAGE = 'https://dummyimage.com/600x400/d6d6d6/000'
const FALLBACK_PLACEHOLDER = 'https://placehold.co/600x400'
const FALLBACK_UNSPLASH = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&fit=crop'

export default function ImageWithFallback({ src, fallbackSrc, alt, onError, ...rest }: Props) {
    const [broken, setBroken] = useState(false)

    const resolvedFallback = useMemo(() => {
        const candidate = fallbackSrc
            || FALLBACK_UNSPLASH
            || FALLBACK_PLACEHOLDER
            || FALLBACK_DUMMYIMAGE
        return typeof candidate === 'string' && candidate.length > 0 ? candidate : FALLBACK_PLACEHOLDER
    }, [fallbackSrc]);

    const finalSrc = broken ? resolvedFallback : src

    const hasExplicitSize = typeof rest.width === 'number' && typeof rest.height === 'number'
    const isFill = rest.fill === true

    return (
        <Image
            {...rest}
            alt={alt}
            src={finalSrc}
            unoptimized={broken}
            {...(!hasExplicitSize && !isFill && broken ? { width: 600, height: 400 } : {})}
            onError={(e) => {
                if (!broken) {
                    setBroken(true)
                }
                onError?.(e)
            }}
        />
    )
}
