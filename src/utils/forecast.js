const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/25623c31f1151ba4501d497a87561e0f/' + latitude + ',' + longitude +'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' At that time ' + Math.round(body.currently.temperature) + ' degrees. Chance of rain ' + body.currently.precipProbability + '%')
        }
    })
}

module.exports = forecast