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
  }
}
// function retrieveSpecificTraveler(travelerId) {
//   return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
//       .then(response => response.json())
//       .catch(err => {
//         alert("Sorry! We are having trouble getting the data, try again later!")
//       })
// }

// function retrieveDestinations() {
//   return fetch("http://localhost:3001/api/v1/destinations")
//       .then(response => response.json())
//       .catch(err => {
//         alert("Sorry! We are having trouble getting the data, try again later!")
//       })
// }

// function retrieveTravelers() {
//   return fetch("http://localhost:3001/api/v1/travelers")
//       .then(response => response.json())
//       .catch(err => {
//         alert("Sorry! We are having trouble getting the data, try again later!")
//       })
// }

// function retrieveTrips() {
//   return fetch("http://localhost:3001/api/v1/trips")
//       .then(response => response.json())
//       .catch(err => {
//         alert("Sorry! We are having trouble getting the data, try again later!")
//       })
// }


export default fetchData;
