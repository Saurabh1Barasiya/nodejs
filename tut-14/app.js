import express from "express";
const app = express();

app.use((req,res,next)=>{
    console.log("middle ware for all");
    next();
});

// middleware function 
function checkLogin(req,res,next){
    console.log("i am also a middleware");
    if(false){
        return res.status(401).send("Pehle login karo!");
    }else{
        next();
    }
}

app.get("/signup",(req,res)=>{
    res.send("signup page");
});

app.get("/login",(req,res)=>{
    res.send("login page");
});

app.get("/dashboard",checkLogin,(req,res)=>{
    res.send("dashboard");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});