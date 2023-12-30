var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    fs.rename('nodeFile.html','NodeFile.html',function(err){
        if (err) throw err;
        console.log('Renamed!');
    });
}).listen(8002);


//What You See In What You Get Editor