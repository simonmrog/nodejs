const FlightModel = require("../models/flight.model");

function getFlights(id) {
  return FlightModel.find(id);
}

function getFlightById(id) {
  return FlightModel.findById(id);
}

function createFlight(flight) {
  const newFlight = new FlightModel(flight);
  return newFlight.save();
}

function updateFlight(id, flight) {
  return FlightModel.findByIdAndUpdate(id, flight, { new: true });
}

async function deleteFlight(id) {
  const video = await FlightModel.findById(id);
  if (!video) throw new Error("Flight Not Found");
  return FlightModel.findByIdAndDelete(id);
}

module.exports = {
  getFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
};
