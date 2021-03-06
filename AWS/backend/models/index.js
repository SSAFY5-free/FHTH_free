const fs = require('fs');
const path = require('path');
const Mongoose = require('mongoose');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

if (config.database.url) {
  setTimeout(function () {
    Mongoose.connect(config.database.url, config.database.options);
  }, 60000)
} else if (config.database.config.dbName) {
  setTimeout(function () {
    Mongoose.connect(`${config.database.protocol}://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}`, config.database.options);
  }, 60000)
} else {
  setTimeout(function () {
    Mongoose.connect(`${config.database.protocol}://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`, config.database.options);
  }, 60000)
}

const db = () => {
  const m = {};

  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.resolve(__dirname, file))(Mongoose);
      m[model.modelName] = model;
    });

  return m;
}


const models = db();
const mongoose = Mongoose;

module.exports = mongoose;
module.exports.default = models;