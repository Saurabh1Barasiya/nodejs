import express from "express";

const app = express();

app.get("/users",(req,res)=>{
    res.send("get all the users");
});

app.post("/users",(req,res)=>{
    res.send("data send to database");
})

app.post("/users/:id",(req,res)=>{
    res.send("send data to database from specific user");
})

app.delete("/users",(req,res)=>{
    res.send("user deleted")
})


app.put("/users",(req,res)=>{
    res.send("user fully updated")
})

app.patch("/users",(req,res)=>{
    res.send("user partially updated");
})

app.use("/",(req,res)=>{
    res.send("default page");
})

app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})