import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './javascript/components/Clock.jsx';
import { Generator } from './javascript/components/Generator/Generator.jsx';
import { UrlParameters } from './javascript/imports/params.js';
import './styles/index.scss';

// TODO Add cookies to remember your input so if you reload on accident it doesn't clear

const params = new UrlParameters();

const timeFormat = params.format;
const color = params.color;
const bgColor = params.bgColor;
const clock = params.clock;

if (params.clockEnabled) {
    ReactDOM.render(<Clock />, document.getElementById('root'));
    document.getElementsByTagName('body')[0].style.backgroundColor = bgColor;
} else {
    ReactDOM.render(<Generator />, document.getElementById('root'));
}

export { timeFormat, color, clock, bgColor };
