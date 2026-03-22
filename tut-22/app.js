import express from "express";
import { connectDB } from "./config/database.js";
import { userModel } from "./models/user.models.js"

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        const newUser = userModel(data);
        await newUser.save();
        res.json({
            sucess: true,
            message: "user created sucessfully...",
        });
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: "some thing went wrong..."
        });
    }
})

app.get("/signup", async (req, res) => {
    try {
        const allUsers = await userModel.find({});
        console.log(allUsers);
        res.send(allUsers);
    } catch (err) {
        res.status(401).json({
            sucess: false,
            message: "something went wrong..."
        })
    }
})

app.put("/signup/:id", async (req, res) => {

    const userID = req.params?.id;
    const updatedData = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
        userID,
        updatedData,
        {
            new: true,          // new updated user return karega
            runValidators: true // run all the validators
        }
    );

    console.log("ye updated user hai ", updatedUser);

    res.json({
        success: true,
        data: updatedData
    })
})


app.patch("/signup/:id", async (req, res) => {


    try {
        const userId = req.params?.id;
        const userData = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            userData,
            {
                new: true,
                runValidators: true
            }
        )

        res.json({
            sucess: true,
            data: updatedUser,
        })
    } catch (err) {
        res.status(401).json({
            success: false,
            message: "something went wrong...",
        })
    }


})


app.delete("/signup/:id", async (req,res)=>{

    try{
        const id = req.params?.id;
        const deletedUser = await userModel.findByIdAndDelete(id);
        console.log("delete data",deletedUser);
        res.json({
            sucess:true,
            data:deletedUser
        })
    }
    catch(err){
        res.status(400).json({
            sucess:false,
            message:"Invalid request"
        })
    }

    
})

app.use((req, res) => {
    res.status(401).json({
        sucess: false,
        message: "the required page is not available"
    })
})


app.use((err, req, res, next) => {
    res.status(500).json({
        sucess: false,
        message: "something went wrong..."
    })
})


connectDB()
    .then(() => {
        console.log("Database sucessfully connected .....");
        app.listen(3000, () => {
            console.log("server is running on the port 3000 and listning ...");
        })
    })
    .catch(() => {

    })


