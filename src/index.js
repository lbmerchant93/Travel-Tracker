// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// API Data
import fetchData from './fetchRequest.js';

// DOM Updates
import domUpdates from './domUpdates.js';

// Classes
import Destination from './destination.js';
import Traveler from './traveler.js';
import Trip from './trip.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// Global Variables
let allDestinations;
let allTravelers;
let allTrips;
let currentTraveler;
let travelerTrips;
let travelerDestinations;
let pastTrips = [];
let upcomingTrips = [];
let pendingTrips = [];
let currentTrip;

// QuerySelectors
// let destinationsDOM = document.querySelector(".destinations");
// let specificTravelerDOM = document.querySelector(".specific-traveler");
// let travelersDOM = document.querySelector(".travelers");
// let tripsDOM = document.querySelector(".trips");

// Eventlisteners
window.addEventListener("load", gatherAPIInfo)

function gatherAPIInfo() {
  Promise.all([fetchData.retrieveDestinations(), fetchData.retrieveTravelers(), fetchData.retrieveTrips(), fetchData.retrieveSpecificTraveler(randomTraveler)])
    .then(data => {
      allDestinations = data[0];
      allTravelers = data[1];
      allTrips = data[2];
      currentTraveler = new Traveler(data[3]);
      filterForTraveler();
      catagorizeTrips();
      greetTraveler(currentTraveler);
      displayTravelerTrips();
    })
}
let randomTraveler = Math.floor(Math.random() * Math.floor(40)) + 1;

// Greet Traveler
function greetTraveler(traveler) {
  domUpdates.welcomeTraveler(traveler);
  domUpdates.getTodaysDate();
  let tripCosts = travelerTotalSpent();
  let agentFee = calcAgentFee(travelerTotalSpent());
  let sumSpent = tripCosts + agentFee;
  domUpdates.displayTotalTravelerSpendings(sumSpent.toFixed(2))
}

function travelerTotalSpent() {
  let spent = travelerTrips.reduce((acc, trip) => {
    travelerDestinations.forEach(dest => {
      if(trip.destinationID === dest.id){
        let flightTotal = trip.travelers * dest.estimatedFlightCostPerPerson;
        let lodgingTotal = trip.duration * dest.estimatedLodgingCostPerDay;
        acc += flightTotal;
        acc += lodgingTotal;
      }
    })
    return acc;
  }, 0);
  // console.log(spent);
  return spent;
}

function calcAgentFee(cost) {
  let agentFee = cost * 0.1;
  // console.log(agentFee.toFixed(2))
  return agentFee;
}

// Filter Trips and Destinations for TRAVELERS
function filterForTraveler() {
  filterTripsForTraveler();
  filterDestinationsByTravelerTrips();
}

// Filter Trips Matching Traveler's id
function filterTripsForTraveler() {
  let foundTrips = allTrips.trips.filter(trip => {
    return trip.userID === currentTraveler.id;
  })
  travelerTrips = foundTrips.map(trip => {
    let tripInstantiation = new Trip(trip);
    return tripInstantiation;
  })
  console.log(travelerTrips)
};

// Assign Traveler's Trips to correct area
function catagorizeTrips() {
  getTravelerPendingTrips();
  assignTripsToCorrectCatagory();
}

function getTravelerPendingTrips() {
  travelerTrips.forEach(trip => {
    if(trip.status === "pending"){
      pendingTrips.push(trip)
    }
  })
  // console.log(pendingTrips, 'A')
}

function assignTripsToCorrectCatagory() {
  travelerTrips.forEach(trip => {
    let dateSplit = trip.date.split("/");
    let startDate = new Date(dateSplit[0], (dateSplit[1]-1), dateSplit[2])
    let tripEnd = startDate.setDate(startDate.getDate() + trip.duration);
    let startInMil = new Date(dateSplit[0], (dateSplit[1]-1), dateSplit[2]).getTime();
    let today = new Date().getTime();
    if (startInMil < today && today < tripEnd) {
      currentTrip = trip;
    } else if (startInMil > today) {
      upcomingTrips.push(trip);
    } else {
      pastTrips.push(trip);
    }
  })
  // console.log(currentTrip, 'current')
  // console.log(pastTrips, 'past')
  // console.log(upcomingTrips, 'upcoming')
}

// Filter Destinations Matching Traveler's Trips
function filterDestinationsByTravelerTrips() {
  let foundDestinations = [];
  travelerTrips.forEach(trip => {
    allDestinations.destinations.forEach(dest => {
      if (dest.id === trip.destinationID) {
        foundDestinations.push(dest);
      }
    })
  })
  travelerDestinations = foundDestinations.map(dest => {
    return new Destination(dest)
  })
  console.log(travelerDestinations)
};

// Call domUpdates functions on load
function displayTravelerTrips() {
  domUpdates.displayCurrentTravelerTrip(currentTrip, travelerDestinations);
  domUpdates.displayUpcomingTrips(upcomingTrips, travelerDestinations);
  domUpdates.displayPendingTrips(pendingTrips, travelerDestinations);
  // console.log(currentTrip)
  // console.log(upcomingTrips)
}










//
