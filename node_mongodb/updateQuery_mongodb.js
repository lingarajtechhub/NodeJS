const { main } = require('./db_mongo.js');
 
async function updateData() {
  try {
    const collection = await main();
 
    const updateResult = await collection.updateOne({ a: 1 }, { $set: { b: 1 } });
    console.log('Updated documents =>', updateResult);

  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

updateData();


  