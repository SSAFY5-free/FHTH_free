const express = require("express");
const app = express();
const routes = require("./routes");
const env = process.env;
require("dotenv").config({});
require("./utils/mongodb")();

//middleware
const cors = require("cors");
var whitelist = ["http://127.0.0.1:8081", "http://localhost:8081"];
var corsOptions = {
  origin: function (origin, callback) {
    // if (whitelist.indexOf(origin) !== -1) {
    callback(null, true);
    // } else {
    // callback(new Error("Not allowed by CORS"));
    // }
  },
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

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
  console.log(env.HTTP_PORT + " / FHTH.server is running");
});

https_server.listen(env.HTTPS_PORT, "::", function () {
  console.log(env.HTTPS_PORT + " / FHTH.server2 is running");
});
