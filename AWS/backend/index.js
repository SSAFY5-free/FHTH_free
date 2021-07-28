const express = require("express");
const app = express();
const routes = require("./routes");
const env = process.env;
require("dotenv").config({});
require("./utils/mongodb")();

//middleware
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", routes);

const http_server = require("http").createServer(app);
const https_server = require("https").createServer(
  {
    //  ca: fs.readFileSync('/etc/letsencrypt/live/내블로그주소/fullchain.pem'),
    //  key: fs.readFileSync('/etc/letsencrypt/live/내블로그주소/privkey.pem'),
    //  cert: fs.readFileSync('/etc/letsencrypt/live/내블로그주소/cert.pem')
  },
  app
);

//socket.io
require("./utils/socket.js").createSocket(http_server, https_server);

//server listen
http_server.listen(env.HTTP_PORT, "0.0.0.0", function () {
  console.log(env.HTTPS_PORT + " / FHTH.server is running");
});

https_server.listen(443, "::", function () {
  console.log(443 + " / FHTH.server2 is running");
});
