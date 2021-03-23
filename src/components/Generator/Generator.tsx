import $ from 'jquery';
import React, { ChangeEvent } from 'react';
import { ClockSelect } from './lib/ClockSelect';
import { ColorInput } from './lib/ColorInput';
import { TimeFormat } from './lib/TimeFormat';
import { GenButton } from './lib/GenButton';

const clocks = ['custom', 'pride', 'transparent'];

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeFormat: 'h:mm:ss A',
            valueFG: '000',
            valueBG: 'FFF',
        };
    }

    handleGenerate(event: ChangeEvent) {
        event.preventDefault();
        const urlParams = [];

        // Var definitions
        const customInput = document.getElementById(
            'custom-clock-checkbox'
        ) as HTMLInputElement;

        const inputElems = $('.checkbox-clock').toArray();

        // Checks to see if any of the options are not the defaults and then if they aren't push them to the array
        if (customInput.checked)
            urlParams.push('bgcolor=' + this.state['valueBG'] || 'FFF');
        else
            urlParams.push(
                'bgcolor=**' +
                    inputElems
                        .filter((val) => (val as HTMLInputElement).checked)[0]
                        .id.split('-')[0] +
                    '**'
            );

        if (this.state['valueFG'])
            urlParams.push('color=' + this.state['valueFG']);

        urlParams.push('format=' + (this.state['timeFormat'] || 'h:mm:ss A'));

        // Adds all the items from the array to the url
        let finalUrl = window.location.href + '?';

        finalUrl += urlParams.length
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

                <ClockSelect clocks={clocks} />

                <TimeFormat
                    onChange={(e) =>
                        this.setState({ timeFormat: e.target.value })
                    }
                    state={this.state}
                />

                <ColorInput
                    state={this.state}
                    onChangeFG={(e) => {
                        if (!(e.target.value.length > 8))
                            this.setState({ valueFG: e.target.value });
                    }}
                    onChangeBG={(e) => {
                        if (!(e.target.value.length > 8))
                            this.setState({ valueBG: e.target.value });
                    }}
                />
            </div>
        );
    }
}

export { Generator };
