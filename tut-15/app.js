// please write npm i

import express from "express";
import { checkLogin } from "./utils/middleware/auth.js"
 
// const { checkLogin } = require("./utils/middleware/auth")

const app = express();

app.use("/admin", (req, res, next) => {
    console.log("i am running when you hit any admin route");
    next()
});



app.get("/admin/allData", checkLogin,(req, res) => {
    console.log("i am admmin alldata");
    res.send("all the admin related data");
});

app.get("/admin/delete", checkLogin,(req, res) => {
    console.log("i am admmin delete");
    res.send("delete admin data");
});

app.listen(3000, () => {
    console.log("i am running on the server 3000");
});
