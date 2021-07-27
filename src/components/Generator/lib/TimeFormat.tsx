import React from 'react';

interface TimeFormatProps {
	timeFormat: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class TimeFormat extends React.Component<TimeFormatProps> {
	constructor(props: TimeFormatProps) {
		super(props);
	}

	render() {
		return (
			<div>
				<label>
					Time Format{': '}
					<input
						type='text'
						id='timeFormatInput'
						value={this.props.timeFormat}
						onChange={this.props.onChange}
					></input>
					<a
						href='https://day.js.org/docs/en/display/format'
						className='link'
					>
						{' '}
						For more info click here
					</a>
				</label>
			</div>
		);
	}
}
