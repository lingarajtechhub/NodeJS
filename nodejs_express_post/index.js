const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Define a route to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;
  // Process the form data here
  console.log(formData);
  res.send('Form submitted successfully!');
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
