





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

        const data ={
          firstname : "Dodla",
          lastname  : "Sha"
        };


      //INSERT
      const insertResult = await collection.insertMany([data]);
      console.log('Inserted documents =>', insertResult);
      // READ
      const findResult = await collection.find({}).toArray();
      console.log('Found documents =>', findResult);
      //COUNT
      const countDocuments = await collection.countDocuments({});
      console.log('Total documents =>', countDocuments);
      // Find all documents with a filter of firstName
      const firstName = await collection.find({"firstname" : "Dev"}).toArray();
      console.log('Found documents =>', firstName);
      //Count all documents with a filter of firstName
      const count = await collection.countDocuments({ firstname: "Dev" });
      console.log('Count of documents with firstname "Dev" =>', count);



  
 return "done.";
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
