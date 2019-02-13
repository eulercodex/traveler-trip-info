'use strict';

const airlinesService = require('./api/airlines.service')
const profilesService = require('./api/profiles.service')
const tripService = require('./api/trip.service')

function print(obj) {
  console.log(JSON.stringify(obj))
}

function getProfileUsingId(profiles, id) {
  for(const profile of profiles) {
    if(profile.personId == id)
      return profile
  }
}
function buildTravelerPayloadUsingProfile(profile) {
  return {
    id: profile.personId,
    name: profile.name,
    flights: []
  }
}

function addFlightsToTravelerPayload(travelerPayload, flight, profile, airlines) {
  let copyOfLegs = flight.legs.map(leg => {
    const otherFields = {
      airlineName: airlines[leg.airlineCode],
      frequentFlyerNumber: profile.rewardPrograms.air.hasOwnProperty(leg.airlineCode) ? profile.rewardPrograms.air[(leg.airlineCode)] : ''
    }
    return Object.assign({},leg, otherFields)
  })
  travelerPayload.flights.push(copyOfLegs)
}

function getTravelersFlightInfo() {

  let response = { travelers: [] }
  let airlines, profiles, trips
  
  return airlinesService.get()
  .then(result => {
    airlines = {}
    for(const airline of result.airlines) {
      airlines[airline.code] = airline.name
    }
    return profilesService.get()
  })
  .then(result => {
    profiles = result.profiles
    return tripService.get()
  })
  .then(result => {
    trips = result
    let numberOfTravelers = 0
    let indexOfPassengerInResponse = {}
    for(let flight of trips.trip.flights) {
      for(let travelerId of flight.travelerIds) {
        const profile = getProfileUsingId(profiles,travelerId)
        if(indexOfPassengerInResponse.hasOwnProperty(travelerId)) {
          let travelerPayload = response.travelers[indexOfPassengerInResponse[profile.personId]]
          addFlightsToTravelerPayload(travelerPayload, flight, profile, airlines)
        }
        else {
          let travelerPayload = buildTravelerPayloadUsingProfile(profile)
          addFlightsToTravelerPayload(travelerPayload, flight, profile, airlines)
          response.travelers.push(travelerPayload)
          indexOfPassengerInResponse[travelerId] = numberOfTravelers++
        }
      }
    }
    return response
  })
}

module.exports = getTravelersFlightInfo;
