const { main } = require('./db_mongo.js');
 
async function indexCollection() {
  try {
    const collection = await main();
 
    const indexName = await collection.createIndex({ a: 1 });
    console.log('index name =', indexName);

  } catch (error) {
    console.error('Error inserting data:', error);
  }
}
 
indexCollection();