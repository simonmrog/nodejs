const flightService = require("../services/flight.service");

const getFlights = async (req, res, next) => {
  try {
    const flights = await flightService.getFlights();
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

const getFlightById = async (req, res, next) => {
  try {
    const flight = await flightService.getFlightById(req.params.id);
    if (!flight) throw new Error("Flight Not Found");
    res.json(flight);
  } catch (err) {
    next(err);
  }
};

const createFlight = async (req, res, next) => {
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json(flight);
  } catch (err) {
    next(err);
  }
};

const updateFlight = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedFlight = await flightService.updateFlight(id, req.body);
    res.json(updatedFlight);
  } catch (err) {
    next(err);
  }
};

const deleteFlight = async (req, res, next) => {
  try {
    const deleted = await flightService.deleteFlight(req.params.id);
    if (!deleted) throw new Error("Flight Not Found");
    res.json({ status: "ok", message: "Flight Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
};
