// Fetch Requests
let fetchData = {
  retrieveSpecificTraveler(travelerId) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  retrieveDestinations() {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  retrieveTravelers() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  retrieveTrips() {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  },

  addNewTripForTraveler(trip) {
    return fetch("http://localhost:3001/api/v1/trips", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: trip.id,
          userID: trip.userID,
          destinationID: trip.destinationID,
          travelers: trip.travelers,
          date: trip.date,
          duration: trip.duration,
          status: trip.status,
          suggestedActivities: trip.suggestedActivities
        })
      })
      .then(response => response.json())
      .catch(err => {
        alert("Sorry! We are having trouble getting the data, try again later!")
      })
  }
}


export default fetchData;
