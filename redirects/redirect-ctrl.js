// Imports
const express = require("express");

// Setup Express App
const app = express();

app.get("/", (req, res) => {
    res.redirect("http://ctrl.lab:8000");
});

exports.app = app;