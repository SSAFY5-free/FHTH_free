const express = require("express");
const jwt = require("jsonwebtoken");
const { Robot, User, RegistedModule } = require("../models");
const router = express.Router();
const path = require("path");

require("../models");

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env"),
});

const Verify = async (req, res, next) => {
  const accessToken = req.headers["x-access-token"];
  console.log(accessToken);
  //1. 토큰을 가지고 있지 않을 경우
  if (!accessToken) {
    return res.json({ error: "로그인 토큰을 가지고 있지 않습니다" });
  }
  next();
};
router.use(Verify);

router.post("/getRobots", async (req, res) => {
  const accessToken = req.headers["x-access-token"];
  console.log(jwt.decode(accessToken, "fhth"));
  const user_id = jwt.decode(accessToken, "fhth")._id;
  const { robots_id } = await User.findById(user_id);
  const robots = await robots_id.reduce(async (promise, cur) => {
    const acc = await promise.then();
    const robot = await Robot.findById(cur);
    acc.push(robot);
    return Promise.resolve(acc);
  }, Promise.resolve([]));
  if (robots) return res.json(robots);
  else return res.json({ err: "err" });
});

router.get("/getUser", async (req, res) => {
  const accessToken = req.headers["x-access-token"];
  const user_id = jwt.decode(accessToken, "fhth")._id;
  const { email, name } = await User.findById(user_id);
  return res.json({ email, name });
});
router.post("/getModules", async (req, res) => {
  const { _id } = req.body;

  const { modules_id } = await Robot.findById(_id);
  const result = await modules_id.reduce(async (promise, cur) => {
    const acc = await promise.then();

    const data = await RegistedModule.findById(cur);

    acc.push(data);
    return acc;
  }, Promise.resolve([]));
  if (modules_id) return res.json(result);
  else return res.json({ err: "err" });
});
router.post("/getModule", async (req, res) => {
  const { _id } = req.body;
  try {
    const result = await RegistedModule.findById(_id);
    // console.log(" : ", result)
    const gap = new Date() - result.updatedAt;

    if (gap < 8000) res.status(200).send(result);
    else res.status(204).send("off");
  } catch (err) {
    console.log("err");
    res.status(404).send("no");
  }
});

router.post("/commandModule", async (req, res) => {
  console.log(req.body);
  res.status(200).send("hi");
});
module.exports = router;
