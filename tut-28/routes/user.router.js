import express from "express";

export const userRouter = express.Router();

userRouter.get("/users",(req,res)=>{
    res.send("hi i m basic server");
})

userRouter.post("/users",(req,res)=>{
    res.send("data saved in the database");
})