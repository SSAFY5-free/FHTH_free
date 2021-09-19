'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models["registedModules"].create([
      {
        serial: "970121",
        type_id: 1,
        data: { iseaten: false, left: 0, drink: false, water: false },
        name: "module1"
      },
      {
        serial: "970232",
        type_id: 2,
        data: { iseaten: false, left: 0, drink: false, water: false },
        name: "module2"
      },
      {
        serial: "970343",
        type_id: 3,
        data: { iseaten: false, left: 0, drink: false, water: false },
        name: "module3"
      }
    ]).then(res => {
      console.log(res.insertedCount);
    });
  },

  down: (models, mongoose) => {
    return models["registedModules"].deleteMany({}).then(res => {
      console.log(res.deletedCount);
    });
  }
};
