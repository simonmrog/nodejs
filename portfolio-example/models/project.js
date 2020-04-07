const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  img: { type: String, default: "" },
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  client: { type: String, default: "" },
  languages: { type: String, default: "" },
});

module.exports = mongoose.model("Project", ProjectSchema);