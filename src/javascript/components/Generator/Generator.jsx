import React from 'react';
import { ClockSelect } from './lib/ClockSelect';
import { ColorInput } from './lib/ColorInput';
// TODO Find a better, or automatic way to generate an array of available clocks
const clockList = ['basic', 'pride', 'black', 'white'];

let clockColor = null;

// TODO Fix generate button placement

// TODO Finish colour input and add to generation
class Generator extends React.Component {
    render() {
        return (
            <form className="ClockGenerator">
                <ClockSelect clockList={clockList} />
                <ColorInput
                    onChange={() => {
                        const value = document.getElementById(
                            'clock-color-input'
                        ).value;
                        console.log(value);
                    }}
                />

                <button
                    className="btn-clock"
                    onClick={() => {
                        let finalUrl = window.location.href;
                        const tickedClocks = props.clockList
                            .slice()
                            .filter(
                                (_item, i) =>
                                    document.getElementsByClassName(
                                        'checkbox-clock'
                                    )[i].checked
                            );
                        console.log(tickedClocks.length);
                        if (
                            !(
                                tickedClocks.length === 0 ||
                                tickedClocks.length > 1
                            )
                        ) {
                            finalUrl += '?clock=' + tickedClocks[0];
                        }
                        navigator.clipboard.writeText(finalUrl);
                        alert('Saved the url to clipboard!\n' + finalUrl);
                    }}
                >
                    Generate
                </button>
            </form>
        );
    }
}

export { Generator };
