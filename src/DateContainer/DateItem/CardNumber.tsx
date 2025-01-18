interface CardNumberProps {
  title: string
  number?: string | number
  isDisabled?: boolean
  isSince?: boolean
}

interface ClassNameParams {
  isSince: boolean,
  isDisabled: boolean
}

const getClassName = (params: ClassNameParams): string => {
  const { isDisabled, isSince } = params
  if (isDisabled) return 'bg-neutral-500'
  if (isSince) return 'bg-sea-350'

  return 'bg-green-350'
}

const CardNumber = (props: CardNumberProps) => {
  const { title, number = 0, isDisabled = false, isSince = false } = props
  const className = getClassName({ isDisabled, isSince })

  return (
    <div className="p-1">
      <div className="text-slate-600 text-xs font-semibold mb-1 text-center">
        {title}
      </div>
      <div
        className={`rounded shadow-md text-neutral-50 ${className} text-xl tracking-wide p-1.5 text-center min-w-16`}
      >
        {number}
      </div>
    </div>
  )
}

export default CardNumber
