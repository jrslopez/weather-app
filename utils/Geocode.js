const request = require("request")

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoianJzbG9wZXoiLCJhIjoiY2w1bHpyNWlxMHBnaDNpcm8wYXU2dWRvcCJ9.r_FfjeCTHITkz6-E9x6yoQ&limit=1"
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to locations services!")
    } else if (response.body.features.length === 0) {
      callback("Invalid search!")
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode