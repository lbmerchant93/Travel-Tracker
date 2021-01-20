import './images/plane.png';

import './css/base.scss';

import fetchData from './fetchRequest.js';

import domUpdates from './domUpdates.js';

import Destination from './destination.js';
import Traveler from './traveler.js';
import Trip from './trip.js';

let allDestinations;
let allTrips;
let currentTraveler;
let travelerTrips;
let newTripIdCount;
let plannedTrip;
let tripObj;
let travelerDestinations;

let allInputs = document.querySelectorAll(".input");
let calcNewTripCost = document.querySelector(".calc-cost");
let password = document.querySelector(".password");
let submitLogin = document.querySelector(".submit-login");
let submitTripRequest = document.querySelector(".submit-request");
let username = document.querySelector(".username");

calcNewTripCost.addEventListener("click", retrieveNewTripCost);
password.addEventListener("keyup", checkLoginInputsEnableSubmit);
submitLogin.addEventListener("click", submitLoginInfo)
username.addEventListener("keyup", checkLoginInputsEnableSubmit);
submitTripRequest.addEventListener("click", submitRequest);
allInputs.forEach(input => {
  input.addEventListener("keyup", checkIfAllFilledOut);
  input.addEventListener("click", checkIfAllFilledOut);
})

function checkLoginInputsEnableSubmit() {
  if (password.value !== "" & username.value.length > 8) {
    submitLogin.disabled = false;
  } else {
    submitLogin.disabled = true;
  }
}

function submitLoginInfo() {
  let splitID = parseInt(username.value.slice(8));
  if (password.value === "travel2020" && username.value.includes("traveler")) {
    retrieveTraveler(splitID)
  } else {
    domUpdates.displayLoginError("**Username or password not recognized please try again**");
  }
}

function retrieveTraveler(id) {
  fetchData.retrieveSpecificTraveler(id)
    .then(data => {
      if (data.id === undefined) {
        domUpdates.displayLoginError(data.message)
      } else {
        document.querySelector(".login-article").classList.add("hidden");
        document.querySelector(".main-dashboard").classList.remove("hidden");
        currentTraveler = new Traveler(data);
        gatherAPIInfo();
      }
    });
}


function gatherAPIInfo() {
  Promise.all([fetchData.retrieveDestinations(),
    fetchData.retrieveTrips()
  ])
    .then(data => {
      allDestinations = data[0];
      allTrips = data[1];
      domUpdates.populateDestinationsInput(allDestinations);
      filterForTraveler();
      catagorizeTrips();
      greetTraveler(currentTraveler);
      displayTravelerTrips();
    })
}

function greetTraveler(traveler) {
  domUpdates.welcomeTraveler(traveler);
  domUpdates.getTodaysDate();
  let trips2020 = traveler.filterTripsByYear(2020, travelerTrips);
  let tripCosts = traveler.tripCosts(trips2020, travelerDestinations);
  let agentFee = traveler.calcAgentFee(tripCosts);
  let sumSpent = tripCosts + agentFee;
  domUpdates.displayTotalTravelerSpendings(sumSpent.toFixed(2))
}

function filterForTraveler() {
  filterTripsForTraveler();
  filterDestinationsByTravelerTrips();
}

function filterTripsForTraveler() {
  let foundTrips = allTrips.trips.filter(trip => {
    return trip.userID === currentTraveler.id;
  })
  travelerTrips = foundTrips.map(trip => {
    let tripInstantiation = new Trip(trip);
    return tripInstantiation;
  })
}

function catagorizeTrips() {
  getTravelerPendingTrips();
  assignTripsToCorrectCatagory();
}

function getTravelerPendingTrips() {
  currentTraveler.pendingTrips = [];
  travelerTrips.forEach(trip => {
    if (trip.status === "pending") {
      currentTraveler.addTrip('pendingTrips', trip);
    }
  })
}

function assignTripsToCorrectCatagory() {
  currentTraveler.pastTrips = [];
  currentTraveler.upcomingTrips = [];
  currentTraveler.currentTrips = [];
  travelerTrips.forEach(trip => {
    let dateSplit = trip.date.split("/");
    let startDate = new Date(dateSplit[0], (dateSplit[1] - 1), dateSplit[2])
    let tripEnd = startDate.setDate(startDate.getDate() + trip.duration);
    let startInMil = new Date(dateSplit[0], (dateSplit[1] - 1), dateSplit[2]).getTime();
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
}

function displayTravelerTrips() {
  domUpdates.displayCurrentTravelerTrip(currentTraveler, travelerDestinations);
  domUpdates.displayUpcomingTrips(currentTraveler, travelerDestinations);
  domUpdates.displayPendingTrips(currentTraveler, travelerDestinations);
  domUpdates.displayPastTrips(currentTraveler, travelerDestinations);
}

function checkIfAllFilledOut() {
  if (allInputs[1].value !== "" && allInputs[2].value !== "") {
    calcNewTripCost.disabled = false;
  }
}

function retrieveNewTripCost() {
  newTripIdCount = allTrips.trips.length + 1;
  plannedTrip = instantiateNewTrip();
  allDestinations.destinations.forEach(dest => {
    if (dest.id === plannedTrip.destinationID) {
      plannedTrip.getCostOfTrip(dest);
    }
  });
  let tripWithAgentFee = plannedTrip.cost + currentTraveler.calcAgentFee(plannedTrip.cost);
  let totalForTrip = tripWithAgentFee.toFixed(2);
  domUpdates.displayNewTripCost(totalForTrip, allInputs);
}

function instantiateNewTrip() {
  let date = document.querySelector(".select-date").value.split("-");
  let dateCorrect = `${date[0]}/${date[1]}/${date[2]}`
  let duration = parseInt(document.querySelector(".enter-duration").value);
  let travelers = parseInt(document.querySelector(".number-travelers").value);
  let destination = parseInt(document.querySelector(".possible-destination").value);
  tripObj = {};
  tripObj = {
    id: newTripIdCount,
    userID: currentTraveler.id,
    destinationID: destination,
    travelers,
    date: dateCorrect,
    duration,
    status: "pending",
    suggestedActivities: []
  }
  let newTrip = new Trip(tripObj);
  return newTrip;
}

function submitRequest() {
  fetchData.addNewTripForTraveler(tripObj)
    .then(gatherAPIInfo());
  domUpdates.removeTripCostAfterRequestedClearInputs();
}

// delete fetch request, not implemented yet just used when creating too many new trips when figuring out post request
function deleteTrip(id) {
  return fetch(`http://localhost:3001/api/v1/trips/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .catch(err => {
      console.log("Sorry! We are having trouble getting the data, try again later!")
    })
}

//
