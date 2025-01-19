import { useContext } from "react"

import { DateContext } from "./DateContext"

export const useDateContext = () => {
  const { dates, addDate, removeDate } = useContext(DateContext)

  return { dates, addDate, removeDate }
}
