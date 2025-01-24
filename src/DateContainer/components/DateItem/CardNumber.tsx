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
    <div className="p-1 group-[]/datelarge:p-2">
      <div className="text-slate-600 text-xs font-semibold mb-1 text-center group-[]/datelarge:text-sm">
        {title}
      </div>
      <div
        // shadow-md border border-slate-05
        className={`rounded text-slate-700 ${className} text-xl tracking-wide p-1.5 text-center min-w-16 group-[]/datelarge:text-3xl group-[]/datelarge:min-w-16`}
      >
        {number}
      </div>
    </div>
  )
}

export default CardNumber
