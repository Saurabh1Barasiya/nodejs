import express from "express";

const app = express();

app.use("/users",(req,res)=>{
    res.send("hello all users")
})

app.use("/home",(req,res)=>{
    res.send("well come to home page");
})

app.use("/about",(req,res)=>{
    res.send("welcome to about page");
})

app.use("/",(req,res)=>{
    res.send("welcome to express");
});


app.listen(3000,()=>{
    console.log("server is running in the port 3000");
})