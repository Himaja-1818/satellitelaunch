var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.put('/updateDetails', function(req, res, next) {
    
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydatabase",
});

con.connect(function(err) {
  if (err){
    console.log(err);
    return;
  }
  
  console.log("Connected!");

  const queryParams = [req.body.satName, req.body.satWeight, req.body.satHeight,req.body.currentTime, req.body.satDiameter,req.body.apogee,req.body.perigee];
    con.query( `INSERT INTO satLaunch (satName,satWeight,satHeight,currentTime,satDiameter,apogee,perigee)  
    VALUES (?,?,?,?,?,?,?)`, queryParams, function (err, result) {
        if (err) throw err;
        res.send ('updated successfully')
    })
})
})
        
module.exports = router;