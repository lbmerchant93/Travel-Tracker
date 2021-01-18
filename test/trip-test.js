import chai from 'chai';
const expect = chai.expect;


import Trip from '../src/trip';
import sampleData from '../test/sampleData.js';
const sampleTripData = sampleData.sampleTripData;
const sampleDestinationData = sampleData.sampleDestinationData;

describe('Trip', () => {
  let trip1, trip2, destination1, destination2;

  beforeEach(() => {
    trip1 = new Trip(sampleTripData[0]);
    trip2 = new Trip(sampleTripData[1]);
    destination1 = sampleDestinationData[0];
    destination2 = sampleDestinationData[6];
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should hold all the trip\'s information', () => {
    expect(trip1.id).to.equal(117);
    expect(trip1.userID).to.equal(1);
    expect(trip1.destinationID).to.equal(1);
    expect(trip1.travelers).to.equal(3);
    expect(trip1.date).to.equal("2020/01/09");
    expect(trip1.duration).to.equal(15);
    expect(trip1.status).to.equal("approved");
    expect(trip1.suggestedActivities).to.deep.equal([]);

    expect(trip2.id).to.equal(166);
    expect(trip2.userID).to.equal(2);
    expect(trip2.destinationID).to.equal(7);
    expect(trip2.travelers).to.equal(2);
    expect(trip2.date).to.equal("2020/03/05");
    expect(trip2.duration).to.equal(6);
    expect(trip2.status).to.equal("approved");
    expect(trip2.suggestedActivities).to.deep.equal([]);
  });

  it('should have a method to get the cost of the trip due to traveler amount and duration based on the destination\'s flight and lodging costs', () => {
    trip1.getCostOfTrip(destination1);
    trip2.getCostOfTrip(destination2);
    expect(trip1.cost).to.equal(2250);
    expect(trip2.cost).to.equal(1390);
  })
});
