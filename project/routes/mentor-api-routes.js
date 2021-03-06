var db = require("../models");

module.exports = function(app) {
  app.get("/api/mentors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Mentor.findAll({
      include: [db.Post]
    }).then(function(dbMentor) {
      res.json(dbMentor);
    });
  });
  
  app.post("/api/mentors", function(req, res) {
    db.Mentor.create(req.body).then(function(dbMentor) {
      res.json(dbMentor);
    });
  });
  
  app.delete("/api/mentors/:id", function(req, res) {
    db.Mentor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMentor) {
      res.json(dbMentor);
    });
  });

};

// app.get("/api/mentors/:id", function(req, res) {
//   // Here we add an "include" property to our options in our findOne query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Post
//   db.Mentor.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [db.Post]
//   }).then(function(dbMentor) {
//     res.json(dbMentor);
//   });
// });