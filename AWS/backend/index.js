const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const path = require("path");
require("dotenv").config({});
require("./utils/mongodb");

const env = process.env;

//db:mongo


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", routes);

const http_server= require('http').createServer(app);
const https_server = require("https").createServer({
//  ca: fs.readFileSync('/etc/letsencrypt/live/내블로그주소/fullchain.pem'),
//  key: fs.readFileSync('/etc/letsencrypt/live/내블로그주소/privkey.pem'),
//  cert: fs.readFileSync('/etc/letsencrypt/live/내블로그주소/cert.pem')
},app);


//socket.io
require("./utils/socket.js").createSocket(http_server, https_server)

//server listen
http_server.listen(env.NODEJS_HTTP_PORT,"0.0.0.0",  function () {
   console.log(env.NODEJS_HTTP_PORT + " / FHTH.server is running")
})


https_server.listen(env.NODEJS_HTTPS_PORT,"::", function () {
   console.log(env.NODEJS_HTTPS_PORT+ " / FHTH.server2 is running")
})



