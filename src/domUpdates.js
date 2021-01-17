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

  // basic layout for cards
  // <div class="current-trip card">
  //   <p>this is a place holder for the image</p>
  //   <h4 class="trip-destination">trip destination based on destination id</h4>
  //   <p class="details">start date && return date && number of travelers</p>
  // </div>





}




export default domUpdates;
