import express from "express";
import { connectDB } from "./config/dabase.js"
import { userModel } from "./models/user.models.js"

const app = express();

app.post("/signup",async(req,res)=>{

    const userObj = {
        firstName:"Saurabh",
        lastName:"FaithFulWar",
        email:"faithfulwar@gmail.com",
        password:"123456"
    }

    try{
        const user = userModel(userObj);
        await user.save();
        res.send("data send sucessfully into database");
    }
    catch(err){
        res.status(401).send("some thing went wrong...");
    }
    
})

connectDB()
.then(()=>{
    console.log("connection with database...");
    app.listen(3000,()=>{
        console.log("server is running on port 3000 and listing...");
    })
}).catch((err)=>{
    console.log("something went wrong while connect with database",err.message);
})