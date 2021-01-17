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
      // console.log(randomTraveler)
      // console.log(currentTraveler)
      // greetTraveler(currentTraveler);
      // console.log(allTrips.trips)
      filterTripsForTraveler(allTrips, currentTraveler);
      // console.log(allDestinations.destinations)
      filterDestinationsByTravelerTrips(allDestinations, travelerTrips);
      greetTraveler(currentTraveler);
    })
}
let randomTraveler = Math.floor(Math.random() * Math.floor(40)) + 1;

// Greet Traveler
function greetTraveler(traveler) {
  domUpdates.welcomeTraveler(traveler);
  domUpdates.getTodaysDate();
  travelerTotalSpent();
}

function travelerTotalSpent() {
  let totalSpent = document.querySelector(".total-spent");
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
  console.log(spent);
  return spent;
}

// Filter Trips Matching Traveler's id
function filterTripsForTraveler(totalTrips, currentTraveler) {
  let foundTrips = totalTrips.trips.filter(trip => {
    return trip.userID === currentTraveler.id;
  })
  travelerTrips = foundTrips.map(trip => {
    let tripInstantiation = new Trip(trip);
    return tripInstantiation;
  })
  console.log(travelerTrips)
};

// Filter Destinations Matching Traveler's Trips
function filterDestinationsByTravelerTrips(totalDestinations, tripsForTraveler) {
  let foundDestinations = [];
  tripsForTraveler.forEach(trip => {
    totalDestinations.destinations.forEach(dest => {
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




// // Display specifc traveler
// function displaySpecificTraveler(specificTravelerData) {
//   specificTravelerDOM.innerHTML +=
//     `<p>${specificTravelerData.id}, ${specificTravelerData.name}, ${specificTravelerData.travelerType}`
// }
//
// // Display all destinations
// function displayFetchedDestinations(destinationsData) {
//   destinationsData.destinations.forEach(destination => {
//     destinationsDOM.innerHTML +=
//       `<p>${destination.id}, ${destination.destination}, ${destination.estimatedLodgingCostPerDay} </p>`
//   })
// }
//
// // Display all travelers
// function displayFetchedTravelers(travelersData) {
//   travelersData.travelers.forEach(traveler => {
//     travelersDOM.innerHTML +=
//       `<p>${traveler.id}, ${traveler.name}, ${traveler.travelerType} </p>`
//   })
// }
//
// // Display all trips
// function displayFetchedTrips(tripsData) {
//   tripsData.trips.forEach(trip => {
//     tripsDOM.innerHTML +=
//       `<p>${trip.id}, ${trip.date}, ${trip.status} </p>`
//   })
// }









//
