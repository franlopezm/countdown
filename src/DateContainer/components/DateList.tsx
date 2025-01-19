import { useDateContext } from '../hooks/useDateContext'
import { DateAndTime } from '../../services/DateAndTime'
import { DateItem } from './DateItem'
import { NotFoundTimer } from '../../NotFoundTimer'

interface DateListProps {
  date: DateAndTime
}

export const DateList = (props: DateListProps) => {
  const { date } = props
  const { dates, dateSize, removeDate } = useDateContext()

  return (
    <div className='mt-8 flex flex-wrap justify-start'>
      {
        dateSize === 0 ? (
          <NotFoundTimer
            text='No se han encontrado temporizadores.'
          />
        ) : null
      }
      {
        dates.map((item, idx) => {
          const { date: itemDate, type: itemType } = item

          const { duration, type } = DateAndTime.durationFromDate(date, itemDate)

          const title = itemType === 'since'
            ? 'Tiempo desde la fecha:'
            : 'Tiempo hasta la fecha:'

          return (
            <DateItem
              key={idx.toString()}
              title={title}
              dateText={itemDate.format()}
              duration={duration}
              isDisabled={itemType !== type}
              onDelete={() => removeDate(idx)}
            />
          )
        })
      }
    </div>
  )
}
