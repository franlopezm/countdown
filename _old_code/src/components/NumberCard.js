import React from 'react'
import './numberCard.scss'

export default ({ number, title }) => {
	return (
		<div className="number_box">
			<div className="number_box-title">{title}</div>
			<div className="number_box-number">{number}</div>
		</div>
	)
}
