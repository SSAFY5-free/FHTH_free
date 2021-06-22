const express = require('express');
const userRouter = require('./user.js')
const deviceRouter = require('./device.js')

const router = express.Router();

//1차 라우터 /

// http://localhost:8080/api/user 라고 시작되는 부분은 모두 userRouter로 간다.
//2차 라우터 /api/user
router.use("/api/user", userRouter)
router.use("/api/device", deviceRouter)
module.exports =router;