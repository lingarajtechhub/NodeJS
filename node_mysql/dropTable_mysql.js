var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "qwerty",
    password: "",
    database: 'Company'
});

con.connect(async function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "DROP TABLE Employee";
    await con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log("Table Droped.");
    })
})


//reactjs and express