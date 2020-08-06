// Imports
const express = require("express");
const hbs = require('express-handlebars');
const fs = require('fs');

// Settings 
const port = 80;

// Init Express App
const app = express();

// Setup handlebars and its settings
app.set("view engine", "hbs"); 
app.engine('hbs', hbs({
    layoutsDir: __dirname + "/../views/layouts",
    extname: 'hbs',
    defaultLayout: 'index'
}));

// Serving folders
app.use(express.static("public")); // Public
app.use(express.static("plugins")); // Plugins

// |-- -- DEFINING VIEWS -- --| 


// Serve the 'main' view
/*app.get("/", (req, res) => {
    res.render('dash', {title: "Dashboard", active: { dashboard: true }});
})
*/
app.get("/smarthome", (req, res) => {
    res.render('smarthome', {title: "Smart Home Control", active: { smarthome: true}})
})


// |-- DEVICES --|
// Main Hub
app.get("/", (req, res) => {
    fs.readFile(__dirname + "/../hosts/host.json", "utf-8", (err, data) =>{
        devices = JSON.parse(data);
        res.render('devicehub', {title: "Device Hub", active: { devicehub: true}, device: devices})
    })
    
})

// Device Details
app.get("/device", (req, res) => {
    var dev = req.query.id;
    fs.readFile(__dirname + "/../hosts/host.json", "utf-8", (err, data) =>{
        devices = JSON.parse(data);
        res.render('device', {layout: "device_index", title: devices[dev]["name"], active: { devicehub: true}, device: devices[dev]})
    })
})

// -- START THE SERVER -- 
//app.listen(port, () => console.log(`App is listening on ${port}`));

exports.app = app