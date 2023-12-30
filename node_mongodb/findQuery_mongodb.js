const { main } = require('./db_mongo.js');
 
async function findData() {
  try {
    const collection = await main();
 
    const filteredDocs = await collection.find({ b: 1 }).toArray();
console.log('Found documents filtered by { a: 2 } =>', filteredDocs);

  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
 
findData();

//Relationship 1:1, 1:N, N:1, N:N
//How relationships between table are working in SQL?