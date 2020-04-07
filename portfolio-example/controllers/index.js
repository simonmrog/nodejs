const ProjectController = require("./project");

const renderHome = (req, res) => {
  ProjectController.getProjects()
    .then(data => res.render("home", { projects: data }))
    .catch((err) => res.status(404).render("notFound", { err }));
};

const renderProject = (req, res) => {
  const slug = req.params.slug;
  ProjectController.getProjects({ slug })
    .then((projects) => {
      if (projects.length != 0) {
        const project = projects[0];
        res.status(200).render("project", project);
      }
      else throw new Error("Project Not Found");
    })
    .catch((err) => res.status(404).render("notFound", { err }));
};

const notFound = (req, res) => {
  res.status(404).render("notFound", { err: "Page Not Found"});
};

const getProjects = (req, res) => {
  console.log("[INFO]: getProjects");
  let data = req.query;
  if (req.query.id) data = { _id: req.query.id}
  ProjectController.getProjects(data)
    .then(data => res.status(200).send({ status: "ok", data: data }))
    .catch((err) => res.status(404).send({
      status: "error",
      message: err.message
    }));
};

const createProject = (req, res) => {
  console.log("[INFO]: createProject");
  const data = req.body;
  ProjectController.createProject(data)
    .then(createdData => res.status(200).send({
      status: "ok",
      message: "Project Created Successfully",
      createdData: createdData
    }))
    .catch(err => res.status(404).send({
      status: "error",
      message: err.message
    }));
};

const updateProject = (req, res) => {
  console.log("[INFO]: updateProjectById");
  const id = req.query.id;
  const newData = req.body;
  ProjectController.updateProject(id, newData)
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

const deleteProject = (req, res) => {
  const id = req.query.id;
  ProjectController.deleteProject(id)
    .then((response) => res.status(200).send({
      status: "ok",
      message: response
    }))
    .catch((err) => res.status(404).send({
      status: "error",
      message: err.message
    }));
};

module.exports = {
  renderHome,
  renderProject,
  notFound,
  createProject,
  getProjects,
  updateProject,
  deleteProject 
};
