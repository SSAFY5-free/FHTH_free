const express = require("express")
const { ModuleType, RegistedModule } = require("../models")
const router = express.Router()
require("../models")

router.post("/addRobot", async (req, res) => {
	const {serial} = req.body
	const result = await Robot.create({serial})
    console.log(serial)

    if(!result) res.json({"result":0})
    else res.json({"result":1})
    return
})

router.post("/addAccount", async(req,res) => {
    const {email, pw, robots_id} = req.body
    User.create({
       email, pw , robots_id
    }, function (err) {
       console.log(err)
    })
    console.log("계정생성")
    return res.send({"result" : 1})
})

router.get("/addModuleType/:id", async(req,res) => {
    const name = req.params.id
    ModuleType.create({name
    }).then((data) =>{
        console.log(data)
    })

    return res.json({result : 1})
})
router.post("/addRegistedModule/", async(req,res) => {
//     serial : String,
//    module_id : String,
//    module_type : mongoose.Types.ObjectId,
//    module_data : {}
    const {serial, moduleType_id, module_data} = req.body
    RegistedModule.create({serial,moduleType_id,module_data}).then((data) =>{
        console.log(data)
    })
    return res.json({result : 1})
})
module.exports = router
