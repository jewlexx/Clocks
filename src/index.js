import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './javascript/components/Clock';
import { Generator } from './javascript/components/Generator/Generator';
import { UrlParameters } from './javascript/imports/params';
import './styles/index.scss';

const params = new UrlParameters();

export const timeFormat = params.format;
export const color = params.color;
export const clock = params.clock;

console.debug(window.location.href);

if (params.clockEnabled) {
    ReactDOM.render(<Clock />, document.getElementById('root'));
} else {
    ReactDOM.render(<Generator />, document.getElementById('root'));
}
