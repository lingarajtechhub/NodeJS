
const { main } = require('./db_mongo.js');
 
async function insertData() {
  try {
    const collection = await main();
 
    const result = await collection.insertMany([{ a: 1 },{b: 2},{c: 3}]);
 
    console.log('Inserted =>', result);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
 
insertData();