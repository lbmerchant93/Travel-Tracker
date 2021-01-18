class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.cost = 0;
  }

  getCostOfTrip(destination) {
    let acc = 0;
    let flightTotal = this.travelers * destination.estimatedFlightCostPerPerson;
    let lodgingTotal = this.duration * destination.estimatedLodgingCostPerDay;
    acc += flightTotal;
    acc += lodgingTotal; 
    this.cost = acc;
  }
}



module.exports = Trip;
