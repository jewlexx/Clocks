import React from 'react';

class ColorInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valueBG: '', valueFG: '' };

        this.handleChangeFG = this.handleChangeFG.bind(this);
        this.handleChangeBG = this.handleChangeBG.bind(this);
    }

    handleChangeFG(event) {
        if (this.state.valueFG.length >= 8 && event.target.value.length > 8) {
            return;
        }
        this.setState({ valueFG: event.target.value });
    }

    handleChangeBG(event) {
        this.setState({ valueBG: event.target.value });
    }

    render() {
        return (
            <div id="color-inputs">
                <label className="color-input">
                    Time Color:{' #'}
                    <input
                        type="text"
                        id="clock-color-input"
                        value={this.state.valueFG}
                        onChange={this.handleChangeFG}
                    ></input>{' '}
                    <br></br>
                </label>
                <label>
                    Background Color:{' #'}
                    <input
                        type="text"
                        id="background-color-input"
                        value={this.state.valueBG}
                        onChange={this.handleChangeBG}
                    ></input>
                </label>
            </div>
        );
    }
}

export { ColorInput };
