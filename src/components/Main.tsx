import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './Clock/Clock';
import { Generator } from './Generator/Generator';

const root = document.getElementById('root');

if (window.location.href.includes('?')) {
    ReactDOM.render(<Clock />, root);
    $('#bg').remove();
} else {
    ReactDOM.render(<Generator />, root);
}
