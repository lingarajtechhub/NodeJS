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
    var sql = "DROP DATABASE Company";
    await con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log("Database Droped.");
    })
})


//reactjs and express

//ORM - Object Relational Mapping