const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import React from 'react';
import dayjs from 'dayjs';
import { timeFormat } from '../../index.js';

const formatTime = () => {
    if (timeFormat !== undefined) {
        return dayjs().format(timeFormat);
    }
};

const getColor = () => {
    let colorParam = urlParams.get('clock') !== 'black' ? '#000' : '#FFF';
    if (urlParams.has('color')) {
        colorParam = '#' + urlParams.get('color');
    }
    return colorParam;
};

class Clock extends React.Component {
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
                <p className="time" style={{ color: getColor() }}>
                    {this.state.time}
                </p>
            </div>
        );
    }
}

export { Clock };
