import moment from 'moment'

const getDuration = (start, end) => moment.duration(start.diff(end))

const validateDate = (date) => date.format() === 'Invalid date' ? moment() : date

const toInteger = (num) => parseInt(num, 10)

/**
 * Calc diffDate
 * @param {Object|string} start
 * @param {Object|string} end
 *
 * @return {{years: number, months: number, days: number, hours: number, minutes: number, seconds: number}}
 */
export default (start, end) => {
	const startDate = moment(start)
	const endDate = moment(end)

	// Get duration from diff dates
	const duration = getDuration(validateDate(startDate), validateDate(endDate))

	// Get months and subtract from duration
	const years = toInteger(duration.asYears())
	duration.subtract(moment.duration(years, 'years'))

	// Get months and subtract from duration
	const months = toInteger(duration.asMonths())
	duration.subtract(moment.duration(months, 'months'))

	// Get days and subtract from duration
	const days = toInteger(duration.asDays())
	duration.subtract(moment.duration(days, 'days'))

	// Get hours and subtract from duration
	const hours = toInteger(duration.hours())
	duration.subtract(moment.duration(hours, 'hours'))

	// Get minutes and subtract from duration
	const minutes = toInteger(duration.minutes())
	duration.subtract(moment.duration(minutes, 'minutes'))

	// Get seconds
	const seconds = toInteger(duration.seconds())

	return { years, months, days, hours, minutes, seconds }
}
