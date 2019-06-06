const request = require('request')
const convert = require('cyrillic-to-latin')

const geocode = (address, callback) => {

    let latinAdress = convert(address)
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + latinAdress + '.json?access_token=pk.eyJ1IjoidmxhZGltaXI3MjIyMjI3IiwiYSI6ImNqdWkwbHNzZTAybG80M2xsdmdrY3FlbzgifQ.12Ngx7XaututDBBET6TyCg&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

