const express = require("express");
const jwt = require("jsonwebtoken");
// const { Robot, User, RegistedModule } = require("../models");
const db = require("../models").default;

exports.get_robots = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = req.headers["x-access-token"];

      //토큰에서 user id 추출
      const { email } = jwt.decode(accessToken, "fhth");
      console.log("user email : ", email)

      //user id로 해당 유저가 보유한 robot들 아이디 추출
      const { robots_id } = await db["users"].findOne({ email });

      const robots = await robots_id.reduce(async (promise, id) => {
        const acc = await promise.then();
        const robot = await db["robots"].findOne({ id });
        acc.push(robot);
        return Promise.resolve(acc);
      }, Promise.resolve([]));

      console.log("user robots : ", robots)
      if (robots) resolve(robots);
      else resolve("");
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
      const { email, name } = await db["users"].findById(user_id);
      resolve(res.json({ email, name }));
    } catch (error) {
      reject();
    }
  });
};
exports.get_module = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { id } = req.body;

      const result = await db["registedModules"].findOne({ id });
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
      const { id } = req.body;

      console.log("user robot_id : ", id)
      const { modules_id } = await db["robots"].findOne({ id });
      const result = await modules_id.reduce(async (promise, id) => {
        const acc = await promise.then();

        const data = await db["registedModules"].findOne({ id });

        acc.push(data);
        return acc;
      }, Promise.resolve([]));

      console.log("user modules", result)
      if (modules_id) resolve(result);
      else resolve("");
    } catch (error) {
      reject(error);
    }
  });
};
