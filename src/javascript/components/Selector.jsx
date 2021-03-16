import React from 'react';
const clockList = ['basic', 'pride', 'black', 'white'];

function SelectClock() {
    document.getElementById('root').classList = 'dark-mode';
    return (
        <div className="SelectClock">
            {clockList.map((item) => (
                <label className="lbl-clock">
                    {item.substring(0, 1).toUpperCase() + item.slice(1)}{' '}
                    <input type="checkbox"></input>
                </label>
            ))}
            <button className="lbl-clock" style={{ cursor: 'progress' }}>
                More coming soon
            </button>
        </div>
    );
}

class Selector extends React.Component {
    handleClick(i) {
        window.open(window.location.href + '?clock=' + i, '_blank');
    }

    render() {
        return <SelectClock />;
    }
}

export { Selector as ClockSelector };
