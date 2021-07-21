var express = require('express');
var router = express.Router();
const axios = require('axios');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("HELLO JBJ")
});


router.post('/getAccessToken', function(req, res, next) {
    console.log(req.headers["x-access-token"]);
    axios.post('http://127.0.0.1:4500/unauth/getAccessToken', {
            email: req.body.email,
            pw: req.body.pw,

        })
        .then(response => {
            res.send(response.data)
            console.log(response.data)
            console.log(22222)

        })
        .catch(function(error) {
            res.send(error)
            console.log(11111)
            console.log(error);
        });
});
router.post('/getModule', function(req, res, next) {
    console.log("1" + req.headers["x-access-token"]);
    axios.post('http://127.0.0.1:4500/auth/getModule', {
            module_id: req.body.module_id,
            headers:{
                "x-access-token" : req.headers["x-access-token"]
            }
        })
        .then(response => {
            res.send(response.data)
            console.log(response.data)
            console.log(22222)

        })
        .catch(function(error) {
            res.send(error)
            console.log(11111)
            console.log(error);
        });
});

router.post('/setModule', function(req, res, next) {
    axios.post('http://127.0.0.1:4500/unauth/setModule', {
            module_id : req.body.module_id,
            module_data : req.body.module_data
        })
        .then(response => {
            res.send(response.data)
        })
        .catch(function(error) {
            res.send(error)
            console.log(error);
        });
});



module.exports = router;