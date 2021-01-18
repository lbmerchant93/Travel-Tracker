class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.currentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
    this.pastTrips = [];
  }

  getFirstName() {
    let splitName = this.name.split(' ', 2);
    let firstName = splitName[0];
    return firstName;
  }

  addTrip(tripTiming, tripObject) {
    this[tripTiming].push(tripObject);
  }

  filterTripsByYear(year, trips) {
    let tripsPerYear = trips.filter(trip => trip.date.includes(year));
    return tripsPerYear
  }

  tripCosts(trips, destinations) {
    let spent = trips.reduce((acc, trip) => {
      destinations.forEach(dest => {
        if (trip.destinationID === dest.id) {
          let flightTotal = trip.travelers * dest.estimatedFlightCostPerPerson;
          let lodgingTotal = trip.duration * dest.estimatedLodgingCostPerDay;
          acc += flightTotal;
          acc += lodgingTotal;
        }
      })
      return acc;
    }, 0);
    // console.log(tripsPerYear)
    // console.log(spent);
    return spent;
  }

  calcAgentFee(cost) {
    let agentFee = cost * 0.1;
    return agentFee;
  }
}


module.exports = Traveler;
