const ProjectModel = require("../models/project");

const getProjects = (data) => {
  return new Promise((resolve, reject) => {
    ProjectModel.find(data)
      .then(data => {
        if (!data) reject({ message: "Data Not Found" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
};

const createProject = data => {
  return new Promise((resolve, reject) => {
    let Project = new ProjectModel({
      img: data.img,
      name: data.name,
      description: data.description,
      client: data.client,
      languages: data.languages
    });
    Project.save(data)
      .then(data => {
        if (!data) reject({ message: "Internal Server Error" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
}

const updateProject = (id, newData) => {
  return new Promise((resolve, reject) => {
    ProjectModel.findByIdAndUpdate(id, { $set: newData }, { new: true })
      .then(data => {
        if (!data) reject({ message: "Data Not Found" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
};

const deleteProject = id => {
  return new Promise((resolve, reject) => {
    ProjectModel.findById(id)
      .then((project) => {
        if (!project) reject({ message: "Product Not Found" });
        else {
          project.remove()
          .then(() => resolve({ message: "Project Deleted Successfully" }))
          .catch(err => reject(err));
        }
      })
      .catch(err => reject(err));
  });
};

module.exports = { getProjects, createProject, updateProject, deleteProject };