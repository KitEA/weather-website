const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/61bee76428e7f273c47dfdd8f26df667/' + latitude + ','
  + longitude + '?units=si'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 
        ' degrees out. Minimum temperature is ' + body.daily.data[0].temperatureMin + ' degrees and maximum is ' + body.daily.data[0].temperatureMax + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast