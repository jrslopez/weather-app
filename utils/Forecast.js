const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=edd3110c01da9dcc5d1e3c537c23407e&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=f"

  request({ url: url, json: true }, (error, data) => {
    if (error) {
      callback("Unable to connect to weather services!")
    } else if (data.body.error) {
      callback("Unable to find location!")
    } else {
      callback(
        undefined,
        data.body.current.weather_descriptions[0] +
          ". It is currently " +
          data.body.current.temperature +
          " degrees out. It feels like " +
          data.body.current.feelslike +
          " degrees out."
      )
    }
  })
}

module.exports = forecast
