import express from "express";

const app = express();

app.get("/home",(req,res)=>{
    res.json({message:"home page"})
})
app.get("/about",(req,res)=>{
    res.json({message:"about"})
})
app.get("/contact",(req,res)=>{
    // res.json({message:"contact page"})
    throw new Error("error occur ");
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

app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})