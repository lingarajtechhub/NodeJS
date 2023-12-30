var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    fs.unlink('myNewFile.html',function(err){
        if (err) throw err;
        console.log('File Delete!');
    });
}).listen(8002);