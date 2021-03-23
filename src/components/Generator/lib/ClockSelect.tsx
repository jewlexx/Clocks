import $ from 'jquery';
import React from 'react';

class ClockSelect extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    handleChange(caller) {
        // I CAN'T HANDLE CHANGE
        const inputElems = $('.checkbox-clock').toArray();

        for (let i = 0; i < inputElems.length; i++) {
            const elem = inputElems[i] as HTMLInputElement;
            elem.checked = elem.id.split('-')[0] === caller;
        }

        if (caller !== 'custom')
            $('#background-color-input-label').hide('fast');
        else $('#background-color-input-label').show('fast');
    }

    render() {
        return (
            <div>
                {this.props['clocks'].map((item, index) => (
                    <label className="lbl-clock" key={index}>
                        {item.substring(0, 1).toUpperCase() + item.substring(1)}
                        <input
                            type="checkbox"
                            className="checkbox-clock"
                            id={item + '-clock-checkbox'}
                            onClick={() => {
                                this.handleChange(item);
                            }}
                            defaultChecked={item === 'custom'}
                        ></input>
                    </label>
                ))}
            </div>
        );
    }
}

export { ClockSelect };
