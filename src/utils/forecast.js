const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7b863b20be62ebc3ba918ece4138e888/' + latitude + ',' + longitude +'?units=si&lang=ru'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' В настоящее время ' + Math.round(body.currently.temperature) + ' градусов. Вероятность дождя ' + body.currently.precipProbability + '%')
        }
    })
}

module.exports = forecast