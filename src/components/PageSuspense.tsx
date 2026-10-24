"use client"

import React, { Suspense } from "react"
import Loader from "./Loader"

type PageSuspenseProps = {
    children: React.ReactNode
    label?: string
}

const PageSuspense: React.FC<PageSuspenseProps> = ({ children, label }) => {
    return <Suspense fallback={<Loader label={label} />}>{children}</Suspense>
}

export default PageSuspense
