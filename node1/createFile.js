var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    fs.appendFile('myNewFile.html','Hello Welcome',function(err){
        if (err) throw err;
        console.log('Saved!');
    });
}).listen(8002);

