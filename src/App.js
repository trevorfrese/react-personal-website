import React, { Component } from 'react';
// import Particles from './components/Particles/Particles';
import HomePage from './components/HomePage/HomePage';
import Work from './components/Work/Work';

import { Switch, Route, withRouter } from 'react-router-dom';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Contact from './components/Contact/Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						path="/"
						component={HomePage}
					/>
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
