import express from "express";
import { checkLogin,checkAdmin } from "./utils/middleware/auth.js"

const app = express();

app.get("/login",(req,res)=>{
    res.send("login page");
})

app.get("/signup",(req,res)=>{
    res.send("signup page");
})

app.get("/dashbaord",checkLogin,(req,res)=>{
    res.send("dashbaord page");
})

app.get("/profile",checkLogin,(req,res)=>{
    res.send("profile page");
})

app.get("/admin",checkLogin,checkAdmin,(req,res)=>{
    res.send("admin page");
})

app.get("/admin/users",checkLogin,checkAdmin,(req,res)=>{
    res.send("admin all users");
})

app.get("/admin/product/:id",checkLogin,checkAdmin,(req,res)=>{
    res.send("admin specific product");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});