const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes");
//dotenv
const path = require("path");
const dotenv = require("dotenv").config({});

const { PORT, MONGO_URI } = process.env;

//db:mongo
const mongoose = require("mongoose");
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "fhth",
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("mongoDB connected");
});

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
http_server.listen(PORT,"0.0.0.0",  function () {
   console.log(PORT + " / FHTH.server is running")
})


https_server.listen(443,"::", function () {
   console.log(443 + " / FHTH.server2 is running")
})



