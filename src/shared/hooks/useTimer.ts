import { useEffect, useState } from 'react'

import { INTERVAL_TIME } from '../../config/constants'
import { DateAndTime } from '../../services/DateAndTime'

const useTimer = () => {
  const [date, setDate] = useState(() => new DateAndTime())

  useEffect(() => {
    const timerId = setInterval(
      () => setDate(new DateAndTime()),
      INTERVAL_TIME
    )

    return function cleanup() {
      clearInterval(timerId)
    }
  }, [setDate])

  return [date]
}

export default useTimer
