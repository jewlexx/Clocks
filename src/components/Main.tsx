import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './Clock/Clock';
import { Generator } from './Generator/Generator';

if (window.location.href.includes('?')) {
    ReactDOM.render(<Clock />, document.getElementById('root'));
    const background = document.getElementById('bg');
    background.parentElement.removeChild(background);
} else {
    ReactDOM.render(<Generator />, document.getElementById('root'));
}
