import mongoose from "mongoose";

const userScheema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
},{timeStamp:true});

// create the model .

export const userModel = mongoose.model("User",userScheema);