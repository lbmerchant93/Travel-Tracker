let upcomingTravelerTrips = document.querySelector(".upcoming-trips");
let currentTravelerTrips = document.querySelector(".current-trips");
let pendingTravelerTrips = document.querySelector(".pending-trips");
let pastTravelerTrips = document.querySelector(".past-trips");

let domUpdates = {
  displayLoginError() {
    let errorMsg = document.querySelector(".error-msg");
    errorMsg.innerText = `**Username or password not recognized please try again**`
  },

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
    totalSpent.innerText = ""
    totalSpent.innerText =
      `You have spent $${total} in 2020.`
  },

  displayCurrentTravelerTrip(traveler, destinations) {
    let current = document.querySelector(".current-trip");
    current.innerHTML = "";
    if (traveler.currentTrips[0] === undefined) {
      current.innerHTML = `<p>You shouldn\'t be on a trip right now. Maybe you should plan your next one if you don\'t have any upcoming trips either!!</p>`
    } else {
      let foundDest = findDestinationBasedOnTrip(traveler.currentTrips[0], destinations);
      let splitDestName = foundDest.destination.split(", ");
      let dateSplit = traveler.currentTrips[0].date.split("/");
      current.innerHTML = `<div class="current card">
        <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
        <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
        <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${traveler.currentTrips[0].duration} <br> Number of travelers: ${traveler.currentTrips[0].travelers}</p>
      </div>`
    }
  },

  displayUpcomingTrips(traveler, destinations) {
    let upcoming = document.querySelector(".upcoming-trips-container");
    upcoming.innerHTML = "";
    if (traveler.upcomingTrips[0] === undefined) {
      upcoming.innerHTML = `<p>You don\'t have any upcoming trips, fill out the form above to plan your next trip!!</p>`
    } else {
      traveler.upcomingTrips.forEach(trip => {
        console.log(trip)
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        upcoming.innerHTML += `<div class="upcoming card">
          <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${trip.duration} <br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  displayPendingTrips(traveler, destinations) {
    let pending = document.querySelector(".pending-trips-container");
    pending.innerHTML = "";
    if (traveler.pendingTrips[0] === undefined) {
      pending.innerHTML = `<p>You don\'t have any pending trips, fill out the form above to plan your next trip!!</p>`
    } else {
      traveler.pendingTrips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        pending.innerHTML += `<div class="upcoming card">
          <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${trip.duration} <br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  displayPastTrips(traveler, destinations) {
    let past = document.querySelector(".past-trips-container");
    past.innerHTML = "";
    if (traveler.pastTrips[0] === undefined) {
      past.innerHTML = `<p>You don\'t have any past trips, fill out the form above to plan your next trip!!</p>`
    } else {
      traveler.pastTrips.forEach(trip => {
        let foundDest = findDestinationBasedOnTrip(trip, destinations);
        let splitDestName = foundDest.destination.split(", ");
        let dateSplit = trip.date.split("/");
        past.innerHTML += `<div class="upcoming card">
          <img class="card-image" src="${foundDest.image}" alt="${foundDest.alt}">
          <h4 class="trip-destination">${splitDestName[0]},<br> ${splitDestName[1]}</h4>
          <p class="details">Trip start date: ${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}<br> Duration of trip: ${trip.duration} <br> Number of travelers: ${trip.travelers}</p>
        </div>`
      })
    }
  },

  populateDestinationsInput(destinations) {
    let destinationsInput = document.querySelector(".possible-destination");
    destinations.destinations.forEach(dest => {
      let destinationOption = `
      <option value="${dest.id}">
        ${dest.destination}
      </option>
      `
      destinationsInput.insertAdjacentHTML("beforeend", destinationOption);
    })
  },

  displayNewTripCost(cost, inputs) {
    let newTripCost = document.querySelector(".new-trip-cost");
    if (inputs[0].value != "" && inputs[3].value != "0") {
      newTripCost.innerHTML = `<p> This trip will cost $${cost} (including the agent fee) <p>`;
      document.querySelector(".submit-request").disabled = false;
    } else if (inputs[0].value === "") {
      newTripCost.innerHTML = `<p>Please select a date!</p>`;
    } else if (inputs[3].value === "0") {
      newTripCost.innerHTML = `<p>Please select a destination!</p>`;
    }
  },

  removeTripCostAfterRequestedClearInputs(){
    document.querySelector(".new-trip-cost").innerHTML = "";
    document.querySelector(".select-date").value = "";
    document.querySelector(".enter-duration").value = "";
    document.querySelector(".number-travelers").value = "";
    document.querySelector(".possible-destination").value = "0";
  }

}

function findDestinationBasedOnTrip(trip, destinations) {
  let foundTrip = destinations.find(destination => destination.id === trip.destinationID)
  return foundTrip;
}


export default domUpdates;
