import React, { useState, useEffect } from 'react'
import "./counters.scss"

import decodeBase64 from 'utils/decodeBase64'
import DateAndTime from 'utils/DateAndTime'

import CountDownAndUp from './CountDownAndUp'


function tick(setDate) {
    setDate(new DateAndTime(new Date().toISOString()))
}

function Clock(props) {
    const [date, setDate] = useState(new DateAndTime(new Date().toISOString()))
    const [params, setParams] = useState({ initDate: null, endDate: null, timezone: null })

    useEffect(() => {
        const { match = {} } = props
        const decodeParams = decodeBase64(match.params.id)

        setParams({
            endDate: new DateAndTime(decodeParams.endDate, decodeParams.timezone),
            initDate: new DateAndTime(decodeParams.initDate),
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
                <p className="date_box-date">{date.format()}</p>
            </div>

            {
                params.endDate && (
                    <div className="date_box">
                        <p className="date_box-title mb_0_5">
                            <strong>Tiempo restante:</strong>
                            <span>({params.endDate.format()})</span>
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
                            <span>({params.initDate.format()})</span>
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
