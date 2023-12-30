var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    fs.writeFile('myNewFile.html','Update Content',function(err){
        if (err) throw err;
        console.log('Update!');
    });
}).listen(8002);

