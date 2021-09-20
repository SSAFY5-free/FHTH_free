const axios = require("axios")
const dotenv = require("dotenv")
dotenv.config({})


// 로직 1. Axios 인스턴스 생성
//      https://axios-http.com/docs/instance
const request = axios.create({
    timeout: 2000
})

// 로직 2. Axios intercept로 핸들링 처리
//  https://axios-http.com/docs/interceptors
//  https://velog.io/@pandati0710/axios-intercepter%EB%A1%9C-error-handling-%ED%95%98%EA%B8%B0
// request.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log("here : success")
//     return response;
// }, function (error) {
//     console.log("here : error ", error.response.status)
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });


// 로직 3. 관련 API 생성
module.exports.robotAPI = {
    //로직 2-1. 모듈 제어 커맨드 전송
    sendModuleCmd: async (robot_ip, payload) => {
        await request.post({
            url: robot_ip,
            data: payload
        }).then((data) => {
            console.log(`[Success] sendModuleCmd ${robot_ip}`)
        }).catch((error) => {
            throw new Error(error)
        })
    },
    //todo 로직 2-2.로봇 이동 커맨드 전송
    sendMoveCmd: async (robot_ip, payload) => {
        // return await request.
    }
}