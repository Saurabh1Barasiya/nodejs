import mongoose from 'mongoose';

const userScheema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
});

// define model

export const userModel = mongoose.model("User",userScheema);

// module.exports = {
//     userModel
// }