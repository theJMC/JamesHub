const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("TESTING123")
})


exports.app = app