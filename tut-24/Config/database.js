import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("your_connection_key/practiceDatabse-2");
}