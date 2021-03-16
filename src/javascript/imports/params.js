const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function setClock(clock) {
    document.getElementById('root').classList = `${clock}-clock`;
    console.debug('Successfully set the clock to ' + clock);
}

class UrlParameters {
    constructor() {
        this.clockEnabled = true;
        this.format = 'h:mm:ss A';
        if (urlParams.has('clock')) {
            setClock(urlParams.get('clock'));
        } else {
            this.clockEnabled = false;
        }

        if (urlParams.has('24hour') && urlParams.get('24hour') === 'true') {
            this.format = 'HH:mm:ss';
        }

        if (urlParams.has('seconds') && urlParams.get('seconds') === 'false') {
            this.format = this.format.slice().replace(':ss', '');
        }
    }
}

export { UrlParameters };
