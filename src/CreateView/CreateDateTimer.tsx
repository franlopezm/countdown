import { DateItem } from '../DateContainer/components/DateItem'
import { DateAndTime } from '../services/DateAndTime'
import useTimer from '../shared/hooks/useTimer'

interface CreateDateTimerProps {
  date: DateAndTime
  title?: string
}

const CreateDateTimer = (props: CreateDateTimerProps) => {
  const { date, title } = props

  const [currentDate] = useTimer()

  const durationInfo = DateAndTime.durationFromDate(currentDate, date)

  return (
    <DateItem
      classContainer='mr-0 mb-0'
      dateText={date.format()}
      title={title}
      duration={durationInfo.duration}
      type={durationInfo.type}
    />
  )
}

export default CreateDateTimer
