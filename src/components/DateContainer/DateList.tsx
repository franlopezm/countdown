import { useContext } from 'react'

import { DateContext } from '../../contexts/DateContext/DateContext'
import { DateAndTime } from '../../services/DateAndTime'
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
          const duration = dateEnd.durationFromDate(date)

          return (
            <DateItem
              key={idx.toString()}
              title='Tiempo hasta la fecha:'
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
