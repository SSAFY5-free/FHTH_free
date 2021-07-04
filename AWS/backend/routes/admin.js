const express = require("express")
const router = express.Router()

// const {User, Device, RegistedDevice, Session, Robot} = require("../models")\
router.get("/", (req,res) => {
    console.log("y??")
    res.json({"z":"z"})
})
router.post("/addRobots", async (req, res) => {
	console.log("addRobots")
	const {serial} = req.body.serial
	// const result = await Robots.create({serial:serial})
    console.log(serial)

    // if(!result) res.json({"result":0})
    // else res.json({"result":1})
    return
})
module.exports = router
