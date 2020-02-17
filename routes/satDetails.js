var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/satDetails', function(req, res, next) {
    
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
    con.query(  `UPDATE satLaunch SET satWeight = '${req.body.satWeight}' WHERE apogee = '${req.body.apogee}'`, queryParams, function (err, result) {
        if (err) throw err;
        else
        console.log('updated successfully')

    })
})
})
        
module.exports = router;