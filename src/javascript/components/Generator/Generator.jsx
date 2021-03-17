import React from 'react';
import { ClockSelect } from './lib/ClockSelect';
import { ColorInput } from './lib/ColorInput';
// TODO Find a better, or automatic way to generate an array of available clocks
const clockList = ['basic', 'pride', 'black', 'white'];

// TODO Fix generate button placement

// TODO Finish colour input and add to generation
class Generator extends React.Component {
    render() {
        return (
            <form className="ClockGenerator">
                <ClockSelect clockList={clockList} />
                <ColorInput />

                <button
                    className="btn-clock"
                    onClick={(e) => {
                        e.preventDefault();
                        const urlParams = [];
                        let finalUrl = window.location.href;
                        const tickedClocks = clockList
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
                            urlParams.push('clock=' + tickedClocks[0]);
                        }
                        if (
                            document.getElementById('clock-color-input').value
                        ) {
                            urlParams.push(
                                'color=#' +
                                    document
                                        .getElementById('clock-color-input')
                                        .value.replace('#', '')
                            );
                        }
                        finalUrl = finalUrl + '?' + urlParams.join('&');
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
