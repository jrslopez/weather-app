const geocode = require("./utils/Geocode")
const forecast = require("./utils/Forecast")

geocode("Philadelphia", (error, data) => {
  console.log("Error", error)
  console.log("Data", data)
})

forecast(44.1545, -75.7088, (error, data) => {
  console.log("Error", error)
  console.log("Data", data)
})
