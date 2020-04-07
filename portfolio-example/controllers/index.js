const ProjectController = require("./project");

const renderHome = (req, res) => {
  ProjectController.get()
    .then(data => {
      res.render("home", { projects: data });
    })
    .catch((err) => res.status(404).send({
      status: "error",
      message: err.message
    }));
};

const notFound = (req, res) => {
  res.status(404).render("notFound");
};

const getProjects = (req, res) => {
  console.log("[INFO]: getProjects");
  ProjectController.get()
    .then(data => {
      res.status(200).send({status: "ok", data: data });
    })
    .catch((err) => res.status(404).send({
      status: "error",
      message: err.message
    }));
};

const updateProjectById = (req, res) => {
  console.log("[INFO]: updateProjectById");
  const id = req.query.id;
  const newData = req.body;
  ProjectController.update(id, newData)
    .then(data => {
      res.status(200).send({
        status: "ok",
        message: `Product ${id} updated successfully`,
        updatedData: data
      });
    })
    .catch((err) => res.status(404).send({
      status: "error",
      message: err.message
    }));
};

module.exports = { renderHome, notFound, getProjects, updateProjectById };
