import express from "express";

export const productRouter = express.Router();

productRouter.get("/product",(req,res)=>{
    res.send("here is the product");
})

productRouter.get("/product/:productId",(req,res)=>{
    res.send("here is perticuller product");
})