import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import Home from './js/home'
import Services from './js/services'
import Portfolio from './js/portfolio'
import About from './js/about'
import Contact from './js/contact'

export default () => {
	return(
		<Switch>
			<Route path={"/home"} exact >
				<Home />
			</Route>
			<Route path="/services" component={Services} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Redirect to="/home" />
		</Switch>
	)
}