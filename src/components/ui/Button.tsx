import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  className?: string
  accentColor?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  accentColor,
  disabled,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-base rounded-none'

  const variantClasses = {
    primary:
      'bg-bombay text-base hover:bg-bombay-light active:scale-[0.98]',
    outline:
      'border border-white/20 text-white hover:border-white/50 hover:bg-white/5 active:scale-[0.98]',
    ghost:
      'text-white/70 hover:text-white active:scale-[0.98]',
  }

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
    className
  )

  const style = accentColor
    ? variant === 'primary'
      ? { backgroundColor: accentColor, color: '#0A0A0B' }
      : variant === 'outline'
      ? { borderColor: accentColor, color: accentColor }
      : { color: accentColor }
    : undefined

  if (href) {
    return (
      <Link href={href} className={classes} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={style}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
