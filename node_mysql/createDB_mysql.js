var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "qwerty",
    password: ""
});

con.connect(async function(err){
    if(err) throw err;
    console.log("Connected!");
    await con.query("CREATE DATABASE Company", function(err, result){
        if(err) throw err;
        console.log(err);
        console.log("Database Created");
    })
})