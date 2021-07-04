const express = require('express');
const unauthRouter = require('./unauth.js')
const authRouter = require('./auth.js')
const adminRouter = require('./admin.js')

const router = express.Router();

// router.use(function (req, res, next) {
//     const whiteList = ['/api/user/login', '/api/device']
//     //세션 보안 구현
//     console.log('Time:', req.originalUrl);
//     console.log("Time : " , req.headers)

//     //accessToken이 있다
//         //데이터 주기
//     //없다
//         //reTry 0 
//             //refreshToken이 없다
//                 //whiteList에도 없다
//                     //리다이렉트
//                 //whiteList에도 있다
//                     //정상
//         //reTry 1
//             //refreshToken을 대조
//         //refreshToken이 없
//     next();
//   });
//1차 라우터 /

// http://localhost:8080/api/user 라고 시작되는 부분은 모두 userRouter로 간다.
//2차 라우터 /api/user
// router.use("/api/user", userRouter)
// router.use("/api/device", deviceRouter)
router.use("/unauth", unauthRouter)
router.use("/auth", authRouter)
router.use("/admin", adminRouter)
module.exports =router;
