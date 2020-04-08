const mongoose = require("mongoose");

const SubscriberSchema = mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  message: { type: String, default: "" },
  slug: { type: String, default: "", immutable: true },
});

module.exports = mongoose.model("Subscriber", SubscriberSchema);