import React from 'react';

interface ClockSelectProps {
	clocks: string[];
}

interface ClockSelectState {
	clock: string;
}

export default class ClockSelect extends React.Component<
	ClockSelectProps,
	ClockSelectState
> {
	constructor(props: ClockSelectProps) {
		super(props);

		this.state = {
			clock: 'custom',
		};
	}

	handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		this.setState({
			clock: event.target.value,
		});
	}

	render() {
		return (
			<div>
				<form>
					<select
						value={this.state.clock}
						onChange={this.handleChange}
						id='clock-selector'
					>
						{this.props.clocks.map(item => {
							const itemName =
								item.substr(0, 1).toUpperCase() +
								item.substr(1);
							return <option value={item}>{itemName}</option>;
						})}
					</select>
				</form>
			</div>
		);
	}
}
