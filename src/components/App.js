import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment-timezone'
import "./app.scss"

import urlParams from '../utils/urlParams'
import CountDownAndUp from './CountDownAndUp'

const params = urlParams()
const endDate = moment(params.endDate).tz(params.timezone)


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

	return (
		<div className="container">
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

			{/* <h1>Cuenta atrás</h1> */}

			<div className="date_box">
				<p className="date_box-title"><strong>Fecha actual:</strong></p>
				<p className="date_box-date">{moment(date).format('DD-MM-YYYY HH:mm:ss')}</p>
			</div>

			<div className="date_box">
				<p className="date_box-title mb_0_5">
					<strong>Tiempo restante:</strong>
					<span>{endDate.format('DD-MM-YYYY HH:mm:ss')}</span>
				</p>

				<CountDownAndUp
					endDate={endDate}
					currentDate={date}
				/>
			</div>

			<div className="date_box mt_0_8">
				<p className="date_box-title mb_0_5">
					<strong>Tiempo transcurrido:</strong>
					<span>{moment(params.initDate).format('DD-MM-YYYY HH:mm:ss')}</span>
				</p>

				<CountDownAndUp
					startDate={params.initDate}
					currentDate={date}
					className="count_down"
				/>
			</div>
		</div>
	)
}

export default Clock
