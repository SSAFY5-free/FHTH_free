const mongoose = require("mongoose");
// const { RegistedModule, Session } = require("../models");
exports.mid_updateSession = (req, res, next) => {
  const host = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const robot_id = req.headers["x-robot_id"] || "60ee778d01cc6806430d00d2";

  req.session.host = host;
  req.session.robot_id = mongoose.Types.ObjectId(robot_id);

  console.log(req.session.cookie);
  next();
};
exports.post_session = (req) => {
  return new Promise(async (resolve, reject) => {
    const host = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    resolve();
  });
};

// exports.get_session = (data) => {
//   return new Promise(async (resolve, reject) => {
//     resolve();
//   });
// };
