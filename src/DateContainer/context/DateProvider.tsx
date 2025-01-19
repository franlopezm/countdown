import { ReactNode, useCallback, useEffect, useState } from "react"

import dateStorage, { DateStorageItem } from "../../services/localStorage/dateStorage"
import { DateAndTime } from "../../services/DateAndTime"
import { DateContext, DateContextItem } from './DateContext'
import { routerUtils } from "../../Router"

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [dates, setDates] = useState<DateContextItem[]>([])

  useEffect(
    () => {
      const findAndParse = (): DateContextItem[] => {
        const data = dateStorage.findAll()

        return data.map<DateContextItem>(elem => {
          const { date, timezone, type, title } = elem

          return {
            date: new DateAndTime(date, timezone),
            type,
            title,
            viewPath: routerUtils.getViewPath(elem)
          }
        })
      }

      setDates(findAndParse())

      const onStorage = () => {
        setDates(findAndParse())
      }

      window.addEventListener("storage", onStorage)

      return () => {
        window.removeEventListener("storage", onStorage)
      }
    }, []
  )

  const addDate = useCallback(
    (data: DateContextItem) => {
      const item: DateStorageItem = {
        type: data.type,
        date: data.date.isoDate,
        timezone: data.date.zone,
        title: data.title || ''
      }

      const viewPath = routerUtils.getViewPath(item)

      setDates((dates) => dates.concat({ ...data, viewPath }))

      dateStorage.insertOne(item)
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
        dateSize: dates.length,
        addDate,
        removeDate
      }}
    >
      {children}
    </DateContext.Provider>
  )
}
