import express from 'express';
import { connectDB } from "./config/database.js";
import { userModel } from "./models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json()) // to read the json data.
app.use(cookieParser()) // to read cookies.


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await userModel.findOne({ email: email });
        const match = await bcrypt.compare(password, existingUser.password);

        if (!match) {
            throw new Error("credentials mismatch...");
        }

        // creating json web token.
        const token = jwt.sign({ email }, "secratKey123", { expiresIn: "1h" });
        console.log("token ", token);

        res.cookie("token", token, {
            httpOnly: true,   // JS access nahi kar sakta (secure)
            secure: false,    // true in production (HTTPS)
            maxAge: 3600000   // 1 hour
        })

        res.json({
            sucess: true,
            message: "Login susessfully..."
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
})


app.post("/profile", async (req, res) => {

    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token,"secratKey123");

        const user = await userModel.findOne({email:decoded.email});
        console.log("new user from profile page",user);

        res.json({
            sucess: true,
            message: "get profile page",
            user:user
        })

    } catch (err) {
        res.json({
            sucess: false,
            message: err.message
        })
    }   
})


app.post("/signup", async (req, res) => {

    try {
        const { firstName, lastName, email, password } = req.body;

        // hash the password.
        const hasPassword = await bcrypt.hash(password, 10);
        const newUser = userModel({
            firstName,
            lastName,
            email,
            password: hasPassword
        })

        if (!newUser) {
            throw new Error("entred data is not correct...");
        } else {
            newUser.save();
        }

        res.status(201).json({
            sucess: true,
            message: "user created and saved in the database..."
        })

    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
})




const PORT = 5000;
connectDB()
    .then(() => {
        console.log("we are now connected with database...");
        app.listen(PORT, () => {
            console.log("Server is running on port 5000 and listning...");
        })

    })
    .catch(() => {
        console.log("Something went wrong unable to connect with database...");
    })


