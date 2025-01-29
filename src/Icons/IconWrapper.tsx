import { ReactNode } from 'react'

export type IconSize = 'size-4 md:size-5' | 'size-5 md:size-6' | 'size-5' | 'size-6'

export interface IconWrapperProps {
  size?: IconSize
  className?: string
  children: ReactNode
}

export const IconWrapper = (props: IconWrapperProps) => {
  const { size = 'size-6', className = '', children } = props

  return (
    <div className={`${size} ${className}`}>
      {children}
    </div>
  )
}
