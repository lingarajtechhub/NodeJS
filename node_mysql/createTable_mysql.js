var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "qwerty",
    password: "",
    database: "Company"
});

con.connect(async function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "CREATE Table Employee (empID INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    await con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table Is Created");
    })
})