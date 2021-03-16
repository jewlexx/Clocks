import React from 'react';
const clockList = ['basic', 'pride', 'black', 'white', 'transparent'];

class SelectClock extends React.Component {
    render() {
        return (
            <div className="SelectClock">
                {clockList.map((item) => (
                    <button key={clockList.indexOf(item)} className="btn-clock">
                        {item.substring(0, 1).toUpperCase() + item.slice(1)}
                    </button>
                ))}
                <button className="btn-clock" style={{ cursor: 'progress' }}>
                    More coming soon
                </button>
            </div>
        );
    }
}

export { SelectClock };
