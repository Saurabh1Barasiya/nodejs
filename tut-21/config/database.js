import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
    name:{
        type:String,
        required:true,  // field is mandatory
        trim:true      //  removes extra spaces
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,    // no two users can share an email
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
} , {timestamps:true}  )

export const User = mongoose.model("User",userScheema);