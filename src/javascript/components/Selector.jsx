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
                        onClick={() => props.onClickCheckbox(index)}
                    ></input>
                </label>
            ))}
            <button
                className="btn-clock"
                onClick={() => props.onClickGenerate()}
            >
                Generate
            </button>
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

    handleButtonClick() {
        navigator.clipboard.writeText(
            window.location.href +
                '?clock=' +
                clockList
                    .filter(
                        (_item, i) =>
                            document.getElementsByTagName('input')[i].checked
                    )
                    .join('')
        );
    }

    render() {
        return (
            <SelectClock
                onClickCheckbox={this.handleClickCheck}
                onClickGenerate={this.handleButtonClick}
            />
        );
    }
}

export { Selector as ClockSelector };
