import { createContext } from 'react'

import { TimeBetweenType } from '../../services/DateAndTime/interfaces'
import { DateAndTime } from '../../services/DateAndTime'

export interface DateContextItem {
  id: string
  date: DateAndTime
  type: TimeBetweenType
  title: string
  viewPath: string
}

export type DateItemCreate = Omit<DateContextItem, 'id'>

export interface DateContextValues {
  dates: DateContextItem[]
  dateSize: number
  addDate: (dateItem: DateItemCreate) => void
  removeDate: (id: string) => void
}

export const DateContext = createContext<DateContextValues>({
  dates: [],
  dateSize: 0,
  addDate: () => { },
  removeDate: () => { }
})