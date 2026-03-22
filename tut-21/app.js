// plese fire npm install 
//  to install all the library.


import express from "express";
import { connectDB } from "./models/users.model.js";
import { User } from "./config/database.js"

const app = express();

// This lets Express read JSON from request body
app.use(express.json());

app.post("/signup", async (req, res) => {
    const userObj = {
        name: "aajinkya",
        email: "aajinkya@gmail.com",
        password: "123456789"
    }

    try {
        const newUser = User(userObj);
        await newUser.save();

        res.status(201).send("user created sucessfully...");
    } catch (err) {

        if(err.code === 11000){
            return res.status(400).json({
                success:false,
                message:"Email already exits please use another email"
            })
        }
        res.status(401).send("something went wrong...");
    }

})



// wild card route
app.use((req,res)=>{
    res.status(401).json({mesage:"page not found"});
})

// error handling
app.use((err,req,res,next)=>{
    res.status(500).json({message:"something went wrong"});
    console.log("here is error",err);
})

connectDB()
    .then(() => {
        console.log("database connection sucessfull...");
        app.listen(3000, () => {
            console.log("server is running on port 3000...");
        })
    })
    .catch((err) => {
        console.log(`Error occurrs in while connect to database ${err}`);
    })

