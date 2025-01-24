import { CurrentDateBox, DateList } from '../DateContainer'
import useTimer from '../shared/hooks/useTimer'

const HomeView = () => {
  const [date] = useTimer()

  return (
    <div>
      <CurrentDateBox
        date={date}
      />

      <DateList
        date={date}
      />
    </div>
  )
}

export default HomeView
