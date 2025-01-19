interface CardNumberProps {
  title: string
  number?: string | number
  isDisabled?: boolean
}

interface ClassNameParams {
  isDisabled: boolean
}

const getClassName = (params: ClassNameParams): string => {
  const { isDisabled } = params
  if (isDisabled) return 'bg-neutral-500'

  return ''
}

const CardNumber = (props: CardNumberProps) => {
  const { title, number = 0, isDisabled = false } = props
  const className = getClassName({ isDisabled })

  return (
    <div className="p-1">
      <div className="text-slate-600 text-xs font-semibold mb-1 text-center">
        {title}
      </div>
      <div
        className={`rounded shadow-md border border-slate-05 text-slate-700 ${className} text-xl tracking-wide p-1.5 text-center min-w-16`}
      >
        {number}
      </div>
    </div>
  )
}

export default CardNumber
