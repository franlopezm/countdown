import PropTypes from 'prop-types';
import React from 'react'

import './countDownAndUp.scss'
import normalizer from '../utils/normalizer'
import DiffDate from '../utils/DiffDate'
import NumberCard from './NumberCard'

/**
 * CountDownAndUp component
 */
const CountDownAndUp = ({ startDate, endDate, currentDate, className }) => {
	const initDate = startDate || currentDate

	let dateObj
	if (endDate && initDate) {
		dateObj = new DiffDate(endDate, initDate)
	} else {
		dateObj = new DiffDate(currentDate, initDate)
	}
	const { years, months, days, hours, minutes, seconds } = dateObj.getAllAndSubtract()

	return (
		<div className={`count_down_and_up${className ? ' ' + className : ''}`}>
			<NumberCard
				number={years}
				title='años'
			/>

			<NumberCard
				number={months}
				title='meses'
			/>

			<NumberCard
				number={days}
				title='días'
			/>

			<NumberCard
				number={normalizer.number.getTwoDigit(hours)}
				title='horas'
			/>

			<NumberCard
				number={normalizer.number.getTwoDigit(minutes)}
				title='minutos'
			/>

			<NumberCard
				number={normalizer.number.getTwoDigit(seconds)}
				title='segundos'
			/>
		</div>
	)
}

CountDownAndUp.propTypes = {
	className: PropTypes.string,
	currentDate: PropTypes.any,
	endDate: PropTypes.any,
	startDate: PropTypes.any
}

CountDownAndUp.defaultProps = {
	className: ''
}

export default CountDownAndUp
