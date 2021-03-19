import React from 'react';
import { ClockSelect } from './lib/ClockSelect';
import { ColorInput } from './lib/ColorInput';
import { TimeFormat } from './lib/TimeFormat';
import { GenButton } from './lib/GenButton';

class Generator extends React.Component {
    render() {
        return (
            <div id="ClockGenerator">
                <GenButton /*Generation button*/ />
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
