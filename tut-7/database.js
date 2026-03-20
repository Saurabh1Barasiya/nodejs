const { MongoClient } = require("mongodb");

const connectionString = "add your connection string here...";

const dName = "myAppDB";
const collectionTable = "users";

const client = new MongoClient(connectionString);

async function main() {
    // connect to atlus server.

    await client.connect();
    console.log("connection connected sucessfully...");

    // connect to database
    const db = client.db(dName);

    const collection = db.collection(collectionTable);

    // add new user
    // collection.insertMany([
    //     {

    //         name:"rohit gupta",
    //         age:"29",
    //         address:"harrai"
    //     },
    //     {

    //         name:"sonu gupta",
    //         age:"19",
    //         address:"jabalpur"
    //     },
    // ])

    // const allUser = await collection.find({}).toArray();
    // console.log(allUser);

    // find all the address whoes have harrai .

    // const harraiUsers = await collection.find({address:"harrai"}).toArray();
    // console.log(harraiUsers);

    const deletedUser = await collection.deleteOne({name:"suhani"});
    console.log(deletedUser);


    const allUser = await collection.find({}).toArray();
    console.log(allUser);

    return "done";
}

main()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        client.close();
    })