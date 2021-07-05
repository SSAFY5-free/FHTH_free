const express = require("express")
const router = express.Router()
const path = require("path")

//unique 값 발급
const jwt = require('jsonwebtoken')

//연결된 session 저장
 // https://www.npmjs.com/package/connect-mongo
const {User, Device, Robot, Session} = require("../models")

// const setSession = session({
//     secret: 'keyboard cat',
//    resave: false,
//    saveUninitialized: true,
//  });

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
    //todo 중복세션 처리
}
)
router.post("/addAccount", async(req,res) => {
    //todo 암호화
    //todo email이 중복 확인
    const {email, pw, device} = req.body
    User.create({
       email, pw , device
    }, function (err) {
       console.log(err)
    })
    console.log("계정생성")
    return res.send({"result" : 1})
})

// router.get("/getDevices", async (req, res) => {
//     Device.find({}, "type", (err,e) => {
//         res.send({"data" : e.reduce((acc,cur) => {
//             acc.push(cur["type"])
//             return acc
//         }, [])})
//     })
// })

router.post("/verifyRobot", async (req, res) => {
    console.log(req.body)
    const {serial} = req.body;
    const result = await Robot.findOne({serial})
    console.log(result)

    if(!result) res.json({"result":0})
    else res.json({"result":1})
    return
})

//todo router.post("validation/email")
module.exports = router
