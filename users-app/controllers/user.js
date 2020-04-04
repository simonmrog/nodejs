"use-strict";

let database = {
  "myuser": {
    username: "My Username",
    name: "My Name",
  }
};

const loginUser = (req, res) => {
  // IMAGINE LOGIN
  res.render("index");
};

const getUserHome = (req, res) => {
  const username = req.body.username;
  if (username in database) {
    res.status(200).render("profile",{
      username: username,
      name: req.body.name,
    });
  }
  else res.status(404).render("notFound");
};

module.exports = { loginUser, getUserHome };