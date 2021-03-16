import React from 'react';
const clockList = ['basic', 'pride', 'black', 'white'];

function SelectClock(props) {
    document.getElementById('root').classList = 'dark-mode';
    return (
        <div className="SelectClock">
            {clockList.map((item, index) => (
                <label className="lbl-clock" key={index}>
                    {item.substring(0, 1).toUpperCase() + item.slice(1)}
                    <input
                        type="checkbox"
                        className="checkbox-clock"
                        id={'numberInArray' + index}
                        onClick={() => props.onClick(index)}
                    ></input>{' '}
                    <br></br>
                </label>
            ))}
        </div>
    );
}

class Selector extends React.Component {
    handleClickCheck(clickedIndex) {
        for (
            let i = 0;
            i < document.getElementsByTagName('input').length;
            i++
        ) {
            if (clickedIndex !== i) {
                document.getElementsByTagName('input')[i].checked = false;
            }
        }
    }

    render() {
        return <SelectClock onClick={this.handleClickCheck} />;
    }
}

export { Selector as ClockSelector };
