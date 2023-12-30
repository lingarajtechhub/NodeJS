// app.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/uploadfile', (req, res) => {
  const file = req.files; // Assuming your file input field has the name attribute set to 'file'
  
  console.log(file);

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const uploadDir = path.join(__dirname, 'uploads');
  const filePath = path.join(uploadDir, file.name);

  // Create the 'uploads' directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  // Write the file to the server
  fs.writeFile(filePath, file.data, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving the file.');
    }

    res.send('File uploaded successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// x = 1,2,3,4,5 => Before Update 1.0
// x = 1,2,3,4,5,6 => After Update 1.1
// x = 1,2,3,4,5,6 => Latest Version 1.1  Git -> SCM (while updating any versions)
// x = 1,2,3,4,5,6,7 => After Update 2.0
// x = 1,2,3,4,5,6,7 => Latest Version 2.0

//Colab

//git init
//git add .

//
//git config --global user.email "you@example.com"
//git config --global user.name "Your Name"