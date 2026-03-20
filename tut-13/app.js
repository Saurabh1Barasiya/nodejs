// please fire npm i

import express from "express";
const app = express();

app.use((req,res,next)=>{
    console.log("i am first middleware")
    next();
})

app.get("/home",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/contact",(req,res)=>{
    res.send("contact page")
})

app.post("/contact",(req,res)=>{
    res.send("contact submited")
})


app.listen(3000,()=>{
    console.log("server is running 3000");
})

