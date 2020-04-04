"use-strict";

var database = {
  "username": {
    name: "User Name",
    occupation: "Physicist",
    languages: ["JavaScript", "Python", "C"],
    password: "password"
  }
};

const loginUser = (req, res) => {
  res.render("index");
};

const getUserHome = (req, res) => {
  // NO SECURITY, JUST FOR EXERCISE
  const username = req.body.username;
  const password = req.body.password;
  if (username in database) {
    if (database[username]["password"] == password) {
      let userData = {
        username: username,
        name: database[username].name,
        occupation: database[username].occupation,
        languages: database[username].languages
      }
    res.status(200).render("home", userData);
    }
    else res.status(400).render("index");
  }
  else res.status(404).render("notFound");
};

const getUserProfile = (req, res) => {
  const username = req.params.username;
  if (username in database) {
    let userData = {
      name: database[username].name,
      occupation: database[username].occupation,
      languages: database[username].languages
    }
    res.status(200).render("profile", userData);
  }
  else res.status(404).render("notFound");
};

const addNewUser = (req, res) => {
  const username = req.body.username;
  if (!(username in database)) {
    database[username] = {
      name: req.body.name,
      occupation: req.body.occupation,
      languages: req.body.languages.split(" ").join("").split(","),
      password: req.body.password
    };
    res.status(200).redirect("/profile/" + username);
  }
  else res.status(400).send({ error: "User already exists."})
};

const getUsers = (req, res) => {
  // WITH PASSWORDS, JUST AS EXERCISE
  res.status(200).json(database);
};

module.exports = { loginUser, getUserHome, getUserProfile, addNewUser, getUsers };