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

  addTrip(tripTiming, tripObject) {
    this[tripTiming].push(tripObject);
  }
}


module.exports = Traveler;
