var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const path = require('path');

http.createServer(function  (req,res){
    if(req.url == '/upload'){
        const form = formidable({});
        console.log(form);
        form.parse(req, async function(err, fields, files){
            var oldpath = files.filetoupload[0].filepath;
            console.log(files);
            console.log(oldpath);
            var newpath = 'D:/NodeJS/node2/'+files.filetoupload[0].originalFilename;;
            console.log(newpath);
            fs.rename(oldpath, newpath, function(err) {
            if(err) throw err;
            res.write('File Upload and Moved.');
            res.end();
            });
        });
    }else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<form action="upload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload" /><br> &nbsp;');
        res.write('<br /><input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(5000);


// import { createServer } from 'http';
// import { IncomingForm } from 'formidable';
// import { rename } from 'fs';
// import { join, dirname } from 'path';


// const server = createServer((req, res) => {
//   if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
//     // Create a new instance of the formidable.IncomingForm
//     const form = new IncomingForm();

//     // Set the upload directory
//     form.uploadDir = join(__dirname, 'uploads');

//     // Parse the form data
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error');
//         return;
//       }

//       // Move the uploaded file to the desired location
//       const oldPath = files.file.path;
//       const newPath = join(form.uploadDir, files.file.name);

//       rename(oldPath, newPath, (err) => {
//         if (err) {
//           res.writeHead(500, { 'Content-Type': 'text/plain' });
//           res.end('Internal Server Error');
//           return;
//         }

//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('File uploaded successfully!');
//       });
//     });

//     return;
//   }

//   // Serve an HTML form for file upload
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>File Upload</title>
//     </head>
//     <body>
//       <h2>File Upload</h2>
//       <form action="/upload" method="post" enctype="multipart/form-data">
//         <input type="file" name="file">
//         <button type="submit">Upload</button>
//       </form>
//     </body>
//     </html>
//   `);
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
