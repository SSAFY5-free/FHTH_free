const express = require("express")
const { Session, Robot, User, RegistedModule } = require("../models")
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
    // console.log("robot_id : ", robot_id)
    
    const {modules} = await Robot.findById(robot_id)
    const result = await modules.reduce (async(promise,cur) => {
        const acc = await promise.then()

        const {module_data, moduleType_id} = await RegistedModule.findById(cur)
        
        acc.push({id:cur,module_data:module_data, type_id : moduleType_id})
        return acc
    },Promise.resolve([]))
    if(modules) return res.json(result)
    
    else return res.json({"err" : "err"})
    // Robots.findOne({})
})
router.post("/getModule", async (req, res) => {
    const {module_id} = req.body
    try {
        // const result = await RegistedModule.findById(module_id)
        // console.log(" resultddddddddddddddddd : ", result)
        // const gap = new Date() - result.updatedAt

        // if(gap < 8000) res.status(200).send(result)
        // else res.status(204).send("off")
    } catch(err) {
        console.log("err")
        res.status(404).send("no")
    }
})
    
module.exports = router