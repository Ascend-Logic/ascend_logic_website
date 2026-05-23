import Image from 'next/image'

type Variant = 'lockup' | 'mark' | 'wordmark'
type Theme = 'light' | 'dark'

interface LogoProps {
  variant?: Variant
  theme?: Theme
  height?: number
  className?: string
  priority?: boolean
  alt?: string
}

const intrinsicSize: Record<Variant, { width: number; height: number }> = {
  lockup: { width: 740, height: 120 },
  mark: { width: 120, height: 120 },
  wordmark: { width: 680, height: 120 },
}

export function Logo({ variant = 'lockup', theme = 'light', height = 32, className, priority = false, alt = 'Ascend Logic' }: LogoProps) {
  const { width: iw, height: ih } = intrinsicSize[variant]
  const width = Math.round((iw / ih) * height)
  const src = `/images/ascend-logic-${variant}-${theme}.svg`

  return <Image src={src} alt={alt} width={width} height={height} priority={priority} className={className} />
}
