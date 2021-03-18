import React from 'react';

function GenButton() {
    return (
        <button
            className="gen-button"
            onClick={(e) => {
                e.preventDefault();
                const urlParams = [];
                let finalUrl = window.location.href + '?';

                // Var definitions
                const prideClockCheck = document.getElementById(
                    'pride-clock-checkbox'
                ) as HTMLInputElement;

                const bgColorIn = document.getElementById(
                    'background-color-input'
                ) as HTMLInputElement;

                const colorIn = document.getElementById(
                    'clock-color-input'
                ) as HTMLInputElement;

                const time24 = document.getElementById(
                    '24-hour-time-check'
                ) as HTMLInputElement;

                const seconds = document.getElementById(
                    'seconds-check'
                ) as HTMLInputElement;

                // Checks to see if any of the options are not the defaults and then if they aren't push them to the array
                if (prideClockCheck.checked) {
                    urlParams.push('bgcolor=**pride**');
                } else if (bgColorIn.value) {
                    urlParams.push('bgcolor=' + bgColorIn.nodeValue);
                }

                if (colorIn.value) {
                    urlParams.push('color=' + colorIn.value);
                }

                if (!seconds.checked) {
                    urlParams.push('seconds=false');
                }

                if (time24.checked) {
                    urlParams.push('24hour=true');
                }

                // Adds all the items from the array to the url
                finalUrl += urlParams.length > 0 ? urlParams.join('&') : '';

                // Saves the url to clipboard
                navigator.clipboard.writeText(finalUrl);

                // Alerts you of this
                alert('Saved the url to clipboard!\n' + finalUrl);

                // Opens this url in a new tab
                window.open(finalUrl, '_blank');
            }}
        >
            Generate URL
        </button>
    );
}

export { GenButton };
