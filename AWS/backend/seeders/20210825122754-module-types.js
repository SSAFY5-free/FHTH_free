'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models["moduleTypes"].create([
      {
        name: "급식기"
      }
      , {
        type: "급수기"
      }]).then(res => {
        console.log(res.insertedCount);
      });
  },

  down: (models, mongoose) => {
    return models["moduleTypes"].deleteMany({}).then(res => {
      console.log(res.deletedCount);
    });
  }
};
