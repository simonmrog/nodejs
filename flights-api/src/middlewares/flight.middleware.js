const Joi = require("@hapi/joi");

const flight = Joi.object({
  _id: Joi.string().optional(),
  cityFrom: Joi.string().required(),
  cityTo: Joi.string().required(),
  price: Joi.number().required(),
  availableSeats: Joi.number().required(),
  date: Joi.date().required(),
});

const updateFlight = Joi.object({
  cityFrom: Joi.string().optional(),
  cityTo: Joi.string().optional(),
  price: Joi.number().optional(),
  availableSeats: Joi.number().optional(),
  date: Joi.date().optional(),
});

function validateFlight(req, res, next) {
  let schema = null;
  if (req.method === "POST") schema = flight;
  else if (req.method === "PATCH") schema = updateFlight;
  const { error } = schema.validate(req.body);
  if (error) next(error.details[0]);
  next();
}

module.exports = validateFlight;
