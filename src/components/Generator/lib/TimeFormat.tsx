import React from 'react';

class TimeFormat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valueBG: '', valueFG: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {}

    render() {
        return (
            <div>
                <label>
                    Time Format <input type="text" id="timeFormatInput"></input>
                </label>
            </div>
        );
    }
}

export { TimeFormat };
