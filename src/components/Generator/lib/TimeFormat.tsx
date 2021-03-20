import React from 'react';

class TimeFormat extends React.Component<any, any> {
    handleChange: any;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Time Format{' '}
                    <input
                        type="text"
                        id="timeFormatInput"
                        value={this.props['state']['timeFormat']}
                        onChange={this.props['onChange']}
                    ></input>
                    <a
                        href="https://day.js.org/docs/en/display/format"
                        className="link"
                    >
                        {' '}
                        For more info click here
                    </a>
                </label>
            </div>
        );
    }
}

export { TimeFormat };
