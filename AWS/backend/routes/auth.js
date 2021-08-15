const express = require("express");
const jwt = require("jsonwebtoken");
const { Robot, User, RegistedModule } = require("../models");

const router = express.Router();
const path = require("path");
const authService = require("../service/auth");
const { rejects } = require("assert");
require("../models");

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env"),
});

const Verify = async (req, res, next) => {
  const accessToken = req.headers["x-access-token"];
  //1. 토큰을 가지고 있지 않을 경우
  if (!accessToken) {
    return res.json({ error: "로그인 토큰을 가지고 있지 않습니다" });
  }
  next();
};
router.use(Verify);

router.post("/getRobots", async (req, res) => {
  authService
    .get_robots(req)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.json("error");
    });
});

router.get("/getUser", async (req, res) => {
  authService
    .get_user(req)
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      console.log(error);
      return res.json("error");
    });
});
router.post("/getModule", async (req, res) => {
  authService
    .get_module(req)
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      console.log(error);
      return res.json("error");
    });
});

router.post("/commandModule", async (req, res) => {
  //todo rpi로 커맨드 전송
  console.log(req.body);
  res.status(200).json("hi");
});

router.post("/getModules", async (req, res) => {
  authService
    .get_modules(req)
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      console.log(error);
      return res.json("error");
    });
});

module.exports = router;
