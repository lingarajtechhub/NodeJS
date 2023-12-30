console.log("Hello World");

import { upperCase } from "upper-case";
import { createServer } from "http";

createServer(function (req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(upperCase("<h1>Hello World.</h1>"));
    res.end();
}).listen(4000)


