var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/getDetails', function(req, res, next) {
    
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydatabase",
});

con.connect(function(err) {
    if (err) console.log(err);

    con.query("SELECT * FROM satLaunch", function (err, result, fields) {
        if (err) throw err;
        con.query("INSERT INTO satLaunch (currentTime) values (NOW())", function (err, result1, fields) {
        if (err) throw err;
        console.log("Connected!");
  
 console.log(result);
 res.send(result)
    })
})
})
})
module.exports = router;