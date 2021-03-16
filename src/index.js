import React from 'react';
import ReactDOM from 'react-dom';
import { Time } from './javascript/components/Time';
import { SelectClock } from './javascript/components/Selector';
import { UrlParameters } from './javascript/imports/params';
import './styles/index.scss';

const params = new UrlParameters();

const timeFormat = params.format;

export { timeFormat };

console.debug(window.location.href);

if (params.clockEnabled) {
    ReactDOM.render(<Time />, document.getElementById('root'));
} else {
    ReactDOM.render(<SelectClock />, document.getElementById('root'));
}
