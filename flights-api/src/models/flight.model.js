const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    cityFrom: {
      type: String,
      required: true,
    },
    cityTo: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

const Flight = mongoose.model("flights", flightSchema);

module.exports = Flight;
