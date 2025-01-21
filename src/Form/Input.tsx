import { ChangeEventHandler } from 'react'

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  type?: 'text' | 'datetime-local'
  id?: string
  className?: string
  placeholder?: string
  isRequired?: boolean
}

export const Input = (props: InputProps) => {
  const {
    id, className, isRequired = false, placeholder,
    type = 'text', onChange, value
  } = props

  return (
    <input
      className={`block px-3 py-1.5 mb-5 w-full rounded border-2 border-slate-300 text-slate-800 outline-slate-500 text-sm ${className}`}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      required={isRequired}
      onChange={onChange}
    />
  )
}
