import PropTypes from 'prop-types';
import React from 'react'

import './countDownAndUp.scss'
import normalizer from '../utils/normalizer'
import diffDate from '../utils/diffDate'
import NumberCard from './NumberCard'

/**
 * CountDownAndUp component
 */
const CountDownAndUp = ({ startDate, endDate, currentDate, className }) => {
	const initDate = startDate || currentDate

	let dateObj
	if (endDate && initDate) {
		dateObj = diffDate(endDate, initDate)
	} else {
		dateObj = diffDate(currentDate, startDate)
	}
	const { years, months, days, hours, minutes, seconds } = dateObj

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
