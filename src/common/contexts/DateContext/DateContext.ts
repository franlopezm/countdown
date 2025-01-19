import { createContext } from "react"

import { DateAndTime } from "../../../services/DateAndTime"

export interface DateContextItem {
  date: DateAndTime
  isSince: boolean // When the value is true the date is in the past.
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
