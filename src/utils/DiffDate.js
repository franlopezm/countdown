import moment from 'moment'

/**
 * Calculate difference between two dates
 * @param {Object|string} start
 * @param {Object|string} end
 */
export default class DiffDate {
	constructor(startDate, endDate) {
		this.startDate = this.validateDate(startDate)
		this.endDate = this.validateDate(endDate)
		this.duration = null

		this.calcDiffAndDuration()
	}

	/**
	 * Transform string date in moment date and validate
	 * @param {string} dateParam
	 *
	 * @return {Object<moment>}
	 */
	validateDate(dateParam) {
		const date = moment(dateParam)

		return date.format() === 'Invalid date' ? moment() : date
	}

	/**
	 * Calc duration and diff between start and end date
	 */
	calcDiffAndDuration() {
		this.duration = moment.duration(this.startDate.diff(this.endDate))
	}

	/**
	 * Parse number to integer
	 * @param {*} num
	 *
	 * @return {number}
	 */
	toInteger(num) {
		return parseInt(num, 10)
	}

	/**
	 * Subtract the indicated number from the indicated type
	 * @param {number} num
	 * @param {string<years|months|days|hours|minutes|seconds>} type
	 */
	subtractFromDuration(num, type) {
		this.duration.subtract(moment.duration(num, type))
	}

	/**
	 * Returns the years of the calculated duration
	 *
	 * @return {number}
	 */
	getYears() {
		return this.toInteger(this.duration.asYears())
	}

	/**
	 * Returns the months of the calculated duration
	 *
	 * @return {number}
	 */
	getMonths() {
		return this.toInteger(this.duration.asMonths())
	}

	/**
	 * Returns the days of the calculated duration
	 *
	 * @return {number}
	 */
	getDays() {
		return this.toInteger(this.duration.asDays())
	}

	/**
	 * Returns the hours of the calculated duration
	 *
	 * @return {number}
	 */
	getHours() {
		return this.toInteger(this.duration.asHours())
	}

	/**
	 * Returns the minutes of the calculated duration
	 *
	 * @return {number}
	 */
	getMinutes() {
		return this.toInteger(this.duration.asMinutes())
	}

	/**
	 * Returns the seconds of the calculated duration
	 *
	 * @return {number}
	 */
	getSeconds() {
		return this.toInteger(this.duration.asSeconds())
	}

	/**
	 * Returns the milliseconds of the calculated duration
	 *
	 * @return {number}
	 */
	getMilliseconds() {
		return this.toInteger(this.duration.asMilliseconds())
	}

	/**
	 * Returns all values (years, months, days, etc), and subtract the value obtained from the duration
	 *
	 * @returns {{years: number, months: number, days: number, hours: number, minutes: number, seconds: number}}
	 */
	getAllAndSubtract() {
		const years = this.getYears()
		this.subtractFromDuration(years, 'years')

		const months = this.getMonths()
		this.subtractFromDuration(months, 'months')

		const days = this.getDays()
		this.subtractFromDuration(days, 'days')

		const hours = this.getHours()
		this.subtractFromDuration(hours, 'hours')

		const minutes = this.getMinutes()
		this.subtractFromDuration(minutes, 'minutes')

		const seconds = this.getSeconds()
		this.subtractFromDuration(seconds, 'seconds')

		const milliseconds = this.getMilliseconds()

		return { years, months, days, hours, minutes, seconds, milliseconds }
	}

}
