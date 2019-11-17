import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment-timezone'
import "./index.css"

const params = new URLSearchParams(document.location.search.substring(1))
const END_DATE = params.get('endDate') || moment().format()
const TIMEZONE = (params.get('timezone') || 'Europe/Berlin').replace('-', "/")

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
	const duration = moment.duration(countDownEnd.diff(moment(date)))

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
			{/* <div className="youtube-box">
				<iframe
					title="Un destino"
					width="250"
					height="140"
					src="https://www.youtube-nocookie.com/embed/playlist?list=PLtA0DJJ99-mASGLmaRIbWSSgEuftyzfw1&autoplay=1"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div> */}

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
				<p className="date">
					<span>{days} días</span>
					<span>{hours} horas</span>
					<span>{minutes} minutos</span>
					<span>{seconds} segundos</span>
				</p>
			</div>
		</div>
	)
}

export default Clock
