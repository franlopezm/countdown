interface InputProps {
  onChange: (value: string) => void
  value: string
  type?: 'text' | 'date' | 'time'
  id?: string
  className?: string
  placeholder?: string
  isRequired?: boolean
}

export const Input = (props: InputProps) => {
  const {
    id, className = '', isRequired = false, placeholder,
    type = 'text', onChange, value
  } = props

  return (
    <input
      className={`px-3 py-2 mb-5 w-full rounded border-2 border-slate-300 text-slate-800 outline-offset-0 outline-0 focus:border-slate-500 text-sm ${className}`}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      required={isRequired}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
