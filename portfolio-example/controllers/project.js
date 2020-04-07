const ProjectModel = require("../models/project");

const get = () => {
  return new Promise((resolve, reject) => {
    ProjectModel.find()
      .then(data => {
        if (!data) reject({ message: "Data Not Found" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
};

const update = (id, newData) => {
  return new Promise((resolve, reject) => {
    ProjectModel.findByIdAndUpdate(id, { $set: newData }, { new: true })
      .then(data => {
        if (!data) reject({ message: "Data Not Found" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
};


module.exports = { get, update };