const express = require("express")
const { Session, Robot, User } = require("../models")
const router = express.Router()
const path = require("path")

require("../models")

require("dotenv").config({
    path : path.resolve(
        process.cwd(),
        ".env"
        )
    })
    

//accessToken 소유시에만 데이터를 전송하는 미들웨어
const VerifySession = async (req,res,next) => {
    const accessToken = req.headers["x-access-token"]
    console.log(accessToken)
    //1. 토큰을 가지고 있지 않을 경우
    if(!accessToken) {
        return res.json({"error" : "로그인 토큰을 가지고 있지 않습니다"})
    }

    //2. 세션이 만료된 경우
    const result = await Session.findOne({accessToken})
    req.data = result
    if(!result) {
        return res.json({"error" : "로그인 토큰이 만료되었습니다"})
    }
    
    next()
}
router.use(VerifySession)

// router.get("/mainInfo", VerifySession, async (req,res) => {
//     const {email} = req.data

router.post("/getRobots", async (req,res) => {
    const accessToken = req.headers["x-access-token"]
    const {user_id} = await Session.findOne({accessToken})
    console.log("user_id", user_id)
    const {robots_id} = await User.findById(user_id)

    if(robots_id) return res.json(robots_id)
    else return res.json({"err" : "err"})
    // Robots.findOne({})
})

router.post("/getModules", async (req,res) => {
    const {robot_id} = req.body
    console.log("robot_id : ", robot_id)
    
    const {modules_id} = await Robot.findById(robot_id)
    console.log("modules_id : ", modules_id)
    if(modules_id) return res.json({modules_id})
    
    else return res.json({"err" : "err"})
    // Robots.findOne({})
})

//     //ver1
//     //1. users 콜렉션에서 email로 소유한 기기 찾기
//     const {device} = await User.findOne({email})
    
//     //2. registed Device에서 기기들의 상태값 반환
//     const deviceStatus = []
//     for(let i = 0 ; i < device.length; i++) {
//         deviceStatus.push(await RegistedDevice.findOne({serial:device[i].serial}))
//     }
//     console.log("상태값 : ", deviceStatus)
//     return res.json(deviceStatus)
// })

    
module.exports = router