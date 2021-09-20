const jwt = require("jsonwebtoken");

// const { db["User"], RegistedModule, Robot, Session } = require("../models");
const db = require("../models").default;

exports.post_accessToken = (data) => {

  return new Promise(async (resolve, reject) => {

    try {
      const { email, pw, name } = data;
      const result = await db["users"].findOne({ email, pw });
      //검색 결과가 없으면
      // console.log(result);
      if (!result) resolve();
      else {
        //accessToken 발급
        const accessToken = jwt.sign(
          {
            email: result.email,
            user_id: result.id
          },
          "fhth",
          {
            expiresIn: "1h",
          }
        );
        // console.log(result);
        return resolve({
          accessToken, email: "Zz"
        });
      }
    } catch (error) {
      console.log(error);
      return reject();
    }
  });
};

exports.post_account = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, pw, robot } = data;
      db["users"].create(
        {
          email,
          pw,
          robot,
        },
        function (err) {
          console.log(err);
        }
      );
      return resolve();
    } catch (error) {
      console.log(error);
      return reject();
    }
  });
};

exports.post_module = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { module_id, data } = payload;
      console.log(module_id, data);

      await db["registedModules"].findOneAndUpdate({
        id: module_id
      }, { data });
      return resolve();
    } catch (error) {
      console.log(error);
      return reject();
    }
  });
};

exports.post_verifyRobot = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { serial } = data;
      const result = await db["robots"].findOne({ serial });
      return resolve(result);
    } catch (error) {
      console.log(error);
      return reject();
    }
  });
};
