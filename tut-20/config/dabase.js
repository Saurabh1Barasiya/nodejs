import mongoose from 'mongoose';

export const connectDB = async ()=>{
    await mongoose.connect("your_api_key/devTinder");
}