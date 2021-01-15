// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// Global Variables
let allDestinations;
let allTravelers;
let allTrips;

// QuerySelectors
let destinationsDOM = document.querySelector(".destinations");
let travelersDOM = document.querySelector(".travelers");
let tripsDOM = document.querySelector(".trips");

// Eventlisteners
window.addEventListener("load", gatherAPIInfo)

function gatherAPIInfo() {
  Promise.all([retrieveDestinations(), retrieveTravelers(), retrieveTrips()])
  .then(data => {
    allDestinations = data[0];
    allTravelers = data[1];
    allTrips = data[3];
    displayFetchedDestinations(allDestinations);
    displayFetchedTravelers(allTravelers);
  })
}

// Fetch Data
function retrieveDestinations() {
  return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
}
function retrieveTravelers() {
  return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
}
function retrieveTrips() {
  return fetch("http://localhost:3001/api/v1/trips")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
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
function displayFetchedTrips(travelersData) {
  travelersData.travelers.forEach(traveler => {
    travelersDOM.innerHTML +=
    `<p>${traveler.id}, ${traveler.name}, ${traveler.travelerType} </p>`
  })
}













//
