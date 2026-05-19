import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${hover ? 'transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]' : ''} ${className}`}>
      {children}
    </div>
  )
}
