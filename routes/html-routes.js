const path = require('path');
const express = require("express");

// renders to different routes based on when user select those pages
//the purpose of the function is to load each page 
module.exports = function (app) {
    // this route loads homepage
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // this route loads exercise page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // this routes load stats page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}