var express = require("express");
var router = express.Router();
const axios = require("axios");
var fs = require("fs");
const { PythonShell } = require("python-shell");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("HELLO JBJ");
});

// 밥 먹은거
router.post("/foodeat", async function (req, res, next) {
  //   PythonShell.run("./BLE_Client.py", null, function (err) {
  //     if (err) throw err;
  //     console.log("finished");
  //   });
  res.json(req.body);
  await axios
    .post("http://127.0.0.1:8079/unauth/setModule", {
      _id: "60f8403e4d4fee39fe4a96d2",
      module_data: {
        iseaten: req.body.EATEN,
        left: req.body.LEFT,
        drink: req.body.DRINK,
        water: req.body.WATER_LACK,
      },
    })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
      console.log(22222);
    })
    .catch(function (error) {
      res.send(error);
      console.log(11111);
      console.log(error);
    });
});
// 밥 남은거
router.post("/foodleft", async function (req, res, next) {
  res.json(req.body);
  //   await axios
  //     .post("http://127.0.0.1:8079/unauth/getAccessToken", {
  //       email: req.body.email,
  //       pw: req.body.pw,
  //     })
  //     .then((response) => {
  //       res.send(response.data);
  //       console.log(response.data);
  //       console.log(22222);
  //     })
  //     .catch(function (error) {
  //       res.send(error);
  //       console.log(11111);
  //       console.log(error);
  //     });
});

// 물 먹었는지
router.post("/waterdrink", async function (req, res, next) {
  res.json(req.body);
  //   await axios
  //     .post("http://127.0.0.1:8079/unauth/getAccessToken", {
  //       email: req.body.email,
  //       pw: req.body.pw,
  //     })
  //     .then((response) => {
  //       res.send(response.data);
  //       console.log(response.data);
  //       console.log(22222);
  //     })
  //     .catch(function (error) {
  //       res.send(error);
  //       console.log(11111);
  //       console.log(error);
  //     });
});

// 물 부족한지
router.post("/waterlack", async function (req, res, next) {
  res.json(req.body);
  //   await axios
  //     .post("http://127.0.0.1:8079/unauth/getAccessToken", {
  //       email: req.body.email,
  //       pw: req.body.pw,
  //     })
  //     .then((response) => {
  //       res.send(response.data);
  //       console.log(response.data);
  //       console.log(22222);
  //     })
  //     .catch(function (error) {
  //       res.send(error);
  //       console.log(11111);
  //       console.log(error);
  //     });
});
router.post("/getAccessToken", function (req, res, next) {
  console.log(req.headers["x-access-token"]);
  axios
    .post("http://127.0.0.1:8079/unauth/getAccessToken", {
      email: req.body.email,
      pw: req.body.pw,
    })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
      console.log(22222);
    })
    .catch(function (error) {
      res.send(error);
      console.log(11111);
      console.log(error);
    });
});
router.post("/getSession", function (req, res, next) {
  console.log(req.headers["x-access-token"]);
  axios
    .post("http://127.0.0.1:8079/rpi/session", {
      serial: req.body.serial,
    })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
      console.log(22222);
    })
    .catch(function (error) {
      res.send(error);
      console.log(11111);
      console.log(error);
    });
});
router.post("/getModule", function (req, res, next) {
  console.log("1" + req.headers["x-access-token"]);
  axios
    .post("http://127.0.0.1:8079/auth/getModule", {
      module_id: req.body.module_id,
      headers: {
        "x-access-token": req.headers["x-access-token"],
      },
    })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
      console.log(22222);
    })
    .catch(function (error) {
      res.send(error);
      console.log(11111);
      console.log(error);
    });
});

router.post("/setModule", function (req, res, next) {
  axios
    .post("http://127.0.0.1:4500/unauth/setModule", {
      module_id: req.body.module_id,
      module_data: req.body.module_data,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

module.exports = router;