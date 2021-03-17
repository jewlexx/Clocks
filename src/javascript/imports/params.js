const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function setClock(clock) {
    document.getElementById('root').classList = `${clock}-clock`;
    console.debug('Successfully set the clock to ' + clock);
}

class UrlParameters {
    constructor() {
        this.color = '#000';
        this.bgColor = '#FFF';
        this.clockEnabled = queryString !== '';
        this.format = 'h:mm:ss A';

        if (urlParams.has('24hour') && urlParams.get('24hour') === 'true') {
            this.format = 'HH:mm:ss';
            this.clockEnabled = true;
        }

        // TODO Make pride toggle disable bg color input and remove other options

        if (urlParams.has('seconds') && urlParams.get('seconds') === 'false') {
            this.format = this.format.slice().replace(':ss', '');
            this.clockEnabled = true;
        }

        if (urlParams.has('background-color')) {
            this.bgColor = '#' + urlParams.get('background-color');
            this.clockEnabled = true;
        }
    }
}

export { UrlParameters };
