const express = require("express");
const router = express.Router();
const path = require("path");

const jwt = require("jsonwebtoken");

const { User, RegistedModule, Robot, Session } = require("../models");

router.post("/getAccessToken", async (req, res, next) => {
  console.log(req.body);
  const { email, pw, name } = req.body;
  const result = await User.findOne({ email, pw });

  //로그인 실패 : 존재하지 않는 회원
  if (!result) return res.json({ accessToken: "" });

  //로그인 성공시
  // 1. 세션 발급
  const accessToken = jwt.sign(
    {
      _id: result._id,
    },
    "fhth",
    {
      expiresIn: "1h",
    }
  );
  return res.json({ accessToken });
});
router.post("/addAccount", async (req, res) => {
  const { email, pw, device } = req.body;
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
  console.log("계정생성");
  return res.send({ result: 1 });
});
router.post("/setModule", async (req, res) => {
  const { _id, _data } = req.body;
  console.log(module_data);
  try {
    await RegistedModule.findByIdAndUpdate(_id, { data });
    return res.send("ok");
  } catch (err) {
    return res.status(204).send("err");
  }
});

router.post("/verifyRobot", async (req, res) => {
  console.log(req.body);
  const { serial } = req.body;
  const result = await Robot.findOne({ serial });
  console.log(result);

  if (!result) res.send("ok");
  else res.status(204).send("err");
  return;
});
module.exports = router;
