// Imports
const express = require("express");

const redirect = "REDIRECT"

// Setup Express App
const app = express();

app.get("/", (req, res) => {
    res.redirect(redirect);
});

exports.app = app;