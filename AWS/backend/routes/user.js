const express = require("express")
const router = express.Router()
const path = require("path")

const jwt = require('jsonwebtoken')
const {verifyToken} =require("../utils/jwt")
const {User, Device } = require("../models/index")

require("dotenv").config({
    path : path.resolve(
        process.cwd(),
        ".env"
        )
    })
    
const {MONGO_URI} = process.env

router.get("/device", async (req, res) => {
    //전체 device종류 목록 가져오기
    Device.find({}, "type", (err,e) => {
        res.send({"data" : e.reduce((acc,cur) => {
            acc.push(cur["type"])
            return acc
        }, [])})
    })
})

router.get("/device/add/:type", async (req, res) => {
    //device 종류 추가
    Device.create({type:req.params.type})
    res.send({"data" : 1})
})

router.post("/login", async (req, res) => {
    // todo 세션 설정 수정
    const {email, pw} = req.body

    User.findOne({email, pw},(e,u) =>{
        //로그인 실패 : 존재하지 않는 회원
        if(!u) res.json({status:"Error"});
    })
    //로그인 성공 => 세션 발급
    const token = jwt.sign( {
        email
    }, "ssafy", {
        expiresIn:"0.5h"
    })   
    return res.json({
        resultCode : 200,
        token : token,
        email,
    });
})

router.post("/signup", async(req,res) => {
    //todo 암호화 미들웨어 추가
    //todo email이 중복되는지 확인
    const {email, pw, device} = req.body
    User.create({
       email, pw , device
    }, function (err) {
       console.log(err)
    })
    res.send({"result" : 1})
})
module.exports = router