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
    var sql = "SELECT * FROM Employee ORDER BY address DESC";
    await con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log("Record Selected.");
        console.log(result);
        console.log(fields);
    })
})