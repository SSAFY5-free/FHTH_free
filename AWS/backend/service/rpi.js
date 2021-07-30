const { RegistedModule, Session } = require("../models");
exports.post_session = (req) => {
  return new Promise(async (resolve, reject) => {
    const host = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const { serial } = req.body;
    if (!serial) resolve({ err: "no data" });

    Session.create({ host, serial });
    resolve();
  });
};
// exports.get_session = (data) => {
//   return new Promise(async (resolve, reject) => {
//     resolve();
//   });
// };
