var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "qwerty",
    password: ""
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected! ");
});