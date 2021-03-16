import React from 'react';
const clockList = ['basic', 'pride', 'black', 'white'];

function SelectClock(props) {
    // document.getElementById('root').classList = 'dark-mode';
    return (
        <div className="SelectClock">
            {clockList.map((item, index) => (
                <button
                    key={index}
                    className="btn-clock"
                    onClick={() => props.onClick(clockList[index])}
                >
                    {item.substring(0, 1).toUpperCase() + item.slice(1)}
                </button>
            ))}
            <button className="btn-clock" style={{ cursor: 'progress' }}>
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
        return <SelectClock onClick={this.handleClick} />;
    }
}

export { Selector as ClockSelector };
