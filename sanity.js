const getTravelersFlightInfo = require('./')
// console.log(getTravelersFlightInfo())
getTravelersFlightInfo().then(response => console.log(JSON.stringify(response, null, 2)))