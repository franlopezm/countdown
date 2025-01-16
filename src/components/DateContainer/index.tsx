import { useEffect, useState } from 'react'

import { DateAndTime } from '../../services/DateAndTime'
import DateList from './DateList'

const DateContainer = () => {
  const [date, setDate] = useState(() => new DateAndTime())

  useEffect(() => {
    const timerId = setInterval(
      () => setDate(new DateAndTime()),
      1000
    )

    return function cleanup() {
      clearInterval(timerId)
    }
  }, [setDate])

  return (
    <div>
      <h2 className='font-medium text-base text-sky-700'>
        Fecha actual:
      </h2>
      <h3 className='text-lg font-normal text-slate-600 mt-1'>
        {date.format()}
      </h3>

      <DateList
        date={date}
      />
    </div>
  )
}

export default DateContainer
