import { ReactNode, useCallback, useEffect, useState } from "react"

import dateStorage from "../../../services/localStorage/dateStorage"
import { DateAndTime } from "../../../services/DateAndTime"
import { DateContext, DateContextItem } from './DateContext'

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [dates, setDates] = useState<DateContextItem[]>([])

  useEffect(
    () => {
      const data = dateStorage.findAll()

      setDates(
        data.map<DateContextItem>(elem => {
          const { date, timezone, isSince } = elem

          return {
            date: new DateAndTime(date, timezone),
            isSince
          }
        })
      )
    }, []
  )

  const addDate = useCallback(
    (data: DateContextItem) => {
      setDates((dates) => dates.concat(data))

      dateStorage.insertOne({
        isSince: data.isSince,
        date: data.date.isoDate,
        timezone: data.date.zone
      })
    }, []
  )

  const removeDate = useCallback(
    (position: number) => {
      setDates((dates) => dates.filter(
        (_, idx) => idx !== position)
      )

      dateStorage.removeOne(position)
    }, []
  )

  return (
    <DateContext.Provider
      value={{
        dates,
        addDate,
        removeDate
      }}
    >
      {children}
    </DateContext.Provider>
  )
}
