import React from 'react';
const clockList = ['basic', 'pride', 'black', 'white', 'transparent'];

class SelectClock extends React.Component {
    render() {
        return (
            <div className="SelectClock">
                <button>
                    Selector coming soon... For now checkout the{' '}
                    <a href="https://github.com/jamesinaxx/Clocks/blob/public/README.md">
                        README
                    </a>
                    for instructions
                </button>
            </div>
        );
    }
}

export { SelectClock };
