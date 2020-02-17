var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.delete('/delete/:apogee', function(req, res, next) {
    
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

  const queryParams = [req.params.apogee];
  console.log(req.params.apogee)
  con.query("DELETE FROM satLaunch WHERE apogee = ?",queryParams, function (err, result) {
    if (err) throw err;
    else
    res.send("deleted successfully")

})
})
})
    
module.exports = router;
