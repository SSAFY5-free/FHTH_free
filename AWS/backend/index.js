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

//socket.io
const server = require("http").createServer(app);
const io = require("./utils/socket")(server);

//REST API
app.use("/", routes);
server.listen(env.NODEJS_PORT, function () {
  console.log(env.NODEJS_PORT + " / FHTH.server is running");
});
