const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=975a64c1a6b2109d958bd091fe426631&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The humidity is ' + body.current.humidity + '% .It is currently ' + body.current.temperature + ' fahrenheit out. there is a ' + body.current.precip +'% chance of rain');
        };
    });
};

module.exports = forecast;
