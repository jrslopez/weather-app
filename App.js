const geocode = require("./utils/Geocode")
const forecast = require("./utils/Forecast")

const location = process.argv[2]

if (!location) {
  console.log("Provide a valid location")
} else {
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)
    })
  })
}
