import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
  className?: string
  htmlFor?: string
  isRequired?: boolean
  onClick?: () => void
}

export const Label = (props: LabelProps) => {
  const {
    children, htmlFor, className, isRequired = false,
    onClick
  } = props

  return (
    <label
      className={`block font-semibold text-sky-800 py-1 ${className}`}
      htmlFor={htmlFor}
      title={isRequired ? 'Campo requerido' : 'Campo opcional'}
      onClick={onClick}
    >
      {children}
      {
        isRequired
          ? (
            <span
              className='font-bold px-1'
            >
              *
            </span>
          )
          : null
      }
    </label>
  )
}
