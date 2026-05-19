import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return <div className={`bg-white rounded-lg shadow-md p-6 ${hover ? 'card-hover' : ''} ${className}`}>{children}</div>
}
