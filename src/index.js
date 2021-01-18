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
  let tripCosts = traveler.tripCosts(travelerTrips, travelerDestinations, 2020);
  let agentFee = traveler.calcAgentFee(tripCosts);
  let sumSpent = tripCosts + agentFee;
  domUpdates.displayTotalTravelerSpendings(sumSpent.toFixed(2))
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
};

// Assign Traveler's Trips to correct area
function catagorizeTrips() {
  getTravelerPendingTrips();
  assignTripsToCorrectCatagory();
}

function getTravelerPendingTrips() {
  travelerTrips.forEach(trip => {
    if(trip.status === "pending"){
      currentTraveler.addTrip('pendingTrips', trip);
      pendingTrips.push(trip)
    }
  })
}

function assignTripsToCorrectCatagory() {
  travelerTrips.forEach(trip => {
    let dateSplit = trip.date.split("/");
    let startDate = new Date(dateSplit[0], (dateSplit[1]-1), dateSplit[2])
    let tripEnd = startDate.setDate(startDate.getDate() + trip.duration);
    let startInMil = new Date(dateSplit[0], (dateSplit[1]-1), dateSplit[2]).getTime();
    let today = new Date().getTime();
    if (startInMil < today && today < tripEnd) {
      currentTraveler.addTrip('currentTrips', trip);
    } else if (startInMil > today) {
      currentTraveler.addTrip('upcomingTrips', trip);
    } else {
      currentTraveler.addTrip('pastTrips', trip);
    }
  })
}

// Filter Destinations Matching Traveler's Trips
function filterDestinationsByTravelerTrips() {
  let foundDestinations = [];
  travelerTrips.forEach(trip => {
    allDestinations.destinations.forEach(dest => {
      if (dest.id === trip.destinationID) {
        foundDestinations.push(dest);
        trip.getCostOfTrip(dest)
      }
    })
  })
  travelerDestinations = foundDestinations.map(dest => {
    return new Destination(dest)
  })
};

// Call domUpdates functions on load
function displayTravelerTrips() {
  domUpdates.displayCurrentTravelerTrip(currentTraveler, travelerDestinations);
  domUpdates.displayUpcomingTrips(currentTraveler, travelerDestinations);
  domUpdates.displayPendingTrips(currentTraveler, travelerDestinations);
  domUpdates.displayPastTrips(currentTraveler, travelerDestinations);
}










//
