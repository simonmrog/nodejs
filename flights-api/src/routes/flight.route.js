const express = require("express");
const router = express.Router();

const flightValidation = require("../middlewares/flight.middleware");
const flightController = require("../controllers/flight.controller");

router.get("/", flightController.getFlights);
router.post("/", flightValidation, flightController.createFlight);
router.get("/:id", flightController.getFlightById);
router.patch("/:id", flightValidation, flightController.updateFlight);
router.delete("/:id", flightController.deleteFlight);

module.exports = router;
