const geocode = require("./utils/Geocode")
const forecast = require("./utils/Forecast")

const location = process.argv[2]

if (!location) {
  console.log("Provide a valid location")
} else {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }

      console.log(data.location)
      console.log(forecastData)
    })
  })
}
