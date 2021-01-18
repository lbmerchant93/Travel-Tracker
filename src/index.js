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
let newTripIdCount;
let plannedTrip;
let tripObj;
let travelerDestinations;
let calcNewTripCost = document.querySelector(".calc-cost");
let submitTripRequest = document.querySelector(".submit-request");


// Eventlisteners
window.addEventListener("load", gatherAPIInfo);
calcNewTripCost.addEventListener("click", retrieveNewTripCost);
submitTripRequest.addEventListener("click", submitRequest);

function gatherAPIInfo() {
  Promise.all([fetchData.retrieveDestinations(), fetchData.retrieveTravelers(), fetchData.retrieveTrips(), fetchData.retrieveSpecificTraveler(3)])
    .then(data => {
      allDestinations = data[0];
      allTravelers = data[1];
      allTrips = data[2];
      currentTraveler = new Traveler(data[3]);
      domUpdates.populateDestinationsInput(allDestinations);
      filterForTraveler();
      catagorizeTrips();
      greetTraveler(currentTraveler);
      displayTravelerTrips();
    })
}

// let randomTraveler = Math.floor(Math.random() * Math.floor(40)) + 1;

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

// New Trip Cost with inputs
function retrieveNewTripCost() {
  newTripIdCount = allTrips.trips.length + 1;
  plannedTrip = instantiateNewTrip();
  allDestinations.destinations.forEach(dest => {
    if (dest.id === plannedTrip.destinationID) {
      plannedTrip.getCostOfTrip(dest);
    };
  });
  let tripWithAgentFee = plannedTrip.cost + currentTraveler.calcAgentFee(plannedTrip.cost);
  let totalForTrip = tripWithAgentFee.toFixed(2);
  domUpdates.displayNewTripCost(totalForTrip);
}

function instantiateNewTrip() {
  let date = document.querySelector(".select-date").value.split("-");
  let dateCorrect = `${date[0]}/${date[1]}/${date[2]}`
  let duration = parseInt(document.querySelector(".enter-duration").value);
  let travelers = parseInt(document.querySelector(".number-travelers").value);
  let destination = parseInt(document.querySelector(".possible-destination").value);
  tripObj = {id: newTripIdCount, userID:currentTraveler.id, destinationID: destination, travelers: travelers, date: dateCorrect, duration: duration, status: "pending", suggestedActivities: []}
  let newTrip = new Trip(tripObj);
  return newTrip;
}

function submitRequest() {
  fetchData.addNewTripForTraveler(tripObj)
  .then(data => {
    gatherAPIInfo();
  })
}









//
