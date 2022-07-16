const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=edd3110c01da9dcc5d1e3c537c23407e&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=f"

  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather services!")
    } else if (body.error) {
      callback("Unable to find location!")
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out."
      )
    }
  })
}

module.exports = forecast
