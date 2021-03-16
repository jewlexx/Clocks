import React from 'react';

class ColorInput extends React.Component {
    render() {
        return (
            <div>
                <label className="color-input">
                    Color: <input type="" text="#"></input>{' '}
                </label>
            </div>
        );
    }
}

export { ColorInput };
