import { ReactNode, useCallback, useEffect, useState } from 'react'

import dateStorage from '../../services/localStorage/dateStorage'
import { DateAndTime } from '../../services/DateAndTime'
import { DateContext, DateContextItem, DateItemCreate } from './DateContext'
import { routerUtils } from '../../Router'

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [dates, setDates] = useState<DateContextItem[]>([])

  useEffect(
    () => {
      const findAndParse = (): DateContextItem[] => {
        const data = dateStorage.findAll()

        return data.map<DateContextItem>(elem => {
          const { date, timezone, type, title = '', id } = elem

          return {
            id, type, title,
            date: new DateAndTime(date, timezone),
            viewPath: routerUtils.getViewPath(elem)
          }
        })
      }

      setDates(findAndParse())

      const onStorage = () => {
        setDates(findAndParse())
      }

      window.addEventListener('storage', onStorage)

      return () => {
        window.removeEventListener('storage', onStorage)
      }
    }, []
  )

  const addDate = useCallback(
    (data: DateItemCreate) => {
      const item = dateStorage.insertOne({
        type: data.type,
        date: data.date.isoDate,
        timezone: data.date.zone,
        title: data.title || '',
        id: data.id
      })

      const viewPath = routerUtils.getViewPath(item)

      setDates(
        (dates) => {
          return dates.concat({
            ...data, viewPath,
            id: item.id
          })
        }
      )
    }, []
  )

  const removeDate = useCallback(
    (id: string) => {
      dateStorage.removeOne(id)

      setDates((dates) => dates.filter(item => item.id !== id))
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
