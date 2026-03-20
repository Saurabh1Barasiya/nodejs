import express from 'express';

const app = express();

const PORT = 3000;

app.get("/product",(req,res)=>{
    res.send("all the data fetched sucessfully...");
});

app.post("/product",(req,res)=>{
    res.send("data send to the database...");
})

app.patch("/product/:id",(req,res)=>{
    res.send("user partially data upadated...")
})

app.put("/product/:id",(req,res)=>{
    res.send("specific user data updated...");
})

app.delete("/product/:id",(req,res)=>{
    res.send("specific users deleted sucessfully...");
})


app.put("/product/:id/:id",(req,res)=>{
    res.send("very specific data updated");
})

app.listen(PORT,()=>{
    console.log(`server is running in the port ${PORT} `);
})