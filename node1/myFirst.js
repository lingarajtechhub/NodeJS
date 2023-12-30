var date = require('./dateFile.js')
var http = require('http') //module

http.createServer(function (req,res) //http server
{
    res.writeHead(200, {'Content-type':'text/html'});//http header and content-type is a header response
    //response send to the client
    res.end(`<h1>Hello World</h1> - ${date.myDateTime().toISOString().slice(0,10)} - ${req.url}`);
}).listen(8001);//the server object listens on port no. 8001

//node myFirst.js

// '/server'

