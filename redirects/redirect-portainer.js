// Imports
const express = require("express");

// Setup Express App
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/redirectHTML/portainer.html");
});

exports.app = app;