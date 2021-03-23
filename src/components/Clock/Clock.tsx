const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
import React from 'react';
import dayjs from 'dayjs';

let timeFormat = 'h:mm:ss A';

if (urlParams.has('format') && urlParams.get('format')) {
    timeFormat = urlParams.get('format');
}

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
            time: dayjs().format(timeFormat),
        };
        setInterval(
            () => this.setState({ time: dayjs().format(timeFormat) }),
            1000
        );

        if (queryString !== '') {
            document.getElementById('root').classList.value = 'clock';
        }

        if (urlParams.has('bgcolor')) {
            if (urlParams.get('bgcolor') === '**pride**') {
                document.getElementById('root').classList.value = 'pride-clock';
            } else if (urlParams.get('bgcolor') === '**transparent**') {
                document.getElementById('root').classList.value =
                    'transparent-clock';
                document.getElementsByTagName('body')[0].style.background =
                    'none';
                document.getElementsByTagName('body')[0].style.backgroundColor =
                    'transparent';
            } else {
                document.getElementById('root').style.backgroundColor =
                    '#' + urlParams.get('bgcolor');
            }
        }
    }

    render() {
        console.debug(
            timeFormat === undefined ? 'No time format specified' : timeFormat
        );

        // document.getElementsByTagName('body')[0].style.backgroundColor = '#FFF';
        document.getElementsByTagName('body')[0].classList.value = 'time-div';
        return (
            <div className="time-div clock">
                <p className="time" style={{ color: getColor() }}>
                    {this.state['time']}
                </p>
            </div>
        );
    }
}

export { Clock };
