import React from 'react';
import styles from '../../../styles/modules/generator.module.scss';

interface TimeFormatProps {
	timeFormat: string | undefined;
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
						value={this.props.timeFormat}
						onChange={this.props.onChange}
					></input>
					<a
						href='https://day.js.org/docs/en/display/format'
						className={styles.link}
					>
						{' '}
						For more info click here
					</a>
				</label>
			</div>
		);
	}
}
