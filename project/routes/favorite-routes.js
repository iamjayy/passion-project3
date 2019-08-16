// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts by keyword
  app.get("/api/fav", function (req, res) {

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Mentor
    db.Favorite.findAll({
      where: {},
      // include: [db.Mentor],
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/fav", function (req, res) {
    // post is table 
    db.Favorite.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/fav/:id", function (req, res) {
    db.Favorite.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};