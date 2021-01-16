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
}


module.exports = Traveler;
