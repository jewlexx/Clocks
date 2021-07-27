import $ from 'jquery';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import React from 'react';
import dayjs from 'dayjs';

let timeFormat = 'h:mm:ss A';

if (urlParams.has('format') && urlParams.get('format')) {
	timeFormat = urlParams.get('format');
}

const getColor = () => {
	let colorParam = urlParams.get('clock') !== 'black' ? '#000' : '#FFF';
	if (urlParams.has('color')) {
		colorParam = '#' + urlParams.get('color');
	}
	return colorParam;
};

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: dayjs().format(timeFormat),
		};
		setInterval(
			() => this.setState({ time: dayjs().format(timeFormat) }),
			1000
		);

		if (queryString !== '') {
			$('#root').removeClass().addClass('clock');
		}

		if (urlParams.has('bgcolor')) {
			if (urlParams.get('bgcolor').includes('**'))
				$('#root')
					.removeClass()
					.addClass(
						urlParams.get('bgcolor').replace(/\*\*/g, '') + '-clock'
					);
			else
				$('#root').css(
					'background-color',
					'#' + urlParams.get('bgcolor')
				);
		}
	}

	render() {
		console.debug(
			timeFormat === undefined ? 'No time format specified' : timeFormat
		);

		$('body').removeClass().addClass('time-div');
		return (
			<div className='time-div clock'>
				<p className='time' style={{ color: getColor() }}>
					{this.state['time']}
				</p>
			</div>
		);
	}
}

export { Clock };
