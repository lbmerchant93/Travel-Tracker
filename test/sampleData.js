const sampleTravelerData = [{
  "id": 1,
  "name": "Ham Leadbeater",
  "travelerType": "relaxer",
}, {
  "id": 2,
  "name": "Rachael Vaughten",
  "travelerType": "thrill-seeker",
}, {
  "id": 3,
  "name": "Sibby Dawidowitsch",
  "travelerType": "shopper",
}, {
  "id": 4,
  "name": "Leila Thebeaud",
  "travelerType": "photographer",
}, {
  "id": 5,
  "name": "Tiffy Grout",
  "travelerType": "thrill-seeker",
}, {
  "id": 6,
  "name": "Laverna Flawith",
  "travelerType": "shopper",
}, {
  "id": 7,
  "name": "Emmet Sandham",
  "travelerType": "relaxer",
}];

const sampleTripData = [{
    "id": 117,
    "userID": 1,
    "destinationID": 1,
    "travelers": 3,
    "date": "2021/01/09",
    "duration": 15,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 166,
    "userID": 2,
    "destinationID": 7,
    "travelers": 2,
    "date": "2020/03/05",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 166,
    "userID": 1,
    "destinationID": 7,
    "travelers": 2,
    "date": "2020/03/05",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
  }
];

const sampleDestinationData = [{
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  }, {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  },
  {
    "id": 3,
    "destination": "Sydney, Austrailia",
    "estimatedLodgingCostPerDay": 130,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "opera house and city buildings on the water with boats"
  },
  {
    "id": 4,
    "destination": "Cartagena, Colombia",
    "estimatedLodgingCostPerDay": 65,
    "estimatedFlightCostPerPerson": 350,
    "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "alt": "boats at a dock during the day time"
  },
  {
    "id": 5,
    "destination": "Madrid, Spain",
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with clear skys and a road in the day time"
  },
  {
    "id": 6,
    "destination": "Jakarta, Indonesia",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 890,
    "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "lit up city at night"
  },
  {
    "id": 7,
    "destination": "Paris, France",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 395,
    "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "city during the day time with eiffel tower"
  }
];


module.exports = {
  sampleDestinationData,
  sampleTravelerData,
  sampleTripData
}
