import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Variant = 'outline-dark' | 'outline-light' | 'outline-light-invert'

const base = 'group inline-flex items-center gap-2 px-8 py-3 border-[1.5px] rounded-[30px] text-sm font-semibold bg-transparent transition-all duration-300 tracking-wide'

const variants: Record<Variant, string> = {
  'outline-dark': 'border-[#333] text-[#333] hover:bg-[#333] hover:text-white',
  'outline-light': 'border-white/30 text-white hover:bg-white/10',
  'outline-light-invert': 'border-white/30 text-white hover:bg-white hover:text-black',
}

interface CtaLinkProps extends LinkProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

export default function CtaLink({ variant = 'outline-dark', className = '', children, ...props }: CtaLinkProps) {
  return (
    <Link {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
