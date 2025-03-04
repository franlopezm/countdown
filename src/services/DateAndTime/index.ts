import { DateTime, Interval } from 'luxon'
import { DateOption, DurationFromDateResponse } from './interfaces'

/**
 * class for Date and Time manipulation
 */
export class DateAndTime {
  protected _date: DateTime
  protected _utcDate: DateTime

  constructor(date?: DateOption, zone?: string) {
    this._date = this.create(date, zone)

    this._utcDate = this.date.toUTC()
  }

  /**
   * Create a datetime from a string
   */
  protected create(date?: DateOption, zone?: string): DateTime {
    if (this.isValid(date)) return date as DateTime

    if (date) {
      const datetime = DateTime.fromISO(
        date as string,
        { zone: zone || 'local' }
      )

      if (datetime.isValid) return datetime
    }

    return DateTime.local().set({ millisecond: 0 })
  }

  /**
   * Validate datetime
  */
  protected isValid(date?: DateOption): boolean {
    if (!date) return false

    return DateTime.isDateTime(date)
  }

  /**
   * Normaliza datetime for locale string
   */
  format(options?: { displaySeconds?: boolean }): string {
    const { displaySeconds = false } = options || {}

    return this.date.toLocaleString({
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      ...displaySeconds
        ? { second: '2-digit' }
        : {}
    })
  }

  /**
   * Time elapsed between the current date and the indicated date
   */
  static durationFromDate(start: DateAndTime, end: DateAndTime): DurationFromDateResponse {
    const utcStart = start.dateUTC
    const utcEnd = end.dateUTC

    const isUntil = utcEnd > utcStart

    const interval = isUntil
      ? Interval.fromDateTimes(utcStart, utcEnd)
      : Interval.fromDateTimes(utcEnd, utcStart)

    return {
      type: isUntil ? 'until' : 'since',
      duration: interval
        .toDuration(
          ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
        )
        .toObject()
    }
  }

  static isOlder(dateStart: DateAndTime, dateEnd: DateAndTime): boolean {
    const utcStart = dateStart.dateUTC
    const utcEnd = dateEnd.dateUTC

    return utcStart > utcEnd
  }

  get date(): DateTime {
    return this._date
  }

  get dateUTC(): DateTime {
    return this._utcDate
  }

  get zone(): string {
    return this._date.zoneName || ''
  }

  get isoDate(): string {
    return this._date.toFormat("yyyy-LL-dd'T'HH:mm") || ''
  }

  get toISODate(): string {
    return this._date.toFormat('yyyy-LL-dd') || ''
  }

  get toISOTime(): string {
    return this._date.toFormat('HH:mm') || ''
  }
}
