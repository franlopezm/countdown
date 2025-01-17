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

    return DateTime.local()
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
  format(): string {
    return this.date.toLocaleString({
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  /**
   * Time elapsed between the current date and the indicated date
   */
  static durationFromDate(currentDate: DateAndTime, date: DateAndTime): DurationFromDateResponse {
    const utcCurrent = currentDate._utcDate
    const utcFrom = date.dateUTC
    const isAfter = utcFrom > utcCurrent

    const interval = isAfter
      ? Interval.fromDateTimes(utcCurrent, utcFrom)
      : Interval.fromDateTimes(utcFrom, utcCurrent)

    return {
      isAfter,
      duration: interval
        .toDuration(
          ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']
        )
        .toObject()
    }
  }

  get date(): DateTime {
    return this._date
  }

  get dateUTC(): DateTime {
    return this._utcDate
  }
}
