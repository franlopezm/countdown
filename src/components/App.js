import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment-timezone'
import "./index.css"

const params = new URLSearchParams(document.location.search.substring(1))
const END_DATE = params.get('endDate')
const TIMEZONE = params.get('timezone').replace('-', "/")

const countDownEnd = moment(END_DATE).tz(TIMEZONE)

function tick(setDate) {
	setDate(new Date())
}

function Clock(props) {
	const [date, setDate] = useState(new Date())


	useEffect(() => {
		const timerId = setInterval(() => tick(setDate), 1000)

		return function cleanup() {
			clearInterval(timerId)
		}
	})

	// Get duration from diff dates
	const duration = moment.duration(countDownEnd.diff(moment(date).tz('Europe/Moscow')))

	// Get days and subtract from duration
	const days = parseInt(duration.asDays(), 10)
	duration.subtract(moment.duration(days, 'days'))

	// Get hours and subtract from duration
	const hours = duration.hours()
	duration.subtract(moment.duration(hours, 'hours'))

	// Get minutes and subtract from duration
	const minutes = duration.minutes()
	duration.subtract(moment.duration(minutes, 'minutes'))

	// Get seconds
	const seconds = duration.seconds()

	return (
		<div className="countdown">
			<h1>Cuenta atrás</h1>
			<div className="date-box">
				<p className="title"><strong>Fecha actual:</strong></p>
				<p className="date">{date.toLocaleString().replace(/\//g, '-')}</p>
			</div>
			<div className="date-box">
				<p className="title"><strong>Fecha Final:</strong></p>
				<p className="date">{countDownEnd.format('DD-MM-YYYY HH:mm:ss')}</p>
			</div>
			<div className="date-box">
				<p className="title"><strong>Faltan:</strong></p>
				<p className="date">{days} días - {hours} horas - {minutes} minutos - {seconds} segundos</p>
			</div>
		</div>
	)
}

export default Clock
