import useTimer from '../hooks/useTimer'
import DateList from './DateList'

const DateContainer = () => {
  const [date] = useTimer()

  // console.log('date', date.zone, date.isoDate)

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
