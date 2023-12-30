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
    var sql = "DELETE FROM Employee WHERE name = 'Jinesh Das'";
    await con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log("Record Deleted.");
        //console.log(result);
        //console.log(fields);
    })
    sql = "SELECT * FROM Employee";
    await con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log("Records are.");
        console.log(result);
        //console.log(result);
        //console.log(fields);
    })
})


//reactjs and express