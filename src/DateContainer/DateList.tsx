import { useDateContext } from '../common/contexts/DateContext'
import { DateAndTime } from '../services/DateAndTime'
import LinkButton from '../LinkButton'
import DateItem from './DateItem'

interface DateListProps {
  date: DateAndTime
}

const DateList = (props: DateListProps) => {
  const { date } = props
  const { dates, dateSize } = useDateContext()

  return (
    <div className='mt-8 flex flex-wrap justify-start'>
      {
        dateSize === 0 ? (
          <div
            className='w-full mt-16 text-center'
          >
            <p
              className='mb-8 text-xl text-slate-700'
            >
              No se han encontrado temporizadores.
            </p>

            <LinkButton
              title='Añadir temporizador'
              to='/new'
            />
          </ div>
        ) : null
      }
      {
        dates.map((item, idx) => {
          const { date: dateEnd, isSince } = item

          const duration = DateAndTime.durationFromDate(date, dateEnd)
          const title = isSince
            ? 'Tiempo desde la fecha:'
            : 'Tiempo hasta la fecha:'

          return (
            <DateItem
              key={idx.toString()}
              title={title}
              dateText={dateEnd.format()}
              durationObj={duration}
              isDisabled={false}
            />
          )
        })
      }
    </div>
  )
}

export default DateList
