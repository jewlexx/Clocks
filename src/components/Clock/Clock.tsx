import React from 'react';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import dayjs from 'dayjs';
import styles from '@styles/modules/clock.module.scss';

let timeFormat = urlParams.get('format') || 'h:mm:ss A';

interface ClockState {
	time: string;
}

export default class Clock extends React.Component<any, ClockState> {
	constructor(props: any) {
		super(props);
		this.state = {
			time: dayjs().format(timeFormat),
		};

		const docRoot = document.getElementById('root') as HTMLDivElement;

		setInterval(
			() => this.setState({ time: dayjs().format(timeFormat) }),
			1000
		);

		if (queryString !== '') {
			docRoot.classList.add(styles.clock);
		}

		if (urlParams.has('bgColor')) {
			if ((urlParams.get('bgColor') as string).includes('**')) {
				docRoot.classList.add(
					styles[
						(urlParams.get('bgColor') as string).replace(
							/\*\*/g,
							''
						) + '-clock'
					]
				);
			} else {
				docRoot.style.backgroundColor = '#' + urlParams.get('bgColor');
			}
		}
	}

	getColor() {
		let colorParam = urlParams.get('clock') !== 'black' ? '#000' : '#FFF';
		if (urlParams.has('color')) {
			colorParam = '#' + urlParams.get('color');
		}
		return colorParam;
	}

	render() {
		console.debug(
			timeFormat === undefined ? 'No time format specified' : timeFormat
		);

		document.body.classList.add(styles.timeDiv);
		return (
			<div className={styles.clock}>
				<p className={styles.time} style={{ color: this.getColor() }}>
					{this.state.time}
				</p>
			</div>
		);
	}
}
