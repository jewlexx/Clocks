import React from 'react';

class ColorInput extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { valueBG: '', valueFG: '' };
    }

    render() {
        return (
            <div id="color-inputs">
                <label className="color-input">
                    Time Color{' #'}
                    <input
                        type="text"
                        id="fg-color-input"
                        value={this.props['state']['valueFG']}
                        onChange={this.props['onChangeFG']}
                    ></input>
                    {' (Currently only supports HEX)'}
                </label>
                <br></br>
                <label id="background-color-input-label">
                    Background Color{' #'}
                    <input
                        type="text"
                        id="bg-color-input"
                        value={this.props['state']['valueBG']}
                        onChange={this.props['onChangeBG']}
                    ></input>
                    {' (Currently only supports HEX)'}
                </label>
            </div>
        );
    }
}

export { ColorInput };
