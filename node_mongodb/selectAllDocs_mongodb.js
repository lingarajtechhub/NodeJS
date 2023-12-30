const { main } = require('./db_mongo.js');
 
async function selectData() {
  try {
    const collection = await main();
 
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
 
selectData();