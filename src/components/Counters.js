import React, { useState, useEffect } from 'react'
import moment from 'moment'
import "./counters.scss"
import 'moment-timezone'
import 'moment/locale/es'

import decodeBase64 from '../utils/decodeBase64'
import CountDownAndUp from './CountDownAndUp'

moment.locale('es')


function tick(setDate) {
	setDate(new Date())
}

function Clock(props) {
	const [date, setDate] = useState(new Date())
	const [params, setParams] = useState({ initDate: null, endDate: null, timezone: null })

	useEffect(() => {
		const { match = {} } = props
		const decodeParams = decodeBase64(match.params.id)

		setParams({
			endDate: moment(decodeParams.endDate).tz(decodeParams.timezone),
			initDate: decodeParams.initDate,
			timezone: decodeParams.timezone,
			isLoading: false
		})
	}, [props])

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

			<div className="date_box">
				<p className="date_box-title"><strong>Fecha actual:</strong></p>
				<p className="date_box-date">{moment(date).format('LLL')}</p>
			</div>

			{
				params.endDate && (
					<div className="date_box">
						<p className="date_box-title mb_0_5">
							<strong>Tiempo restante:</strong>
							<span>({params.endDate.format('LLL')})</span>
						</p>

						<CountDownAndUp
							endDate={params.endDate}
							currentDate={date}
						/>
					</div>
				)
			}

			{
				params.initDate && (
					<div className="date_box mt_0_8">
						<p className="date_box-title mb_0_5">
							<strong>Tiempo transcurrido:</strong>
							<span>({moment(params.initDate).format('LLL')})</span>
						</p>

						<CountDownAndUp
							startDate={params.initDate}
							currentDate={date}
							className="count_down"
						/>
					</div>
				)
			}


		</div>
	)
}

export default Clock
