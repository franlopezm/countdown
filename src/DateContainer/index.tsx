import useTimer from '../common/hooks/useTimer'
import CurrentDate from './CurrentDate'
import DateList from './DateList'

const DateContainer = () => {
  const [date] = useTimer()

  return (
    <div>
      <CurrentDate
        date={date}
      />

      <DateList
        date={date}
      />
    </div>
  )
}

export default DateContainer
