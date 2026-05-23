import type { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'Ascend Logicへのお問い合わせはこちらから。AI導入に関するご相談を承ります。',
}

export default function RequestDocumentsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
