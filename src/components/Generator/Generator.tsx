import React from 'react';
import { ClockSelect } from './lib/ClockSelect';
import { ColorInput } from './lib/ColorInput';
import { TimeFormat } from './lib/TimeFormat';
import { GenButton } from './lib/GenButton';

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeFormat: 'h:mm:ss A',
            valueFG: '',
            valueBG: '',
        };
    }

    handleChangeFG(event) {
        if (
            this.state['valueFG'].length >= 8 &&
            event.target.value.length > 8
        ) {
            return;
        }
        this.setState({ valueFG: event.target.value });
    }

    handleChangeBG(event) {
        this.setState({ valueBG: event.target.value });
    }

    handleChangeTimeFormat(event) {
        this.setState({ timeFormat: event.target.value });
    }

    handleGenerate(event) {
        event.preventDefault();
        const urlParams = [];

        // Var definitions
        const prideClockCheck = document.getElementById(
            'pride-clock-checkbox'
        ) as HTMLInputElement;

        // Checks to see if any of the options are not the defaults and then if they aren't push them to the array
        if (prideClockCheck.checked) urlParams.push('bgcolor=**pride**');
        else if (this.state['valueBG'])
            urlParams.push('bgcolor=' + this.state['valueBG']);

        if (this.state['valueFG'])
            urlParams.push('color=' + this.state['valueFG']);

        urlParams.push('format=' + (this.state['timeFormat'] || 'h:mm:ss A'));

        // Adds all the items from the array to the url
        let finalUrl =
            window.location.href + '?' + urlParams.length
                ? urlParams.join('&').split(' ').join('%20')
                : '';

        // Saves the url to clipboard
        navigator.clipboard.writeText(finalUrl);

        // Opens this url in a new tab
        window.open(finalUrl, '_blank');
    }

    render() {
        return (
            <div id="ClockGenerator">
                <GenButton onClick={(e) => this.handleGenerate(e)} />

                <ClockSelect />

                <TimeFormat
                    onChange={(e) => this.handleChangeTimeFormat(e)}
                    state={this.state}
                />

                <ColorInput
                    state={this.state}
                    onChangeBG={(e) => this.handleChangeBG(e)}
                    onChangeFG={(e) => this.handleChangeFG(e)}
                />
            </div>
        );
    }
}

export { Generator };
