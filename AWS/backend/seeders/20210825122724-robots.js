'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models["robots"].create([
      {
        serial: "123123",
        modules_id: [1, 2],
        name: "robot1"
      },
      {
        serial: "212212",
        modules_id: [3],
        name: "robot2"
      }
    ]).then(res => {
      console.log(res.insertedCount);
    });
  },

  down: (models, mongoose) => {
    return models["robots"].deleteMany({}).then(res => {
      console.log(res.deletedCount);
    });
  }
};