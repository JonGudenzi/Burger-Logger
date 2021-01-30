////////// Set up MySQL connection//////////
var mysql = require("mysql");

var connection = mysql.createConnection(
  process.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

///////// Make connection to DB/////////
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
