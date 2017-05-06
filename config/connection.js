/*Downloads MySQL npm package*/
var mysql = require('mysql');

/*allows admin to access DB and creates a connection for user when they create a TCP/IP connection via the port number that has been assigned*/
var connection = mysql.createConnection({
  PORT : 3306,
  host :'localhost',
  user :'root',
  database : 'burger_db'
});

connection.connect(function(err){
  if(err){
    throw err;
  }
});
/*Assigns any expression that we want to become available in 
other files to the exports object*/
module.exports = connection;