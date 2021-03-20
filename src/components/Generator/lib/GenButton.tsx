import React from 'react';

function GenButton(props) {
    return (
        <button className="gen-button" onClick={props['onClick']}>
            Generate URL
        </button>
    );
}

export { GenButton };
