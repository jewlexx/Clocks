import React from 'react';

class ColorInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (this.state.value.length >= 7 && event.target.value.length > 7) {
            return;
        }
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <label className="color-input">
                    Color:{' #'}
                    <input
                        type="text"
                        id="clock-color-input"
                        value={this.state.value}
                        onChange={this.handleChange}
                    ></input>{' '}
                </label>
            </div>
        );
    }
}

export { ColorInput };
