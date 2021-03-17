import React from 'react';
import { ClockSelect } from './lib/ClockSelect.jsx';
import { ColorInput } from './lib/ColorInput.jsx';
import { TimeFormat } from './lib/TimeFormat.jsx';
import { GenButton } from './lib/GenButton.jsx';

// TODO Fix generate button placement
class Generator extends React.Component {
    render() {
        return (
            <div id="ClockGenerator">
                <GenButton />
                <ClockSelect /*Choose between fully custom or a pre-defined
                background for the Pride clock*/
                />
                <TimeFormat /*// Choose the time format (more options coming
                soon)*/
                />
                <ColorInput /*Input a colour in HEX format*/ />
            </div>
        );
    }
}

export { Generator };
