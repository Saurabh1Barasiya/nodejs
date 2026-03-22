import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("your_connection_string_url/practiceDatabse-1");
} 