// QuerySelectors
let upcomingTravelerTrips = document.querySelector(".upcoming-trips");
let currentTravelerTrips = document.querySelector(".current-trips");
let pendingTravelerTrips = document.querySelector(".pending-trips");
let pastTravelerTrips = document.querySelector(".past-trips");

// Functions to update the DOM go here
let domUpdates = {

  // Greet Traveler
  welcomeTraveler(traveler) {
    let welcomeMessage = document.querySelector(".welcome-message");
    welcomeMessage.innerText = `Welcome back ${traveler.getFirstName()}!!`
  },

  getTodaysDate() {
    let todaysDate = document.querySelector(".todays-date");
    let date = new Date().toLocaleDateString("en-US").split("/");
    todaysDate.innerText = `Today's Date: ${date[0]}/${date[1]}/${date[2]}`;
  },

  displayTotalTravelerSpendings(total) {
    let totalSpent = document.querySelector(".total-spent");
    totalSpent.innerText =
      `You have spent $${total} this year`
  },

  displayCurrentTravelerTrip(trip, destinations) {
    let current = document.querySelector(".current-trip");
    if (trip === undefined) {
      current.innerHTML = `<p>You shouldn\'t be on a trip right now. Maybe you should plan your next one if you don\'t have any upcoming trips either!!</p>`
    } else {
      let foundDest = findDestinationBasedOnTrip(trip, destinations);
      let splitDestName = foundDest.destination.split(", ");
      let dateSplit = trip.date.split("/");
      current.innerHTML = `<div class="current card">
        <p>this is a place holder for the image</p>
        <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
        <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Number of travelers: ${trip.travelers}</p>
      </div>`
    }
  },

  displayUpcomingTrips(trips, destinations) {
    let upcoming = document.querySelector(".upcoming-trips-container");
    if (trips[0] === undefined) {
      upcoming.innerHTML = `<p>You don\'t have any upcoming trips, click PLAN A TRIP to plan your next trip!!</p>`
    } else {
      trips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        upcoming.innerHTML += `<div class="upcoming card">
          <p>this is a place holder for the image</p>
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  displayPendingTrips(trips, destinations) {
    let pending = document.querySelector(".pending-trips-container");
    if (trips[0] === undefined) {
      pending.innerHTML = `<p>You don\'t have any pending trips, click PLAN A TRIP to plan your next trip!!</p>`
    } else {
      trips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        pending.innerHTML += `<div class="upcoming card">
          <p>this is a place holder for the image</p>
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  displayPastTrips(trips, destinations) {
    let past = document.querySelector(".past-trips-container");
    if (trips[0] === undefined) {
      past.innerHTML = `<p>You don\'t have any past trips, click PLAN A TRIP to plan your next trip!!</p>`
    } else {
      trips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        past.innerHTML += `<div class="upcoming card">
          <p>this is a place holder for the image</p>
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

}

function findDestinationBasedOnTrip(trip, destinations) {
  let foundTrip = destinations.find(destination => destination.id === trip.destinationID)
  // console.log(foundTrip);
  return foundTrip;
}


export default domUpdates;
