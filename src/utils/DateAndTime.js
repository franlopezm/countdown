import { DateTime, Interval } from 'luxon'

/**
 * class for Date and Time manipulation
 * @param {Object|string} dateTo
 */
export default class DateAndTime {
    constructor(dateTo, zone) {
        this.date = this.create(dateTo, zone)
    }

    /**
     * Validate datetime
     * @param {Object|DateTime} date
     */
    isValid(date) {
        return DateTime.isDateTime(date)
    }

    /**
     * Create a datetime from a string
     * @param {string|DateTime} dateTo
     * @param {string} [zone=local]
     */
    create(dateTo, zone) {
        if (this.isValid(dateTo)) return dateTo

        const date = DateTime.fromISO(dateTo, { zone: zone || 'local' })
        if (this.isValid(date)) return date

        throw new TypeError('date format is invalid')
    }

    /**
     * Normaliza datetime for locale string
     */
    format() {
        return this.date.toLocaleString({
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        })
    }

    /**
     * Calc duration between two given dates
     * @param {string|DateTime} initDate
     * @param {string|DateTime} endDate
     *
     * @returns {{years: number, months: number, days: number, hours: number, minutes: number, seconds: number}}
     */
    durationBetweenTwoDates(endDate) {
        // Return positive values, Date not exceeded
        if (this.date.toMillis() <= endDate.toMillis()) {
            return Interval
                .fromDateTimes(this.date, endDate)
                .toDuration(['years', 'months', 'days', 'hours', 'minutes', 'seconds'])
                .toObject()
        } else {
            // Return negative values, Date exceeded
            return Interval
                .fromDateTimes(endDate, this.date)
                .toDuration(['years', 'months', 'days', 'hours', 'minutes', 'seconds'])
                .negate()
                .toObject()
        }
    }
}
