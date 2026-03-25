import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20,
        validate:(value)=>{
            if(value.length < 4 || value.length > 20){
                throw Error("first name must 4 character long and 20 character small");
            }
        }
    },
    lastName:{
        type:String,
        required:true,
        minlength:[4, "Must be four characters long." ],
        maxlength:[20,"Must be 20 characters or smaller. "]
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

export const userModel = mongoose.model("mymodel",userScheema); 