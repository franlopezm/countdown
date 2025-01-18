import { useContext } from 'react'

import { DateContext } from '../common/contexts/DateContext/DateContext'
import { DateAndTime } from '../services/DateAndTime'
import DateItem from './DateItem'

interface DateListProps {
  date: DateAndTime
}

const DateList = (props: DateListProps) => {
  const { date } = props
  const { dates } = useContext(DateContext)

  return (
    <div className='mt-8 flex flex-wrap justify-start'>
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
              isSince={isSince}
            />
          )
        })
      }
    </div>
  )
}

export default DateList
