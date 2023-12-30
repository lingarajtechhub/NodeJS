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
    var sql = "INSERT INTO Employee (name, address) VALUES ('Welcome','QWA-T/2')";
    await con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Record Is Inserted.");
    })
})