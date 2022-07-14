// console.log("Starting")

// setTimeout(() => {
//   console.log("2 Second Timer")
// }, 2000)

// setTimeout(() => {
//   console.log("0 Second Timer")
// }, 0)

// console.log("Stopping")

const listLocations = (locations) => {
  locations.forEach((location) => {
    console.log(location)
  })
}

const myLocations = ["Philly", "NYC"]

listLocations(myLocations)
