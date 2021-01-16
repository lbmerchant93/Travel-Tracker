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
}


module.exports = Traveler;
