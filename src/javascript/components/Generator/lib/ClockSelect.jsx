import React from 'react';

class ClockSelect extends React.Component {
    handleChange() {
        // I CAN'T HANDLE CHANGE
        const elem = document.getElementById('background-color-input-label');
        const cus = document.getElementById('custom-clock-checkbox');
        const b = document.getElementById('pride-clock-checkbox').checked;
        elem.hidden = b;
        cus.checked = !b;
    }

    render() {
        return (
            <div>
                <label className="lbl-clock" key="1">
                    {'Custom'}
                    <input
                        type="checkbox"
                        className="checkbox-clock"
                        id="custom-clock-checkbox"
                        onClick={() => {
                            document.getElementById(
                                'pride-clock-checkbox'
                            ).checked = false;
                            this.handleChange();
                        }}
                        defaultChecked
                    ></input>
                </label>
                <label className="lbl-clock" key="2">
                    {'Pride'}
                    <input
                        type="checkbox"
                        className="checkbox-clock"
                        id="pride-clock-checkbox"
                        onClick={() => {
                            document.getElementById(
                                'custom-clock-checkbox'
                            ).checked = false;
                            this.handleChange();
                        }}
                    ></input>
                </label>
            </div>
        );
    }
}

export { ClockSelect };
