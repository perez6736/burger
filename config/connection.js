// dependencies ===================================================== 
var mysql      = require('mysql');

// DB connection =====================================

var host = process.env.DBHOST || "localhost";
var db = process.env.DB-DATABASE || "burgers_db";
var username = process.env.USERNAME || "root";
var pw = process.env.PW || "mysqlppw123"

var connection = mysql.createConnection({
    host     : host,
    user     : username,
    password : pw,
    database : db
  });

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  