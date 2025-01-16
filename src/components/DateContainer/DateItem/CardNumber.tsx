interface CardNumberProps {
  title: string,
  number?: string | number,
  isDisabled?: boolean
}

const CardNumber = (props: CardNumberProps) => {
  const { title, number = 0, isDisabled = false } = props

  const className = isDisabled
    ? `bg-neutral-500`
    : 'bg-green-350'

  return (
    <div className="p-1">
      <div className="text-slate-600 text-xs font-semibold mb-1 text-center">
        {title}
      </div>
      <div
        className={`rounded-sm shadow-md text-neutral-50 ${className} text-xl tracking-wide p-1.5 text-center min-w-16`}
      >
        {number}
      </div>
    </div>
  )
}

export default CardNumber
