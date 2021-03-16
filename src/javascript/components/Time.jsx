import React from 'react';
import dayjs from 'dayjs';
import { timeFormat, color, clock } from '../..';

const formatTime = () => {
    if (timeFormat !== undefined) {
        return dayjs().format(timeFormat);
    }
};

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: formatTime(),
        };
        setInterval(() => this.setState({ time: formatTime() }), 1000);
    }

    render() {
        console.debug(
            timeFormat === undefined ? 'No time format specified' : timeFormat
        );
        document.getElementsByTagName('body')[0].classList = 'time-body';
        return (
            <div className="time-div">
                <p className="time" style={{ color: color }}>
                    {this.state.time}
                </p>
            </div>
        );
    }
}

export { Time };
