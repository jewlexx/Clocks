import React from 'react';
import { ClockSelect } from './lib/ClockSelect.jsx';
import { ColorInput } from './lib/ColorInput.jsx';

// TODO Fix generate button placement
class Generator extends React.Component {
    render() {
        return (
            <form id="ClockGenerator">
                <ClockSelect />
                <ColorInput />

                <button
                    className="btn-clock"
                    onClick={(e) => {
                        e.preventDefault();
                        const urlParams = [];
                        let finalUrl = window.location.href;

                        // Var definitions
                        const prideClockCheck = document.getElementById(
                            'pride-clock-checkbox'
                        );
                        const bgColorIn = document.getElementById(
                            'background-color-input'
                        );
                        const colorIn = document.getElementById(
                            'clock-color-input'
                        );

                        // Checks some stuff and pushes to the array
                        if (prideClockCheck.checked) {
                            urlParams.push('bgcolor=**pride**');
                        } else if (bgColorIn.value) {
                            urlParams.push('color=' + bgColorIn.value);
                        }

                        if (colorIn.value) {
                            urlParams.push('color=' + colorIn.value);
                        }

                        finalUrl +=
                            urlParams.length > 0
                                ? '?' + urlParams.join('&')
                                : '';

                        navigator.clipboard.writeText(finalUrl);
                        alert('Saved the url to clipboard!\n' + finalUrl);
                        window.open(finalUrl, '_blank');
                    }}
                >
                    Generate URL
                </button>
            </form>
        );
    }
}

export { Generator };
