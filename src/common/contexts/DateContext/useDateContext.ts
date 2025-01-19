import { useContext } from "react"

import { DateContext } from "./DateContext"

export const useDateContext = () => {
  const { dates, dateSize, addDate, removeDate } = useContext(DateContext)

  return { dates, dateSize, addDate, removeDate }
}
