import React from 'react';
import $ from 'jquery';
import ClockSelect from './lib/ClockSelect';
import ColorInput from './lib/ColorInput';
import TimeFormat from './lib/TimeFormat';

interface GeneratorState {
	timeFormat: string;
	bgColor: string;
	fgColor: string;
}

class Generator extends React.Component<any, GeneratorState> {
	constructor(props: null) {
		super(props);
		this.state = {
			timeFormat: 'h:mm:ss A',
			fgColor: '000',
			bgColor: 'FFF',
		};

		this.handleGenerate = this.handleGenerate.bind(this);
	}

	handleGenerate(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		const urlParams = [];

		// Var definitions
		const clockSelect = document.getElementById(
			'clock-selector'
		) as HTMLSelectElement;

		// Checks to see if any of the options are not the defaults and then if they aren't push them to the array
		if (clockSelect.value === 'custom') {
			urlParams.push('bgcolor=' + this.state.bgColor || 'FFF');
		} else {
			urlParams.push('bgcolor=**' + clockSelect.value + '**');
		}

		if (this.state.fgColor) urlParams.push('color=' + this.state.fgColor);

		urlParams.push('format=' + (this.state.timeFormat || 'h:mm:ss A'));

		// Adds all the items from the array to the url
		let finalUrl = window.location.href + 'clock' + '?';

		finalUrl += urlParams.join('&').split(' ').join('%20');

		// Saves the url to clipboard
		navigator.clipboard.writeText(finalUrl);

		// Opens this url in a new tab
		window.open(finalUrl, '_blank');
	}

	render() {
		return (
			<div id='ClockGenerator'>
				<button className='gen-button' onClick={this.handleGenerate}>
					Generate URL
				</button>

				<ClockSelect clocks={['custom', 'pride', 'transparent']} />

				<TimeFormat
					onChange={e =>
						this.setState({ timeFormat: e.target.value })
					}
					timeFormat={this.state.timeFormat}
				/>

				<ColorInput
					valueFG={this.state.fgColor}
					valueBG={this.state.bgColor}
					onChangeFG={e => {
						if (!(e.target.value.length > 8))
							this.setState({ fgColor: e.target.value });
					}}
					onChangeBG={e => {
						if (!(e.target.value.length > 8))
							this.setState({ bgColor: e.target.value });
					}}
				/>
			</div>
		);
	}
}

export { Generator };
