// Imports
const express = require("express");

const redirect = "https://github.com/theJMC"

// Setup Express App
const app = express();

app.get("/", (req, res) => {
    res.redirect(redirect);
});

exports.app = app;