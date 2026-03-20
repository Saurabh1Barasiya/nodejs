// please use 
// npm i 

import express from "express";

const app = express();

app.use((req,res,next)=>{
    console.log("i am first middle ware");
    next();
})

app.use((req,res,next)=>{
    console.log("i am secound middle ware");
    next();
})

app.use("/home",(req,res)=>{
    res.send("hi i am home page");
})

app.use("/about",(req,res)=>{
    res.send("i am about page")
})

app.get("/contact",(req,res)=>{
    res.send("i am contact page");
})

app.listen(3000,()=>{
    console.log("server running on the port 3000");
})