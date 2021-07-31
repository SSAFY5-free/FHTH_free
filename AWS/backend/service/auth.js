const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { Robot, User, RegistedModule, Session } = require("../models");
const db = require("mongoose").connection;

exports.get_robots = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = req.headers["x-access-token"];

      //토큰에서 user id 추출
      const user_id = jwt.decode(accessToken, "fhth")._id;

      //user id로 해당 유저가 보유한 robot들 아이디 추출
      const { robots_id } = await User.findById(user_id);

      const robots = await robots_id.reduce(async (promise, cur) => {
        const acc = await promise.then();
        const robot = await Robot.findById(cur);
        acc.push(robot);
        return Promise.resolve(acc);
      }, Promise.resolve([]));

      if (robots) resolve(robots);
      else reject("robots이 생성되지 않았습니다");
    } catch (error) {
      reject(error);
    }
  });
};
exports.get_user = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = req.headers["x-access-token"];
      const user_id = jwt.decode(accessToken, "fhth")._id;
      const { email, name } = await User.findById(user_id);
      resolve(res.json({ email, name }));
    } catch (error) {
      reject();
    }
  });
};
exports.get_module = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { _id } = req.body;

      const result = await RegistedModule.findById(_id);
      // console.log(" : ", result)
      const gap = new Date() - result.updatedAt;

      if (gap < 8000) resolve(result);
      else resolve("off");
    } catch (error) {
      reject(error);
    }
  });
};
exports.get_modules = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { _id } = req.body;

      const { modules_id } = await Robot.findById(_id);
      const result = await modules_id.reduce(async (promise, cur) => {
        const acc = await promise.then();

        const data = await RegistedModule.findById(cur);

        acc.push(data);
        return acc;
      }, Promise.resolve([]));
      if (modules_id) resolve(result);
      else resolve("no modules");
    } catch (error) {
      reject(error);
    }
  });
};

exports.post_module_command = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { robot_id, module_id, command } = data;
      const result = await Session.findOne({ robot_id });
      if (!result) {
        //해당 robot_id가 연결중인 session table에 존재하지 않음.
        reject();
      } else {
        const { host } = result.session;
        //연결되어있음
        //....
        axios({
          method: "post",
          url: "/",
          data: {
            firstName: "Fred",
            lastName: "Flintstone",
          },
          proxy: {
            host: host,
            port: 8080,
          },
          timeout: 3000,
        }).catch((error) => {
          console.log("error : ", error.response.status);
          reject(error.response.status);
        });
        //....
        resolve(result);
      }
    } catch (error) {
      console.log(error);
      reject();
    }
  });
  j;
};
