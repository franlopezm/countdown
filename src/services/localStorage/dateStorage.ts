import { v4 as uuid } from 'uuid'

import { PartialBy } from '../../shared/interfaces'
import { DATE_STORAGE_KEY } from '../../config/constants'
import { TimeBetweenType } from '../DateAndTime/interfaces'

export interface DateStorageItem {
  id: string
  date: string
  type: TimeBetweenType
  timezone: string
  title: string
}

export type DateStorageItemCreate = PartialBy<DateStorageItem, 'id'>

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

const insertOne = (item: DateStorageItemCreate): DateStorageItem => {
  const { date, type, timezone, title, id } = item

  const data = {
    date, type, timezone, title,
    id: id || uuid()
  }
  const list = findAll()

  const isInList = list.some(elem => elem.id === data.id)
  if (isInList) {
    throw new Error('There is currently an item with the same id.')
  }

  list.push(data)
  save(list)

  return data
}

const removeOne = (id: string): void => {
  const list = findAll()
    .filter(elem => elem.id !== id)

  save(list)
}

export default {
  removeOne,
  insertOne,
  findAll
}
