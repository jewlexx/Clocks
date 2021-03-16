import React from 'react';

function ColorInput(props) {
    return (
        <div>
            <label className="color-input">
                Color:{' '}
                <input
                    onChange={props.onChange}
                    type="text"
                    name="color-text-input"
                    id="clock-color-input"
                ></input>{' '}
            </label>
        </div>
    );
}

export { ColorInput };
