'use client'

import { useEffect } from 'react'

export function CodeInspector() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    import('code-inspector-plugin/dist/append-code-5678.js' as string).catch(() => {})
  }, [])
  return null
}
