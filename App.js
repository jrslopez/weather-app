const request = require("request")

const url =
  "http://api.weatherstack.com/current?access_key=edd3110c01da9dcc5d1e3c537c23407e&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the weather service!")
  } else if (response.body.error) {
    console.log("Unable to find location!")
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degrees out. It feels like " +
        response.body.current.feelslike +
        " degrees out."
    )
  }
})

// Geocoding
// Address -> Lat/Long -> Weather

// const urlGeo =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianJzbG9wZXoiLCJhIjoiY2w1bHpyNWlxMHBnaDNpcm8wYXU2dWRvcCJ9.r_FfjeCTHITkz6-E9x6yoQ&limit=1"

// request({ url: urlGeo, json: true }, (error, response) => {
//   latitude = response.body.features[0].center[1]
//   longitude = response.body.features[0].center[0]
//   console.log(latitude + ", " + longitude)
// })
