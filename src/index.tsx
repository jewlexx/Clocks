import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clock from '@components/Clock/Clock';
import Generator from '@components/Generator/Generator';
import '@styles/global.scss';

function Home() {
	return (
		<Router>
			<Switch>
				<Route path='/clock'>
					<Clock />
				</Route>
				<Route path='/'>
					<Generator />
				</Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<Home />, document.getElementById('root'));
