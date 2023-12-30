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
    var values = [
        ['Jinesh Das','QW-T/3'],
        ['Avinash Satpathy','ST-G/2'],
        ['Prakhar Kumar','MG-5/2'],
    ];
    var sql = "INSERT INTO Employee(name, address) VALUES ?" //prepared statements
    await con.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("All Records Are Inserted Successfully.");
        console.log(result.affectedRows);
        console.log(result.insertId);
    })
})


//result is a object is return, when executing a query.
//The result object contains information about how the query affected the table.
//The result object returned from the example looks like this,

/*

{
    fieldCount: 0,
    affectedRows: 4;
}

**/