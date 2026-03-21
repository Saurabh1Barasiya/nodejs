import express from "express";
import { connectDB } from "./config/database.js";
import { userModel } from "./models/user.js";

const app = express();

app.post("/signup",async (req,res)=>{

    const userObj = {
        firstName:"Suhani",
        lastName:"Kushwaha",
        emailId:"suhani@gmail.com",
        password:"123456",
        age:27,
        gender:"Female"
    }


    try{
        const ur = new userModel(userObj);
        await ur.save();
        res.send("data send to the database");
    }catch(err){
        res.status(401).send("something went wrong...");
    }
})



connectDB()
    .then(() => {
        console.log("connection establizd sucessfully...");
        app.listen(3000, () => {
            console.log("server running on the port 3000 and listning the request...");
        })
    })
    .catch((err) => {
        console.log("database cannot be connected...");
    })

