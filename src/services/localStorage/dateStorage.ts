import { DATE_STORAGE_KEY } from "../../config/constants"
import { TimeBetweenType } from "../DateAndTime/interfaces"

export interface DateStorageItem {
  date: string
  type: TimeBetweenType
  timezone: string
  title: string
}

const save = (data: DateStorageItem[]): void => {
  localStorage.setItem(DATE_STORAGE_KEY, JSON.stringify(data))
}

const findAll = (): DateStorageItem[] => {
  const rawData = localStorage.getItem(DATE_STORAGE_KEY)
  if (!rawData) return []

  try {
    return JSON.parse(rawData)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return []
  }
}

const insertOne = (item: DateStorageItem): void => {
  const { date, type, timezone = '', title } = item

  const list = findAll()

  const isInList = list.some(elem => {
    if (elem.date !== date) return false
    if (elem.timezone !== timezone) return false
    if (elem.title !== title) return false

    return elem.type === type
  })

  if (!isInList) {
    list.push({ date, type, timezone, title })
    save(list)
  }
}

const removeOne = (position: number): void => {
  const list = findAll()
  list.splice(position, 1)
  save(list)
}

export default {
  removeOne,
  insertOne,
  findAll
}
