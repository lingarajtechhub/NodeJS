var fs = require('fs');

/*
Read files
Create files
Update files
Delete files
Rename files
*/

var http = require('http');
http.createServer(function(req, res){
fs.readFile('nodeFile.html',function(err,data){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(data);
});
}).listen(8002);

//create a file
//fs.appendFile()
//fs.open()
//fs.writeFile()



//update file
//fs.appendFile()
//fs.writeFile()



//Delete File
//fs.unlink()

//Rename A file
//fs.rename()