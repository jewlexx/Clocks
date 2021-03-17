import React from 'react';

class TimeFormat extends React.Component {
    render() {
        return (
            <div>
                <label>
                    24 Hour Time:{' '}
                    <input type="checkbox" id="24-hour-time-check"></input>
                </label>
                <label>
                    Show seconds:{' '}
                    <input
                        type="checkbox"
                        id="seconds-check"
                        defaultChecked
                    ></input>
                </label>
            </div>
        );
    }
}

export { TimeFormat };
