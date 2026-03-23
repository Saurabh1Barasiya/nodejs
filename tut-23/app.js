import express from "express";
import { connectDB } from "./Config/database.js"
import { userModel } from "./Models/users.models.js"
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());


app.post("/signup", async (req, res) => {

    try {
        const { firstName, lastName, email, gender, password } = req.body;

        const proctedPassword = await bcrypt.hash(password, 10)

        if (proctedPassword) {
            const newUser = userModel({
                firstName,
                lastName,
                email,
                gender,
                password: proctedPassword
            });
            await newUser.save();

            res.json({
                sucess: true,
                message: "signup page..."
            })
        } else {
            throw new Error("some thing went wrong...");
        }


    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
    }


})

app.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        const exestingUser = await userModel.findOne({ email });
        const match = await bcrypt.compare(password, exestingUser.password);

        console.log(match);

        if (match) {
            res.json({
                sucess: true,
                message: "login sucessfully..."
            })
        }else{
            throw new Error("password mismatch, plase eneter valid password :");
        }


    } catch (err) {
        res.status(400).json({
            sucess: true,
            message: err.message
        })
    }
})

app.use((req, res) => {
    res.status(400).json({
        sucess: false,
        message: "Bad request the page is not found..."
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        sucess: false,
        message: "server error"
    })
})

connectDB().
    then(() => {
        console.log("connected with databse sucessfully...");
        app.listen(3000, () => {
            console.log("server is running in the port 3000 and listing...");
        })
    })
    .catch((err) => {
        console.log("error while connecting with database...");
    })

