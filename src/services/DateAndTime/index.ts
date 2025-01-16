import { DateTime, Interval } from 'luxon'
import { DateOption, DurationFromDateResponse } from './interfaces'


/**
 * class for Date and Time manipulation
 */
export class DateAndTime {
  protected _date: DateTime
  protected _utcDate: DateTime

  constructor(date: DateOption, zone?: string) {
    this._date = this.create(date, zone)

    this._utcDate = this.date.toUTC()
  }

  /**
   * Create a datetime from a string
   */
  protected create(date: DateOption, zone?: string): DateTime {
    if (this.isValid(date)) return date as DateTime

    const datetime = DateTime.fromISO(
      date as string,
      { zone: zone || 'local' }
    )

    if (datetime.isValid) return datetime

    return DateTime.local()
  }

  /**
   * Validate datetime
  */
  protected isValid(date: DateOption): boolean {
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
  durationFromDate(date: DateAndTime): DurationFromDateResponse {
    const utcFrom = date.dateUTC
    const isAfter = utcFrom > this._utcDate

    const interval = isAfter
      ? Interval.fromDateTimes(this._utcDate, utcFrom)
      : Interval.fromDateTimes(utcFrom, this._utcDate)

    return {
      isAfter,
      duration: interval
        .toDuration(
          ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
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
