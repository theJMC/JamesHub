// Imports
const express = require("express");

// Setup Express App
const app = express();

app.get("/", (req, res) => {
    res.redirect("http://portainer.lab:9000");
});

exports.app = app;