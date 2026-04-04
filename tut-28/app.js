import express from "express";
import { userRouter } from "./routes/user.router.js";
import { productRouter } from "./routes/product.router.js";

const app = express();

app.use("/",userRouter);
app.use("/",productRouter);

app.use((req,res)=>{
    res.send("by default route 404 page not found");
})

app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})