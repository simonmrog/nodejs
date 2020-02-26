"use strict";

const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find().select("_id title body")
    .then((posts) => {
      console.log("[INFO]: posts sucessfully found in DB");
      return (res.status(200).json({posts}));
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("CREATING POST", post);
  post.save().then((result) => {
    console.log("[INFO]: post added sucessfully to DB");
    return (res.status(200).json({
      post: result
    }));
  });
  // try {
  //   post.save((err, result) => {
  //     return (res.status(200).json({
  //       post: result
  //     }));
  //   });
  // }
  // catch (err) {
  //   return (res.status(400).json ({
  //     error: err
  //   }));
  // }
}