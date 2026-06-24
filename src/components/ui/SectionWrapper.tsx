import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
  tight?: boolean
}

export default function SectionWrapper({
  children,
  className,
  id,
  as: Tag = 'section',
  tight = false,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'max-w-7xl mx-auto px-6',
        tight ? 'py-16 md:py-20' : 'py-20 md:py-32',
        className
      )}
    >
      {children}
    </Tag>
  )
}
