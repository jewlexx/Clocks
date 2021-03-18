import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './components/Clock';
import { Generator } from './components/Generator/Generator';
import './styles/index.scss';

// TODO Add cookies to remember your input so if you reload on accident it doesn't clear

if (window.location.href.includes('?')) {
    ReactDOM.render(
        React.createElement(Clock),
        document.getElementById('root')
    );
    const background = document.getElementById('bg');
    background.parentElement.removeChild(background);
} else {
    ReactDOM.render(
        React.createElement(Generator),
        document.getElementById('root')
    );
}
