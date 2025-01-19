import { createContext } from "react"

import { TimeBetweenType } from "../../services/DateAndTime/interfaces"
import { DateAndTime } from "../../services/DateAndTime"

export interface DateContextItem {
  date: DateAndTime
  type: TimeBetweenType
  title: string
  viewPath: string
}

export interface DateContextValues {
  dates: DateContextItem[]
  dateSize: number
  addDate: (dateItem: DateContextItem) => void
  removeDate: (position: number) => void
}

export const DateContext = createContext<DateContextValues>({
  dates: [],
  dateSize: 0,
  addDate: () => { },
  removeDate: () => { }
})
