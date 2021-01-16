// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// API Data
import fetchData from './fetchRequest.js'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// Global Variables
let allDestinations;
let allTravelers;
let allTrips;
let currentTraveler;

// QuerySelectors
// let destinationsDOM = document.querySelector(".destinations");
// let specificTravelerDOM = document.querySelector(".specific-traveler");
// let travelersDOM = document.querySelector(".travelers");
// let tripsDOM = document.querySelector(".trips");

// Eventlisteners
// window.addEventListener("load", gatherAPIInfo)

function gatherAPIInfo() {
  Promise.all([fetchData.retrieveDestinations(), fetchData.retrieveTravelers(), fetchData.retrieveTrips(), fetchData.retrieveSpecificTraveler(randomTraveler)])
  .then(data => {
    allDestinations = data[0];
    allTravelers = data[1];
    allTrips = data[2];
    currentTraveler = data[3];
    // displayFetchedDestinations(allDestinations);
    // displayFetchedTravelers(allTravelers);
    // displayFetchedTrips(allTrips);
    // displaySpecificTraveler(currentTraveler);
  })
}
let randomTraveler = Math.floor(Math.random() * Math.floor(40));

// Display specifc traveler
function displaySpecificTraveler(specificTravelerData) {
  specificTravelerDOM.innerHTML +=
  `<p>${specificTravelerData.id}, ${specificTravelerData.name}, ${specificTravelerData.travelerType}`
}

// Display all destinations
function displayFetchedDestinations(destinationsData) {
  destinationsData.destinations.forEach(destination => {
    destinationsDOM.innerHTML +=
    `<p>${destination.id}, ${destination.destination}, ${destination.estimatedLodgingCostPerDay} </p>`
  })
}

// Display all travelers
function displayFetchedTravelers(travelersData) {
  travelersData.travelers.forEach(traveler => {
    travelersDOM.innerHTML +=
    `<p>${traveler.id}, ${traveler.name}, ${traveler.travelerType} </p>`
  })
}

// Display all trips
function displayFetchedTrips(tripsData) {
  tripsData.trips.forEach(trip => {
    tripsDOM.innerHTML +=
    `<p>${trip.id}, ${trip.date}, ${trip.status} </p>`
  })
}













//
