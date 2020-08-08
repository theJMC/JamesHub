//Imports
const express = require("express");
const vhost = require("vhost");

const app = express();
const port = 80;

// Set VHOSTS
app.use(vhost('hub.lab', require("./device-src/device-server").app));
app.use(vhost('pi.hole.lab', require("./redirects/redirect-pihole").app));
app.use(vhost('portainer.lab', require("./redirects/redirect-portainer").app));
app.use(vhost('ctrl.lab', require("./redirects/redirect-ctrl").app));

app.get("/", (req, res) => {
    res.status(301).send("Try accessing from a different URL")
})

app.listen(port, () => console.log(`VHOST Server is listening on ${port}`));
