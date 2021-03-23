const $ = require('jquery');

const weatherKey = '8ae592d7f1f6a91607db4d86721648cf';

function getWeather() {
    $.get('https://cors-anywhere.herokuapp.com/https://geolocation-db.com/json')
        .then((res) =>
            $.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${res['data']['city']}&appid=${weatherKey}`
            )
                .then((res) => console.log(res['data']['weather'][0]['main']))
                .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err));

    return '';
}

console.log(getWeather());
