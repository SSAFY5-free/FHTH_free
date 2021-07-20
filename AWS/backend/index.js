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

//socket.io
const server = require("http").createServer(app);
const io = require("./utils/socket")(server);

//REST API
app.use("/", routes);
server.listen(PORT, function () {
  console.log(PORT + " / FHTH.server is running");
});
