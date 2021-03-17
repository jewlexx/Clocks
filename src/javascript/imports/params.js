const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

class UrlParameters {
    constructor() {
        this.color = '#000';
        this.bgColor = '#FFF';
        this.clockEnabled = queryString !== '';
        this.format = 'h:mm:ss A';

        if (urlParams.has('24hour') && urlParams.get('24hour') === 'true') {
            this.format = 'HH:mm:ss';
        }

        if (urlParams.has('seconds') && urlParams.get('seconds') === 'false') {
            this.format = this.format.slice().replace(':ss', '');
        }

        if (urlParams.has('bgcolor')) {
            if (urlParams.get('bgcolor') === '**pride**') {
                this.bgColor = '#FFF';
                document.getElementById('root').style.backgroundColor =
                    'linear-gradient(180deg, #fe0000 16.66%, #fd8c00 16.66%, 33.32%, #ffe500 33.32%, 49.98%, #119f0b 49.98%, 66.64%, #0644b3 66.64%, 83.3%, #c22edc 83.3%);';
            } else {
                this.bgColor = '#' + urlParams.get('bgcolor');
            }
        }
    }
}

export { UrlParameters };
