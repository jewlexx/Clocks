import React from 'react';
import dayjs from 'dayjs';
import { timeFormat } from '../..';

console.debug(timeFormat === undefined ? 'No time format' : timeFormat);

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
        document.getElementsByTagName('body')[0].classList = 'time-body';
        return (
            <div className="time-div">
                <p className="time">{this.state.time}</p>
            </div>
        );
    }
}

export { Time };
