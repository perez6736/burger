// dependencies ===================================================== 
var mysql      = require('mysql');

// DB connection =====================================

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysqlppw123',
    database : 'burgers_db'
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
  