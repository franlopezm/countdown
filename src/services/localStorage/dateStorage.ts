import { DATE_STORAGE_KEY } from "../../config/constants"

interface DateStorageItem {
  date: string
  isSince: boolean // When the value is true the date is in the past.
  timezone?: string
}

const save = (data: DateStorageItem[]): void => {
  localStorage.setItem(DATE_STORAGE_KEY, JSON.stringify(data))
}

export const findAll = (): DateStorageItem[] => {
  const rawData = localStorage.getItem(DATE_STORAGE_KEY)
  if (!rawData) return []

  try {
    return JSON.parse(rawData)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return []
  }
}

export const insertOne = (item: DateStorageItem): void => {
  const { date, isSince, timezone = '' } = item

  const list = findAll()

  const isInList = list.some(elem => {
    if (elem.date !== date) return false
    if (elem.timezone !== timezone) return false

    return elem.isSince === isSince
  })

  if (!isInList) {
    list.push({ date, isSince, timezone })
    save(list)
  }
}

export const removeOne = (position: number): void => {
  const list = findAll()
  list.splice(position, 1)
  save(list)
}
