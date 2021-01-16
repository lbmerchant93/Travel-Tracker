import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/traveler';
import sampleData from '../test/sampleData.js'
const sampleTravelerData = sampleData.sampleTravelerData;

describe('See if the tests are running', () => {
  let traveler1, traveler2;

  beforeEach(() => {
    traveler1 = new Traveler(sampleTravelerData[0]);
    traveler1 = new Traveler(sampleTravelerData[1]);
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
});
