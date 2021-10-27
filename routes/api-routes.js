const express = require("express");
const { Workout } = require("../models");

module.exports = function (app) {
  //Get workouts
  app.get("/api/workouts", function (req, res) {
    Workout.find({}).then(function (result) {
      res.json(result);
    });
  });
  
  //Get workouts range
  app.get("/api/workouts/range", function (req, res) {
    Workout.find({}).then(function (result) {
      res.json(result);
    });
  });

  //Create workout
  app.post("/api/workouts/", function (req, res) {
    Workout.create({
      day: new Date().setDate(new Date().getDate()),
      exercises: [],
    }).then(function (result) {
      res.json(result);
    });
  });

  //Update workout by id
  app.put("/api/workouts/:id", function (req, res) {
    var newExercise = req.body;
    Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: newExercise } }
    ).then(function (result) {
      return res.json(result);
    });
  });
};
