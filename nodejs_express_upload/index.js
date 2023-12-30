const express = require('express');
const app = express();
const port = 4000;
var multer  = require('multer');
const path = require('path'); 


var storage = multer.diskStorage({
  destination: function(req,file, callback){
    callback(null, path.join(__dirname, 'uploads'));
  },

  filename: function(req,file, callback){
    callback(null, file.originalname);
  }
});

var upload = multer({storage:storage}).single("myfile");


app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Define a route to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/uploadfile', (req, res) => {

  upload(req, res, function(err){
    if(err){
      return res.end("Error in uploading.");
    }
    else{
      res.end("File Upload Successfull.");
    }
  })

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Serve the HTML form for both GET and POST requests to /submit
// app.route('/submit')
//   .get((req, res) => {
//     res.sendFile(__dirname + '/index.html');
//   })
//   .post((req, res) => {
//     const formData = req.body;
//     // Process the form data here
//     console.log(formData);
//     res.send('Form submitted successfully!');
//   });


/*
 It provides four express middleware for
 parsing JSON, 
 Text, 
 URL-encoded, 
 and raw data sets over an HTTP request body

*/