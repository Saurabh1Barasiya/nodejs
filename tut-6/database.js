const { MongoClient } = require("mongodb");

const connectionString = "add your connection string...";

const dbName = "myAppDB";

const client = new MongoClient(connectionString);

async function main() {
    // connect to atlus surver.
    await client.connect();
    console.log("connected sucessfully...");

    // connect to database
    const db = client.db(dbName);
    // console.log(db);

    const collection = db.collection("users");
    // console.log(collection); 
     
    // fetch all the data 

    const allData = await collection.find({}).toArray();
    console.log(allData);




}

main()
.then(()=>{})
.catch(()=>{})
.finally(()=>{
    client.close();
})

