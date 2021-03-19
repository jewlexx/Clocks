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
                        defaultValue={this.state['value']}
                        onChange={this.handleChange}
                    ></input>
                    <a
                        href="https://day.js.org/docs/en/display/format"
                        className="link"
                    >
                        {' '}
                        For more info click here
                    </a>
                </label>
            </div>
        );
    }
}

export { TimeFormat };
