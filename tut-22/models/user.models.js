import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:5,
        validate(value){
            if(value.length < 5){
                throw new Error("fist name containt must be 5 character..")
            }
        }
    },
    lastName:{
        type:String,
        required:true,
        minlength:5,
        validate(value){
            if(value.length < 5){
                throw new Error("last name containt must be 5 character..")
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        default:"please write about your bio..."
    }

},{timestamps:true});

export const userModel = mongoose.model("mymodel",userScheema);