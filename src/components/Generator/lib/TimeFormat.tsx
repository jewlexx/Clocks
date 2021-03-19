import React from 'react';

class TimeFormat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'h:mm:ss A' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <label>
                    Time Format{' '}
                    <input
                        type="text"
                        id="timeFormatInput"
                        onChange={this.handleChange}
                    ></input>
                </label>
            </div>
        );
    }
}

export { TimeFormat };
