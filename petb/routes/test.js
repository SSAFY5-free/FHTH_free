var express = require('express');
var router = express.Router();
const axios = require('axios');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("HELLO JBJ")
});

router.post('/', function(req, res, next) {
    var title = req.body.title
    res.send(title)
})

// router.get('/speed', function(req, res, next) {
//     connection.query('SELECT * FROM DB_15_08.sensing_08_1', function(err, result) {
//         res.send(result)
//     })

// });

// router.get('/angle', function(req, res, next) {
//     connection.query('SELECT * FROM DB_15_08.sensing_08_1', function(err, result) {
//         res.send(result)
//     })

// });

// router.get('/temp', function(req, res, next) {
//     connection.query('SELECT * FROM DB_15_08.sensing_08_1', function(err, result) {
//         res.send(result)
//     })

// });


module.exports = router;