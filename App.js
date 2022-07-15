const request = require("request")

const url =
  "http://api.weatherstack.com/current?access_key=edd3110c01da9dcc5d1e3c537c23407e&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  )
})
