// Imports
const express = require("express");

// Setup Express App
const app = express();

app.get("/", (req, res) => {
    res.redirect("http://pi.hole.lab:8080/admin")
});

exports.app = app;