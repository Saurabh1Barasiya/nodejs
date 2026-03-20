import express from "express";

const app = express();

const PORT = 3000;

app.get("/items/:id",(req,res)=>{
    console.log("get data from params",req.params);

    res.send(req.params);
})


app.get("/product",(req,res)=>{
    const data = req.query
    res.send(data);
})

app.use("/",(req,res)=>{
    res.send("default page.");
})

app.listen(PORT,()=>{
    console.log(`server running on the port ${PORT}`);
})
