import React from 'react';
import { Component } from 'react';
import Head from 'next/head';
import ClockSelect from '@components/ClockSelect';
import ColorInput from '@components/ColorInput';
import TimeFormat from '@components/TimeFormat';
import styles from '@styles/modules/generator.module.scss';
import type { GeneratorState } from '@typings/Generator';

export default class Generator extends Component<any, GeneratorState> {
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
		const clockUrl = new URL(window.location.href);
		clockUrl.pathname = '/clock/';

		// Var definitions
		const clockSelect = document.getElementById(
			'clock-selector'
		) as HTMLSelectElement;

		clockUrl.searchParams.append(
			'bgColor',
			clockSelect.value === 'custom'
				? this.state.bgColor || 'fff'
				: `**${clockSelect.value}**`
		);

		clockUrl.searchParams.append('color', this.state.fgColor || '000');

		clockUrl.searchParams.append(
			'format',
			this.state.timeFormat || 'h:mm:ss A'
		);

		// Saves the url to clipboard
		navigator.clipboard.writeText(clockUrl.href);

		// Opens this url in a new tab
		window.open(clockUrl.href, '_blank');
	}

	render() {
		return (
			<div className={styles.clockGenerator}>
				<Head>
					<title>Clock Generator</title>
				</Head>
				<button
					className={styles.genButton}
					onClick={this.handleGenerate}
				>
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
