const express = require("express")
const router = express.Router()
const path = require("path")

const jwt = require('jsonwebtoken')

const {User, RegistedModule, Robot, Session} = require("../models")

router.post("/getAccessToken", async (req, res, next) => {
	console.log(req.body)
    const {email, pw, } = req.body
    const result = await User.findOne({email, pw})
    
    //로그인 실패 : 존재하지 않는 회원
    if(!result) return res.json({accessToken : ""});
    console.log(result)
    
    //로그인 성공시
    // 1. 세션 발급
    const accessToken = jwt.sign( {
        email
    }, "fhth", {
        expiresIn:"1h"
    })
    
    // 1. 세션 발급
    console.log("new session : " , accessToken)
    Session.create({accessToken:accessToken, user_id : result._id})
    return res.json({accessToken : accessToken})
}
)
router.post("/addAccount", async(req,res) => {
    const {email, pw, device} = req.body
    User.create({
       email, pw , device
    }, function (err) {
       console.log(err)
    })
    console.log("계정생성")
    return res.send({"result" : 1})
})
router.post("/setModule", async(req,res) => {
    const {module_id, module_data} = req.body
    console.log(module_data)
    try {
        await RegistedModule.findByIdAndUpdate(module_id, {module_data})
        return res.send("ok")
    } catch(err) {
        return res.status(204).send("err")
    }
})


router.post("/verifyRobot", async (req, res) => {
    console.log(req.body)
    const {serial} = req.body;
    const result = await Robot.findOne({serial})
    console.log(result)

    if(!result) res.send("ok")
    else res.status(204).send("err")
    return
})
module.exports = router
