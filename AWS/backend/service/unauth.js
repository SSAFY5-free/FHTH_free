const jwt = require("jsonwebtoken");

const { User, RegistedModule, Robot, Session } = require("../models");

exports.post_accessToken = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, pw, name } = data;
      const result = await User.findOne({ email, pw });
      //검색 결과가 없으면
      console.log(result);
      if (!result) resolve();
      else {
        //accessToken 발급
        const accessToken = jwt.sign(
          {
            _id: result._id,
          },
          "fhth",
          {
            expiresIn: "1h",
          }
        );
        console.log(result);
        resolve({ accessToken });
      }
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};

exports.post_accessToken = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, pw, name } = data;
      const result = await User.findOne({ email, pw });
      //검색 결과가 없으면
      console.log(result);
      if (!result) resolve();
      else {
        //accessToken 발급
        const accessToken = jwt.sign(
          {
            _id: result._id,
          },
          "fhth",
          {
            expiresIn: "1h",
          }
        );
        console.log(result);
        resolve({ accessToken });
      }
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};

exports.post_account = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, pw, device } = data;
      User.create(
        {
          email,
          pw,
          device,
        },
        function (err) {
          console.log(err);
        }
      );
      resolve();
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};

exports.post_module = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { module_id, data } = payload;
      // console.log(data);

      await RegistedModule.findByIdAndUpdate(module_id, { data });
      resolve();
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};

exports.post_verifyRobot = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { serial } = data;
      const result = await Robot.findOne({ serial });
      resolve(result);
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};
