





// ............................................................................           https://mongodb.github.io/node-mongodb-native/6.8/                     .......................................................................................









const { MongoClient } = require("mongodb");

const url ="mongodb+srv://NamasteNode:admin@namastenode.0fpmy.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");



//Insert
const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents =>', insertResult);
// READ
const findResult = await collection.find({}).toArray();
onsole.log('Found documents =>', findResult);



  

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
