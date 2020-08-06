//Imports
const express = require("express");
const vhost = require("vhost");

const app = express();
const port = 80;

// Set VHOSTS
app.use(vhost('device.example.com', require("./device-src/device-server").app))
app.use(vhost('test.example.com', require("./device-src/new-server").app))


app.listen(port, () => console.log(`VHOST Server is listening on ${port}`));
