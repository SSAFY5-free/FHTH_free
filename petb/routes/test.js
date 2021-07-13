var express = require('express');
var router = express.Router();
const axios = require('axios');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("HELLO JBJ")
});


router.post('/1', function (req, res, next) {
    // req.headers["x-access-token"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjU5ODk2NzUsImV4cCI6MTYyNTk5MzI3NX0.t7JgajuQOxsYgemV67ahnwM1ppkgItSIuVVohZ7YOYo"
    axios.post('http://127.0.0.1:4500/auth/getModules', {
      data:{
        robot_id:"1"
      },
      headers:{
       "Access-Control-Allow-Headers": 'x-access-token',
       "x-access-token" : req.headers["x-access-token"]
      }
    })
      .then(response => {
          res.send(response.data)
          console.log(req.headers)
      })
      .catch(function (error) {
        res.send(error)
          console.log(error);
      });
  });

  router.post('/2', function (req, res, next) {
    axios.post('http://127.0.0.1:4500/unauth/setModules', {
      module:req.body.module
    })
      .then(response => {
          res.send(response.data)
      })
      .catch(function (error) {
        res.send(error)
          console.log(error);
      });
  });
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