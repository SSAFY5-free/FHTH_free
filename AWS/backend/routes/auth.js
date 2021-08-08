const express = require("express");
const jwt = require("jsonwebtoken");
const { Robot, User, RegistedModule } = require("../models");

const router = express.Router();
const path = require("path");
const service = require("../service/auth");
const { rejects } = require("assert");
const { RSA_NO_PADDING } = require("constants");
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
  service
    .get_robots(req)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

router.get("/getUser", async (req, res) => {
  service
    .get_user(req)
    .then((data) => {
      return res.send(data);
    })
    .catch((error) => {
      console.log(error);
      return res.send("error");
    });
});
router.post("/getModule", async (req, res) => {
  service
    .get_module(req)
    .then((data) => {
      return res.send(data);
    })
    .catch((error) => {
      console.log(error);
      return res.send("error");
    });
});

router.post("/module/command", async (req, res) => {
  service
    .post_module_command(req.body)
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((error) => {
      return res.status(400).send("error");
    });
});

router.post("/getModules", async (req, res) => {
  service
    .get_modules(req)
    .then((data) => {
      return res.send(data);
    })
    .catch((error) => {
      console.log(error);
      return res.send("error");
    });
});

module.exports = router;
