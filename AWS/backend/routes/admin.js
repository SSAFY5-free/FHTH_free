const express = require("express")
const router = express.Router()
const path = require("path")

const {User, Device, RegistedDevice, Session, Robot} = require("../models")

router.post("/addRobots", async (req, res) => {
	console.log("addRobots")
	const {serial} = req.body.serial
	const result = await Robots.create({serial:serial})
    console.log(result)

    if(!result) res.json({"result":0})
    else res.json({"result":1})
    return
})

//todo router.post("validation/email")
module.exports = router
