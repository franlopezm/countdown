import { DateAndTime } from '../../services/DateAndTime'

interface CurrentDateBoxProps {
  date: DateAndTime
}

export const CurrentDateBox = (props: CurrentDateBoxProps) => {
  const { date } = props

  return (
    <div>
      <h2 className='font-medium text-base text-sky-700'>
        Fecha actual:
      </h2>
      <h3 className='text-lg font-normal text-slate-600 mt-1'>
        {date.format()}
      </h3>
    </div>
  )
}
