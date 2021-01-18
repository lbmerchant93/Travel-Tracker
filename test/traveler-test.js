import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler';
import sampleData from '../test/sampleData.js'
const sampleTravelerData = sampleData.sampleTravelerData;
const sampleTripData = sampleData.sampleTripData;
const sampleDestinationData = sampleData.sampleDestinationData;

describe('Traveler', () => {
  let traveler1, traveler2, trip1, trip2, trip3, destination1, destination2, sampleTrips, sampleDests;

  beforeEach(() => {
    traveler1 = new Traveler(sampleTravelerData[0]);
    traveler2 = new Traveler(sampleTravelerData[1]);
    trip1 = sampleTripData[0];
    trip2 = sampleTripData[1];
    trip3 = sampleTripData[2];
    destination1 = sampleDestinationData[0];
    destination2 = sampleDestinationData[6];
    sampleTrips = [trip1, trip3];
    sampleDests = [destination1, destination2];
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should hold all the traveler data',
    () => {
      expect(traveler1.id).to.equal(1);
      expect(traveler1.name).to.equal("Ham Leadbeater");
      expect(traveler1.travelerType).to.equal("relaxer");
      expect(traveler1.currentTrips).to.deep.equal([]);
      expect(traveler1.upcomingTrips).to.deep.equal([]);
      expect(traveler1.pendingTrips).to.deep.equal([]);
      expect(traveler1.pastTrips).to.deep.equal([]);

      expect(traveler2.id).to.equal(2);
      expect(traveler2.name).to.equal("Rachael Vaughten");
      expect(traveler2.travelerType).to.equal("thrill-seeker");
      expect(traveler2.currentTrips).to.deep.equal([]);
      expect(traveler2.upcomingTrips).to.deep.equal([]);
      expect(traveler2.pendingTrips).to.deep.equal([]);
      expect(traveler2.pastTrips).to.deep.equal([]);
    })

    it('should have a method that returns just the first name', () => {
      expect(traveler1.getFirstName()).to.equal("Ham");

      expect(traveler2.getFirstName()).to.equal("Rachael");
    })

    it('should have a method to add to the correct array given the array\'s property name and trip object', () => {
      traveler1.addTrip('currentTrips', trip1);
      expect(traveler1.currentTrips).to.deep.equal([{
          "id": 117,
          "userID": 1,
          "destinationID": 1,
          "travelers": 3,
          "date": "2021/01/09",
          "duration": 15,
          "status": "approved",
          "suggestedActivities": []
        }]);

        traveler2.addTrip('pastTrips', trip2);
        expect(traveler2.pastTrips).to.deep.equal([{
         "id": 166,
         "userID": 2,
         "destinationID": 7,
         "travelers": 2,
         "date": "2020/03/05",
         "duration": 6,
         "status": "approved",
         "suggestedActivities": []
       }]);
    })

    it('should have a method to total the cost a trip will be for the amount of travelers and duration of trip', () => {
      expect(traveler1.tripCosts(sampleTrips, sampleDests)).to.equal(3640);
    })
});
