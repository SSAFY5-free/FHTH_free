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

module.exports = router