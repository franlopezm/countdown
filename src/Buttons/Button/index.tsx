import { MouseEvent } from 'react'

type SizeButton = 'btn-small md:btn-medium' | 'btn-small' | 'btn-medium' | 'btn-large'
type ColorButton = 'btn-primary' | 'btn-link' | 'btn-secondary' | 'btn-danger'

export interface ButtonProps {
  title: string
  onClick?: () => void
  size?: SizeButton
  color?: ColorButton
  type?: 'button' | 'submit'
  className?: string
  isDisabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    onClick, title = '', size = 'btn-small md:btn-medium', isDisabled = false,
    color = 'btn-primary', className = '', type = 'button'
  } = props

  return (
    <button
      type={type}
      className={`${size} ${color} ${className}`}
      onClick={
        onClick ?
          (e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()

            onClick()
          }
          : undefined
      }
      disabled={isDisabled}
    >
      {title}
    </button>
  )
}
