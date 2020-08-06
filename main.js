//Imports
const express = require("express");
const vhost = require("vhost");

const app = express();
const port = 80;

// Set VHOSTS
app.use(vhost('hub.james.lab', require("./device-src/device-server").app));
app.use(vhost('pi.hole.lab', require("./redirects/redirect-pihole").app));
app.use(vhost('portainer.lab', require("./redirects/redirect-portainer").app));


app.listen(port, () => console.log(`VHOST Server is listening on ${port}`));
