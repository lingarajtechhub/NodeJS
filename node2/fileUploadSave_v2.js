//var http = require('http')
import http from "http";
import fs from "fs";
import formidable from "formidable";
//var fs = require("fs");
//var formidable = require("formidable");
// import { error } from "console";
formidable
 
http.createServer(async (req, res) => {
    if (req.url === "/upload" && req.method.toLowerCase() === "post") {
      //   var form = new formidable.IncomingForm();
 
      const form = formidable({});
 
      form.parse(req, async function (err, fields, files) {
        var oldpath = files.filetoupload[0].filepath;
        console.log(files.filetoupload[0], "files");
        var newpath =
          "C:/" +
          files.filetoupload[0].originalFilename;
        console.log(newpath);
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File Upload and Moved.");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="/upload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload" /><br> &nbsp;');
      res.write('<br /><input type="submit">');
      res.write("</form>");
      res.end();
    }
  })
  .listen(5000, () => {
    console.log("Server is listening on port 5000");
  });
