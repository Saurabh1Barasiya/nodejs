import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("your connection string .../practiceDatabse");
}