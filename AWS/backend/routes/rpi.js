const express = require("express");
const router = require("express").Router();
const service = require("../service/rpi");
require("../utils/session")(router);

router.use(service.mid_updateSession);
router.post("/session", (req, res) => {
  service
    .post_session(req)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send("error");
    });
});
// router.get("/session", (req, res) => {
//   service.get_session()
//   .then((data)=> {

//   }).catch((data) => {

//   })
// });
module.exports = router;
