import { DateAndTime } from '../../services/DateAndTime'

const DateContainer = () => {

  const date = new DateAndTime("2025-01-25T23:55:00", 'Europe/Moscow')
  console.log(date.durationFromDate(new DateAndTime("2025-01-12T00:24:00", 'Europe/Samara')))

  return (
    <div>
      <h2 className='font-medium text-base text-sky-700'>
        Fecha actual:
      </h2>
      <h3 className='text-lg font-normal text-slate-600 mt-1'>
        {date.format()}
      </h3>
    </div>
  )
}

export default DateContainer
