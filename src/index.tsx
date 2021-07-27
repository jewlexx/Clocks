import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import { Clock } from './components/Clock/Clock';
import { Generator } from './components/Generator/Generator';
import './styles/index.scss';

function Home() {
	if (window.location.href.includes('?')) {
		$('#bg').remove();
	}

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
