import express from "express";
import { connectDB } from "./Config/database.js"
import { loginHelperFunc } from "./helper/loginheloper.js";
import { signupHelperFunc } from "./helper/signupHelperFunc.js"


const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    signupHelperFunc(req, res);
})

app.post("/login", async (req, res) => {
    loginHelperFunc(req, res);
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

