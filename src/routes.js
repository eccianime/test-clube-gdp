import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Favorites from './pages/Favorites';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/galeria" component={Gallery} />
				<Route path="/favoritos" component={Favorites} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}
