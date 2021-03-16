import React from 'react';

function ClockSelect(props) {
    document.getElementById('root').classList = 'dark-mode';
    return (
        <div>
            {props.clockList.map((item, index) => (
                <label className="lbl-clock" key={index}>
                    {item.substring(0, 1).toUpperCase() + item.slice(1)}
                    <input
                        type="checkbox"
                        className="checkbox-clock"
                        onClick={() => {
                            for (
                                let i = 0;
                                i <
                                document.getElementsByTagName('input').length;
                                i++
                            ) {
                                if (index !== i) {
                                    document.getElementsByTagName('input')[
                                        i
                                    ].checked = false;
                                }
                            }
                        }}
                    ></input>
                </label>
            ))}
            <button
                className="btn-clock"
                onClick={() => {
                    let finalUrl = window.location.href;
                    const tickedClocks = props.clockList
                        .slice()
                        .filter(
                            (_item, i) =>
                                document.getElementsByTagName('input')[i]
                                    .checked
                        );
                    console.log(tickedClocks.length);
                    if (
                        !(tickedClocks.length === 0 || tickedClocks.length > 1)
                    ) {
                        finalUrl += '?clock=' + tickedClocks[0];
                    }
                    navigator.clipboard.writeText(finalUrl);
                    alert('Saved the url to clipboard!\n' + finalUrl);
                }}
            >
                Generate
            </button>
        </div>
    );
}

export { ClockSelect };
