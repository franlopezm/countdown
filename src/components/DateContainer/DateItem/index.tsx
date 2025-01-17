import { DurationFromDateResponse } from '../../../services/DateAndTime/interfaces'
import { addLeftZero } from '../../../services/numberNormalizer'
import CardNumber from './CardNumber'

interface DateItemProps {
  title: string
  dateText?: string
  durationObj: DurationFromDateResponse
  isDisabled?: boolean
  isSince?: boolean
}

const DateItem = (props: DateItemProps) => {
  const { title, dateText, durationObj, isDisabled = false, isSince } = props
  const { duration } = durationObj

  const className = isDisabled
    ? `bg-neutral-200`
    : ''

  return (
    <div
      className={`mb-4 mr-4 p-4 px-6 max-w-max shadow-md border-2 rounded relative ${className}`}
    >
      <p className="font-bold text-sm text-sky-700">
        {title}
      </p>
      {
        dateText
          ? (
            <p className='text-base font-normal text-slate-600 mt-1'>
              {dateText}
            </p>
          ) : null
      }

      <div className='flex justify-between content-between mt-2'>
        <CardNumber
          title='Años'
          number={duration.years}
          isDisabled={isDisabled}
          isSince={isSince}
        />
        <CardNumber
          title='Meses'
          number={duration.months}
          isDisabled={isDisabled}
          isSince={isSince}
        />
        <CardNumber
          title='Días'
          number={duration.days}
          isDisabled={isDisabled}
          isSince={isSince}
        />
        <CardNumber
          title='Horas'
          number={addLeftZero(duration.hours)}
          isDisabled={isDisabled}
          isSince={isSince}
        />
        <CardNumber
          title='Minutos'
          number={addLeftZero(duration.minutes)}
          isDisabled={isDisabled}
          isSince={isSince}
        />
        <CardNumber
          title='Segundos'
          number={addLeftZero(duration.seconds)}
          isDisabled={isDisabled}
          isSince={isSince}
        />
      </div>
    </div>
  )
}

export default DateItem
