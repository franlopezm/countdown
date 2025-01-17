import { ReactNode, useCallback, useEffect, useState } from "react"

import { DateAndTime } from "../../services/DateAndTime"
import { DateContext, DateContextItem } from './DateContext'

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [dates, setDates] = useState<DateContextItem[]>([])

  useEffect(
    () => {
      console.warn('Se debe añadir la lógica para recuperar las fechas desde el localstorage y desde la url')
      // Ejemplo actual
      setDates([{
        date: new DateAndTime("2025-01-25T23:55:00", 'Europe/Moscow'),
        isSince: false
      }, {
        date: new DateAndTime("2025-01-01T00:00:00", 'Europe/Moscow'),
        isSince: true
      }])
    }, []
  )

  const addDate = useCallback(
    (data: DateContextItem) => {
      setDates((dates) => dates.concat(data))
    }, []
  )

  const removeDate = useCallback(
    (position: number) => {
      setDates((dates) => dates.filter(
        (_, idx) => idx !== position)
      )
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
