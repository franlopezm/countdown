import { DateTime } from 'luxon'
import dateStorage from '../services/localStorage/dateStorage'

export const insertDemoData = (): void => {
  const dates = dateStorage.findAll()

  // Only insert dates if storage is empty
  if (dates.length !== 0) return

  // Insert date since
  const dateOne = DateTime.local()
    .set({ millisecond: 0 })
    .minus({ days: 65 })

  dateStorage.insertOne({
    date: dateOne.toISO({ includeOffset: false }),
    timezone: dateOne.zoneName,
    title: '',
    type: 'since'
  })

  // Insert date until
  const dateTwo = DateTime.local()
    .set({ millisecond: 0 })
    .plus({ days: 87, hours: 7 })

  dateStorage.insertOne({
    date: dateTwo.toISO({ includeOffset: false }),
    timezone: dateTwo.zoneName,
    title: '',
    type: 'until'
  })

  // Insert date disabled
  const dateThree = DateTime.local()
    .set({ millisecond: 0 })
    .minus({ days: 2, hours: 7 })

  dateStorage.insertOne({
    date: dateThree.toISO({ includeOffset: false }),
    timezone: dateThree.zoneName,
    title: '',
    type: 'until'
  })
}
