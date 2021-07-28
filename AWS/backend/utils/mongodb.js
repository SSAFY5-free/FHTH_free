const dotenv = require("dotenv").config({});
const env = process.env;

module.exports = () => {
  const mongoose = require("mongoose");
  mongoose.connect(env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: env.MONGODB_DB,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("mongoDB connected");
  });
};
