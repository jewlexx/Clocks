import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './javascript/components/Clock.jsx';
import { Generator } from './javascript/components/Generator/Generator.jsx';
import './styles/index.scss';

// TODO Add cookies to remember your input so if you reload on accident it doesn't clear

if (window.location.href.includes('?')) {
    ReactDOM.render(
        React.createElement(Clock),
        document.getElementById('root')
    );
} else {
    ReactDOM.render(
        React.createElement(Generator),
        document.getElementById('root')
    );
}
