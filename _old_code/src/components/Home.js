import React, { useState, useEffect } from "react"
import { DateTime, Interval } from "luxon"

const getEndDate = (date) => {
  return DateTime.fromISO(date).plus({ hours: 24 })
}

const getDiffTime = (currentDate, endDate) => {
  const duration = Interval.fromDateTimes(currentDate, endDate)
    .toDuration(["hours", "minutes", "seconds", "milliseconds"])


  if (!duration.isValid) {
    return <p>Nothing to show</p>
  }

  return (
    <p>
      {duration.toFormat('hh:mm:ss')} <br />
    </p>
  )
}

const CountDown = (props) => {
  const { lastDate } = props

  const [stopInterval, setStopInterval] = useState(false)
  const [timerId, setTimerId] = useState(null)
  console.log("CountDown -> timerId", timerId)

  const [endDate, setEndDate] = useState(getEndDate(lastDate))
  const [currentDate, setCurrentDate] = useState(DateTime.local())

  useEffect(() => {
    if (stopInterval) {
      console.log("CountDown -> timerId", timerId)
      clearInterval(timerId)

    } else {
      setTimerId(setInterval(() => setCurrentDate(DateTime.local()), 1000))
    }

    return function () {
      clearInterval(timerId)
    }
  }, [stopInterval])

  useEffect(() => {
    const newDate = getEndDate(lastDate)

    if (newDate.toJSDate() <= Date.now()) {
      setStopInterval(true)
    } else {
      setStopInterval(false)
    }

    setEndDate(newDate)
  }, [lastDate])

  console.log('currentDate', currentDate)

  return <div>{getDiffTime(currentDate, endDate)}</div>
}

export default (props) => {
  const [date, setDate] = useState(new Date().toISOString())

  return (
    <div className="container">
      <button onClick={() => setDate(new Date().toISOString())}>
        Change Date
      </button>

      <button onClick={() => setDate(new Date("2020-08-24").toISOString())}>
        Change Date to 2020-01-24
      </button>

      <button
        onClick={() => setDate(new Date("2020-09-23T21:00").toISOString())}
      >
        Change Date to 2020-09-24
      </button>

      <CountDown lastDate={date} />
    </div>
  )
}
