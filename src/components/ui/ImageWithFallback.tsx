"use client"

import React, { useMemo, useState } from 'react'
import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src'> & {
    src: ImageProps['src']
    fallbackSrc?: string
}

const FALLBACK_PLACEHOLDER = 'https://via.placeholder.com/800x500?text=Image+Unavailable'
const FALLBACK_UNSPLASH =
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&fit=crop'

export default function ImageWithFallback({ src, fallbackSrc, alt, onError, ...rest }: Props) {
    const [broken, setBroken] = useState(false)

    const resolvedFallback = useMemo(
        () => fallbackSrc || FALLBACK_UNSPLASH || FALLBACK_PLACEHOLDER,
        [fallbackSrc]
    )

    const finalSrc = broken ? resolvedFallback : src

    return (
        <Image
            {...rest}
            alt={alt}
            src={finalSrc}
            onError={(e) => {
                setBroken(true)
                onError?.(e)
            }}
        />
    )
}
