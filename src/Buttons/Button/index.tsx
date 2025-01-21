type SizeButton = 'btn-medium' | 'btn-large'
type ColorButton = 'btn-primary' | 'btn-link'

export interface ButtonProps {
  title: string
  onClick?: () => void
  size?: SizeButton
  type?: ColorButton
  className?: string
  isDisabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    onClick, title = '', size = 'btn-medium', isDisabled = false,
    type = 'btn-primary', className = ''
  } = props

  return (
    <button
      type="button"
      className={`${size} ${type} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {title}
    </button>
  )
}
