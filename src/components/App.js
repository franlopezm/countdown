import { Switch, Route, Redirect } from "react-router-dom";
import React from 'react'

import Home from './Home'
import Counters from './Counters'


export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/:id" component={Counters} />

			<Redirect to="/" />
		</Switch>
	)
}
