

 const { main } = require('./db_mongo.js');
 
async function removeData() {
  try {
    const collection = await main();
    const deleteResult = await collection.deleteMany({ a: 1 });
    console.log('Deleted documents =>', deleteResult);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
 
removeData();