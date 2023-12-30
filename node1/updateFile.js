var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    fs.appendFile('myNewFile.html','Update Content add in a File',function(err){
        if (err) throw err;
        console.log('Update!');
    });
}).listen(8002);