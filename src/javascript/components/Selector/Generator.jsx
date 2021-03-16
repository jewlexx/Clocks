import React from 'react';
import { ClockSelect } from './lib/ClockSelect';
// TODO Find a better, or automatic way to generate an array of available clocks
const clockList = ['basic', 'pride', 'black', 'white'];

class Generator extends React.Component {
    render() {
        return (
            <div className="ClockGenerator">
                <ClockSelect clockList={clockList} />
            </div>
        );
    }
}

export { Generator };
